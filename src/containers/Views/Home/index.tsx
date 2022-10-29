import { Select } from '$/components/Select';
import { SongList } from '$/components/SongList';
import { Text } from '$/components/Text';
import { SortKey } from '$/globals/enums/sortKey';
import { FC } from 'react';

import { useLogic } from './logic';
import { Container, SearchInput, SubtitleWrapper } from './styles';

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

      <SubtitleWrapper>
        <Text tag="h2" variant="title2">
          Featured songs
        </Text>
        <Select value={sortKey} onChange={handleSortChange} label="Sort by">
          {Object.entries(SortKey).map(([key, value]) => (
            <option value={value} key={value}>
              by {key.toLocaleLowerCase()}
            </option>
          ))}
        </Select>
      </SubtitleWrapper>

      <SongList query={query} sortKey={sortKey} />
    </Container>
  );
};

export default HomeView;
