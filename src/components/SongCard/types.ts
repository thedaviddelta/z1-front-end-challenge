import { GetSongsQuery } from '$/graphql/types';

type Song = GetSongsQuery['songs']['songs'][0];

export type SongCardProps = {
  song: Song;
};

export type LogicProps = {
  audioUrl: Song['audio']['url'];
};
