import { SortKey } from '$/globals/enums/sortKey';
import GET_SONG from '$/graphql/GetSong.graphql';
import GET_SONGS from '$/graphql/GetSongs.graphql';

import GetSongMock from './GetSong.json';
import GetSongsMock from './GetSongs.json';
import GetSongsFilteredMock from './GetSongsFiltered.json';
import GetSongsSortedMock from './GetSongsSorted.json';

export const songsFilter = 'allison';
export const songsSort = SortKey.GENRE;

const mocks = [
  {
    request: {
      query: GET_SONG,
      variables: {
        name: GetSongMock.data.song.name,
      },
    },
    result: GetSongMock,
  },
  {
    request: {
      query: GET_SONGS,
      variables: {
        query: '',
        sortKey: SortKey.NAME,
      },
    },
    result: GetSongsMock,
  },
  {
    request: {
      query: GET_SONGS,
      variables: {
        query: songsFilter,
        sortKey: SortKey.NAME,
      },
    },
    result: GetSongsFilteredMock,
  },
  {
    request: {
      query: GET_SONGS,
      variables: {
        query: '',
        sortKey: songsSort,
      },
    },
    result: GetSongsSortedMock,
  },
];

export default mocks;
