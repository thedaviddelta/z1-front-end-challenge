import { SortKey, SortKeyType } from '$/globals/enums/sortKey';
import { ChangeEvent, useState } from 'react';

export const useLogic = () => {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKeyType>(SortKey.NAME);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSortKey(e.target.value as SortKeyType);

  return {
    query,
    sortKey,
    handleQueryChange,
    handleSortChange,
  };
};
