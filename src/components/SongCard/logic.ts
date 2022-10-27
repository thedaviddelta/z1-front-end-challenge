import { useEffect, useState } from 'react';

import { LogicProps } from './types';

export const useLogic = ({ audioUrl }: LogicProps) => {
  const [songDuration, setSongDuration] = useState<number>();

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.onloadedmetadata = () => {
      setSongDuration(audio.duration);
    };
  }, [audioUrl]);

  return {
    songDuration,
  };
};
