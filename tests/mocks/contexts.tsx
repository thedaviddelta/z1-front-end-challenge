import { useFavs } from '$/contexts/favs';
import { useQueue } from '$/contexts/queue';
import { FC, PropsWithChildren } from 'react';

type QueueType = ReturnType<typeof useQueue>;
type FavsType = ReturnType<typeof useFavs>;

export const queueSetup = () => {
  const queue = {} as QueueType;
  const QueueWrapper: FC<PropsWithChildren> = ({ children }) => {
    const tempQueue = useQueue();
    Object.assign(queue, tempQueue);
    return <>{children}</>;
  };
  return { QueueWrapper, queue } as const;
};

export const favsSetup = (songId?: number) => {
  const favs = {} as FavsType;
  const FavsWrapper: FC<PropsWithChildren> = ({ children }) => {
    const tempFavs = useFavs(songId);
    Object.assign(favs, tempFavs);
    return <>{children}</>;
  };
  return { FavsWrapper, favs } as const;
};
