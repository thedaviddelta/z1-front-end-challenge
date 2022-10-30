import { GetSongsQuery } from '$/graphql/types';

type Song = GetSongsQuery['songs']['songs'][0];

export type SongCardProps = {
  song: Song;
  songNames: string[];
};

export type LogicProps = SongCardProps;
