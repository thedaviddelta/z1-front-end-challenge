import { SongCard } from '$/components/SongCard';
import { FC } from 'react';

import { useLogic } from './logic';
import { Container, LoadingSpinner } from './styles';
import { SongListProps } from './types';

export const SongList: FC<SongListProps> = (props) => {
  const { songs, errorMsg, isLoading } = useLogic(props);

  if (isLoading)
    return <LoadingSpinner />;

  if (songs)
    return (
      <Container>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </Container>
    );

  return null;
};
