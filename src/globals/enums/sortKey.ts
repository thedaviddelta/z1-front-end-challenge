// native-enum with 'as const' instead of ts-enum
// enables to easily use its keys and/or values

export const SortKey = {
  NAME: 'name',
  AUTHOR: 'author.name',
  GENRE: 'genre.name',
} as const;

export type SortKeyType = typeof SortKey[keyof typeof SortKey];
