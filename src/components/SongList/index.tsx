import ErrorFillIcon from '$/assets/icons/error-fill.svg';
import { SongCard } from '$/components/SongCard';
import { FC } from 'react';

import { useLogic } from './logic';
import { Container, ErrorText, LoadingSpinner } from './styles';
import { SongListProps } from './types';

export const SongList: FC<SongListProps> = (props) => {
  const { songs, error, isLoading } = useLogic(props);

  if (isLoading) return <LoadingSpinner />;

  if (error)
    return (
      <ErrorText tag="p" variant="bodyBold" color="white">
        <ErrorFillIcon /> {error.name}: {error.message}
      </ErrorText>
    );

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
