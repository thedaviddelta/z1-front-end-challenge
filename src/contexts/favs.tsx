import { STORAGE_KEYS } from '$/globals/constants/storageKeys';
import { localGetItem, localSetItem } from '$/utils/storage';
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const FavsContext = createContext<
  [number[], Dispatch<SetStateAction<number[]>>]
>([[], () => {}]);

const initLocalStorage = () => {
  const initial = localGetItem(STORAGE_KEYS.FAV_LIST);
  return (initial ? JSON.parse(initial) : []) as number[];
};

export const FavsProvider: FC<PropsWithChildren> = ({ children }) => (
  <FavsContext.Provider value={useState(initLocalStorage)}>
    {children}
  </FavsContext.Provider>
);

export const useFavs = (songId?: number) => {
  const [favs, setFavs] = useContext(FavsContext);

  const isFaved = favs.some((item) => item === songId);

  const toggleFav = () => {
    if (!songId) return;

    setFavs((current) => {
      const newList = isFaved
        ? current.filter((item) => item !== songId)
        : [...current, songId];

      localSetItem(STORAGE_KEYS.FAV_LIST, JSON.stringify(newList));
      return newList;
    });
  };

  return {
    isFaved,
    toggleFav,
  };
};
