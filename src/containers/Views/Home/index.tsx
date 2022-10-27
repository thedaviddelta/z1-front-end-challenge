import { SongList } from '$/components/SongList';
import { Text } from '$/components/Text';
import { SortKey } from '$/globals/enums/sortKey';
import { FC } from 'react';

import { useLogic } from './logic';
import { Container, SearchInput } from './styles';

const HomeView: FC = () => {
  const { query, sortKey, handleQueryChange, handleSortChange } = useLogic();

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        placeholder="Search by title, genre..."
        value={query}
        onChange={handleQueryChange}
      />
      <select value={sortKey} onChange={handleSortChange}>
        {Object.entries(SortKey).map(([key, value]) => (
          <option value={value} key={value}>
            by {key.toLocaleLowerCase()}
          </option>
        ))}
      </select>
      <SongList query={query} sortKey={sortKey} />
    </Container>
  );
};

export default HomeView;
