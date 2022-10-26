import { Text } from '$/components/Text';
import GET_SONGS from '$/graphql/GetSongs.graphql';
import { GetSongsQuery } from '$/graphql/types';
import { useQuery } from '@apollo/client';
import { FC, useDeferredValue, useState } from 'react';

import { Container, SearchInput } from './styles';

const SortTypes = {
  NAME: 'name',
  AUTHOR: 'author.name',
  GENRE: 'genre.name',
} as const;

type SortType = typeof SortTypes[keyof typeof SortTypes];

const HomeView: FC = () => {
  const [query, setQuery] = useState('');
  const [sortType, setSortType] = useState<SortType>(SortTypes.NAME);
  const deferredQuery = useDeferredValue(query);

  const { data, loading, error } = useQuery<GetSongsQuery>(GET_SONGS, {
    variables: { query: deferredQuery, sortType },
  });

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        placeholder="Search by title, genre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value as SortType)}
      >
        {Object.entries(SortTypes).map(([key, value]) => (
          <option value={value} key={value}>
            by {key.toLocaleLowerCase()}
          </option>
        ))}
      </select>
      <div>
        {data?.songs?.songs?.map(({ name }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </Container>
  );
};

export default HomeView;
