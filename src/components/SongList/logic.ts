import GET_SONGS from '$/graphql/GetSongs.graphql';
import { GetSongsQuery } from '$/graphql/types';
import { useQuery } from '@apollo/client';
import { useDeferredValue } from 'react';

import { LogicProps } from './types';

export const useLogic = ({ query, sortKey }: LogicProps) => {
  const deferredQuery = useDeferredValue(query);

  const { data, loading, error } = useQuery<GetSongsQuery>(GET_SONGS, {
    variables: { query: deferredQuery, sortKey },
  });

  return {
    songs: data?.songs?.songs,
    error,
    isLoading: loading,
  };
};
