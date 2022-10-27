export const SortKey = {
  NAME: 'name',
  AUTHOR: 'author.name',
  GENRE: 'genre.name',
} as const;

export type SortKeyType = typeof SortKey[keyof typeof SortKey];
