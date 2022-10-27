import { SortKeyType } from '$/globals/enums/sortKey';

export type SongListProps = {
  query: string;
  sortKey: SortKeyType;
};

export type LogicProps = SongListProps;
