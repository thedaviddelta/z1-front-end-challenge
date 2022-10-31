import { useQueue } from '$/contexts/queue';
import { useEffect, useState } from 'react';

import { LogicProps } from './types';

export const useLogic = ({ song, songNames }: LogicProps) => {
  const [songDuration, setSongDuration] = useState<number>();

  useEffect(() => {
    const audio = new Audio(song.audio.url);
    audio.onloadedmetadata = () => {
      setSongDuration(audio.duration);
    };
  }, [song.audio.url]);

  const { currentSong, setQueue } = useQueue();

  const isPlaying = currentSong === song.name;

  const currentIndex = songNames.findIndex((name) => name === song.name);
  const handlePlayClick = () => setQueue(songNames, currentIndex);

  return {
    songDuration,
    isPlaying,
    handlePlayClick,
  };
};
