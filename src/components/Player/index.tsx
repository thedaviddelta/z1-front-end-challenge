import PauseFillIcon from '$/assets/icons/pause-fill.svg';
import PlayFillIcon from '$/assets/icons/play-fill.svg';
import SkipBackwardFillIcon from '$/assets/icons/skip-backward-fill.svg';
import SkipForwardFillIcon from '$/assets/icons/skip-forward-fill.svg';
import VolumeMuteFillIcon from '$/assets/icons/volume-mute-fill.svg';
import VolumeUpFillIcon from '$/assets/icons/volume-up-fill.svg';
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
  PlaybackButton,
  PlayrateButton,
  TrackProgressInput,
} from './styles';
import { AudioEvent, PlayerProps } from './types';

export const Player: FC<PlayerProps> = ({ className }) => {
  const {
    song,
    audioRef,
    playback,
    duration,
    currentTime,
    playrate,
    isMuted,
    setup,
    play,
    pause,
    stop,
    timeUpdate,
    timeSeek,
    nextRate,
    toggleMute,
    handlePrev,
    handleNext,
  } = useLogic();

  return (
    <Container className={className}>
      <audio
        ref={audioRef}
        src={song?.audio?.url}
        onPlay={play}
        onPause={pause}
        onEnded={handleNext}
        onLoadedMetadata={(e: AudioEvent) => setup(e.target.duration)}
        onTimeUpdate={(e: AudioEvent) => timeUpdate(e.target.currentTime)}
        onError={stop}
      />

      <HorizontalStack $gap={18}>
        <FavButton songId={song?.id} />
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
          onClick={handlePrev}
          disabled={playback === 'none'}
        />
        <PlaybackButton
          icon={playback === 'playing' ? PauseFillIcon : PlayFillIcon}
          label={playback === 'playing' ? 'Pause' : 'Play'}
          size={24}
          color="grayscale900"
          onClick={playback === 'playing' ? pause : play}
          disabled={playback === 'none'}
        />
        <IconButton
          icon={SkipForwardFillIcon}
          label="Next"
          size={24}
          color="white"
          onClick={handleNext}
          disabled={playback === 'none'}
        />
      </HorizontalStack>

      <HorizontalStack $gap={24}>
        <HorizontalStack $gap={12}>
          <Text tag="p" variant="caption" color="white">
            {formatSeconds(currentTime).toFull()}
          </Text>
          <TrackProgressInput
            type="range"
            aria-label="Track progress"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => timeSeek(Number(e.target.value))}
          />
          <Text tag="p" variant="caption" color="white">
            {formatSeconds(duration).toFull()}
          </Text>
        </HorizontalStack>

        <PlayrateButton onClick={nextRate}>{playrate}x</PlayrateButton>
        <IconButton
          icon={isMuted ? VolumeMuteFillIcon : VolumeUpFillIcon}
          label={isMuted ? 'Unmute' : 'Mute'}
          size={24}
          color="white"
          onClick={toggleMute}
        />
      </HorizontalStack>
    </Container>
  );
};
