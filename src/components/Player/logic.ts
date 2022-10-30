import { useQueue } from '$/contexts/queue';
import GET_SONG from '$/graphql/GetSong.graphql';
import { GetSongQuery } from '$/graphql/types';
import { useQuery } from '@apollo/client';

export const useLogic = () => {
  const { currentSong, goPrevSong, goNextSong } = useQueue();

  // song info is already in cache so it works like a global store
  const { data } = useQuery<GetSongQuery>(GET_SONG, {
    variables: { name: currentSong ?? '' },
  });

  const song = data?.song;

  return {
    song,
    goPrevSong,
    goNextSong,
  };
};
