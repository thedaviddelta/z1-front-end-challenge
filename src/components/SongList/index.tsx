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
      <ErrorText>
        <ErrorFillIcon /> {error.name}: {error.message}
      </ErrorText>
    );

  if (!songs || songs.length <= 0)
    return (
      <ErrorText>
        <ErrorFillIcon /> No songs were found
      </ErrorText>
    );

  const songNames = songs.map(({ name }) => name);

  return (
    <Container>
      {songs.map((song) => (
        <SongCard key={song.id} song={song} songNames={songNames} />
      ))}
    </Container>
  );
};
