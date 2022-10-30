import PlayFillIcon from '$/assets/icons/play-fill.svg';
import SkipBackwardFillIcon from '$/assets/icons/skip-backward-fill.svg';
import SkipForwardFillIcon from '$/assets/icons/skip-forward-fill.svg';
import { FavButton } from '$/components/FavButton';
import { IconButton } from '$/components/IconButton';
import { Text } from '$/components/Text';
import { formatSeconds } from '$/utils/format';
import { FC } from 'react';

import { useLogic } from './logic';
import {
  Container,
  HorizontalStack,
  Image,
  PlayButton,
  TrackProgressInput,
} from './styles';
import { PlayerProps } from './types';

export const Player: FC<PlayerProps> = ({ className }) => {
  const { song, goPrevSong, goNextSong } = useLogic();

  return (
    <Container className={className}>
      <HorizontalStack $gap={18}>
        <FavButton />
        <Image
          src={song?.image ?? '/song-fallback.svg'}
          alt={song?.name ? `${song.name}'s art` : 'No track'}
        />
        <div>
          <Text tag="p" variant="body2" color="white">
            {song?.name ?? 'No track'}
          </Text>
          <Text tag="p" variant="caption" color="grayscale200">
            {song?.author?.name ?? 'Unknown'}
          </Text>
        </div>
      </HorizontalStack>
      <HorizontalStack $gap={16}>
        <IconButton
          icon={SkipBackwardFillIcon}
          label="Previous"
          size={24}
          color="white"
          onClick={goPrevSong}
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
          onClick={goNextSong}
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
