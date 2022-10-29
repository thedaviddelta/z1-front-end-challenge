import PlayFillIcon from '$/assets/icons/play-fill.svg';
import SkipBackwardFillIcon from '$/assets/icons/skip-backward-fill.svg';
import SkipForwardFillIcon from '$/assets/icons/skip-forward-fill.svg';
import { FavButton } from '$/components/FavButton';
import { IconButton } from '$/components/IconButton';
import { Text } from '$/components/Text';
import GET_SONG from '$/graphql/GetSong.graphql';
import { GetSongQuery } from '$/graphql/types';
import { formatSeconds } from '$/utils/format';
import { useQuery } from '@apollo/client';
import { FC } from 'react';

import {
  Container,
  HorizontalStack,
  Image,
  PlayButton,
  TrackProgressInput,
} from './styles';
import { PlayerProps } from './types';

export const Player: FC<PlayerProps> = ({ className }) => {
  // song info is already in cache so it works like a global store
  const { data } = useQuery<GetSongQuery>(GET_SONG, {
    variables: { name: 'Allison Williams' },
  });

  const song = data?.song;

  return (
    <Container className={className}>
      <HorizontalStack $gap={18}>
        <FavButton />
        <Image src={song?.image} alt={`${song?.name ?? ''}'s art`} />
        <div>
          <Text tag="p" variant="body2" color="white">
            {song?.name}
          </Text>
          <Text tag="p" variant="caption" color="grayscale200">
            {song?.author?.name}
          </Text>
        </div>
      </HorizontalStack>
      <HorizontalStack $gap={16}>
        <IconButton
          icon={SkipBackwardFillIcon}
          label="Previous"
          size={24}
          color="white"
        />
        <PlayButton
          icon={PlayFillIcon}
          label="Play"
          size={24}
          color="grayscale900"
        />
        <IconButton
          icon={SkipForwardFillIcon}
          label="Next"
          size={24}
          color="white"
        />
      </HorizontalStack>
      <HorizontalStack $gap={12}>
        <Text tag="p" variant="caption" color="white">
          {formatSeconds(40).toFull()}
        </Text>
        <TrackProgressInput type="range" $progress={40} />
        <Text tag="p" variant="caption" color="white">
          {formatSeconds(200).toFull()}
        </Text>
      </HorizontalStack>
    </Container>
  );
};
