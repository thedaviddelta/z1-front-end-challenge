import PlayFillIcon from '$/assets/icons/play-fill.svg';
import { Text } from '$/components/Text';
import { formatConstant, formatSeconds } from '$/utils/format';
import { FC } from 'react';

import { useLogic } from './logic';
import {
  Container,
  ExtraWrapper,
  FavButton,
  GenreText,
  Image,
  ImageAnimationItem,
  ImageAnimationWrapper,
  ImageWrapper,
  InfoWrapper,
  PlayButton,
} from './styles';
import { SongCardProps } from './types';

export const SongCard: FC<SongCardProps> = ({ song, songNames }) => {
  const { songDuration, isPlaying, handlePlayClick } = useLogic({
    song,
    songNames,
  });

  return (
    <Container>
      <ImageWrapper>
        <Image src={song.image} alt={`${song.name}'s art`} />
        {isPlaying && (
          <ImageAnimationWrapper>
            {Array.from({ length: 8 }).map((_, i) => (
              <ImageAnimationItem key={i} />
            ))}
          </ImageAnimationWrapper>
        )}
      </ImageWrapper>

      <InfoWrapper>
        <Text tag="h3" variant="bodyBold" color="grayscale900">
          {song.name}
        </Text>
        <Text tag="p" variant="body2" color="grayscale700">
          {song.author.name}
        </Text>
        <Text tag="p" variant="body2" color="grayscale700">
          {song.description}
        </Text>

        <ExtraWrapper>
          <PlayButton
            icon={PlayFillIcon}
            label="Play"
            size={16}
            color="white"
            onClick={handlePlayClick}
          />
          <Text tag="p" variant="caption" color="grayscale700">
            {formatSeconds(songDuration).toMinutes()}
          </Text>
          <GenreText tag="p" variant="caption" color="grayscale900">
            {formatConstant(song.genre).toCapitalized()}
          </GenreText>
        </ExtraWrapper>
      </InfoWrapper>

      <FavButton songId={song.id} />
    </Container>
  );
};
