import { useQueue } from '$/contexts/queue';
import { STORAGE_KEYS } from '$/globals/constants/storageKeys';
import GET_SONG from '$/graphql/GetSong.graphql';
import { GetSongQuery } from '$/graphql/types';
import reducer, { ActionType, initialState, State } from '$/reducers/player';
import { localGetItem, localSetItem } from '$/utils/storage';
import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useReducer, useRef } from 'react';

const initLocalStorage = (state: State): State => {
  const initialPlayrate = localGetItem(STORAGE_KEYS.PLAYRATE);
  const initialIsMuted = localGetItem(STORAGE_KEYS.IS_MUTED);
  return {
    ...state,
    playrate: initialPlayrate ? Number(initialPlayrate) : state.playrate,
    isMuted: initialIsMuted ? initialIsMuted === 'true' : state.isMuted,
  };
};

export const useLogic = () => {
  const { currentSong, goPrevSong, goNextSong } = useQueue();

  // song info is already in cache so it works like a global store
  const { data } = useQuery<GetSongQuery>(GET_SONG, {
    variables: { name: currentSong ?? '' },
  });

  const song = data?.song;

  const [state, dispatch] = useReducer(reducer, initialState, initLocalStorage);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const setup = (duration: number) => {
    dispatch({ type: ActionType.SETUP, payload: { duration } });
    void audioRef.current?.play();
    navigator.mediaSession?.setPositionState({
      duration,
      position: 0,
    });
  };

  const play = useCallback(() => {
    dispatch({ type: ActionType.PLAY });
    void audioRef.current?.play();
  }, []);

  const pause = useCallback(() => {
    dispatch({ type: ActionType.PAUSE });
    void audioRef.current?.pause();
  }, []);

  const stop = useCallback(() => {
    dispatch({ type: ActionType.STOP });
    void audioRef.current?.pause();
  }, []);

  const timeUpdate = useCallback((currentTime: number) => {
    dispatch({ type: ActionType.TIME_UPDATE, payload: { currentTime } });
  }, []);

  const timeSeek = useCallback(
    (currentTime: number) => {
      if (!audioRef.current) return;

      timeUpdate(currentTime);
      audioRef.current.currentTime = currentTime;

      navigator.mediaSession?.setPositionState({
        duration: state.duration,
        position: currentTime,
      });
    },
    [timeUpdate, state.duration],
  );

  const nextRate = () => {
    dispatch({ type: ActionType.NEXT_RATE });
  };

  // not ideal but there's no better solution right now to imperatively sync with reducer
  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = state.playrate;

    localSetItem(STORAGE_KEYS.PLAYRATE, state.playrate.toString());
  }, [state.playrate, song]);

  const toggleMute = () => {
    dispatch({ type: ActionType.TOGGLE_MUTE });
  };

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = state.isMuted;

    localSetItem(STORAGE_KEYS.IS_MUTED, state.isMuted.toString());
  }, [state.isMuted]);

  const handlePrev = useCallback(() => {
    if (state.currentTime <= 5) goPrevSong();

    timeSeek(0);
  }, [goPrevSong, timeSeek, state.currentTime]);

  const handleNext = useCallback(() => {
    goNextSong();
    timeSeek(0);
  }, [goNextSong, timeSeek]);

  useEffect(() => (currentSong ? pause() : stop()), [currentSong, pause, stop]);

  useEffect(() => {
    if (!navigator.mediaSession) return;

    navigator.mediaSession.playbackState = state.playback;
    navigator.mediaSession.metadata =
      state.playback !== 'none' && song
        ? new MediaMetadata({
            title: song.name,
            artist: song.author.name,
            artwork: [{ src: song.image }],
          })
        : null;
  }, [state.playback, song]);

  useEffect(() => {
    if (!navigator.mediaSession) return;

    navigator.mediaSession.setActionHandler('play', play);
    navigator.mediaSession.setActionHandler('pause', pause);
    navigator.mediaSession.setActionHandler('stop', stop);
    navigator.mediaSession.setActionHandler('previoustrack', handlePrev);
    navigator.mediaSession.setActionHandler('nexttrack', handleNext);
    navigator.mediaSession.setActionHandler(
      'seekto',
      ({ seekTime }) => seekTime && timeSeek(seekTime),
    );
  }, [play, pause, stop, handlePrev, handleNext, timeSeek]);

  return {
    song,
    audioRef,
    playback: state.playback,
    duration: state.duration,
    currentTime: state.currentTime,
    playrate: state.playrate,
    isMuted: state.isMuted,
    setup,
    play,
    pause,
    stop,
    timeUpdate,
    timeSeek,
    nextRate,
    toggleMute,
    handlePrev,
    handleNext,
  };
};
