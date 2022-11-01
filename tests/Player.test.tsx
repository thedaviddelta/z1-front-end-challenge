import { Player } from '$/components/Player';
import { STORAGE_KEYS } from '$/globals/constants/storageKeys';
import userEvent from '@testing-library/user-event';

import * as audioMock from './mocks/audio';
import { favsSetup, queueSetup } from './mocks/contexts';
import GetSongMock from './mocks/GetSong.json';
import GetSongsMock from './mocks/GetSongs.json';
import { localStorageSetMock } from './mocks/localStorage';
import { act, render, screen, waitFor } from './test-utils';

const { song } = GetSongMock.data;
const { QueueWrapper, queue } = queueSetup();
const { FavsWrapper, favs } = favsSetup(song.id);

const songNames = GetSongsMock.data.songs.songs.map(({ name }) => name);
const currentIndex = songNames.findIndex((name) => name === song.name);
const initQueue = () => queue.setQueue(songNames, currentIndex);

beforeEach(() => {
  audioMock.resetAllMocks();
});

describe('metadata rendering', () => {
  it('renders default metadata correctly', () => {
    render(<Player />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/song-fallback.svg');
    expect(document.body).toHaveTextContent(/no track/i);
    expect(document.body).toHaveTextContent(/unknown/i);
  });

  it("renders queue's selected song metadata", async () => {
    render(<Player />, { wrapper: QueueWrapper });
    act(() => initQueue());

    const img = screen.getByRole('img');
    await waitFor(() => expect(img).toHaveAttribute('src', song.image));
    expect(document.body).toHaveTextContent(song.name);
    expect(document.body).toHaveTextContent(song.author.name);
  });
});

describe('playback controls', () => {
  it('plays and pauses correctly', async () => {
    const user = userEvent.setup();
    render(<Player />, { wrapper: QueueWrapper });

    const playBtn = screen.getByRole('button', { name: /play$/i });
    expect(playBtn).toBeDisabled();

    act(() => initQueue());
    expect(audioMock.pause).toHaveBeenCalled();
    expect(playBtn).not.toBeDisabled();

    await waitFor(() => user.click(playBtn));
    expect(audioMock.play).toHaveBeenCalled();
    const pauseBtn = screen.getByRole('button', { name: /pause$/i });

    await waitFor(() => user.click(pauseBtn));
    expect(audioMock.pause).toHaveBeenCalled();
  });

  it('switches song back and forth', async () => {
    const user = userEvent.setup();
    render(<Player />, { wrapper: QueueWrapper });

    const prevBtn = screen.getByRole('button', { name: /prev/i });
    const nextBtn = screen.getByRole('button', { name: /next/i });
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).toBeDisabled();

    act(() => initQueue());
    expect(queue.currentSong).toBe(songNames[0]);
    expect(prevBtn).not.toBeDisabled();
    expect(nextBtn).not.toBeDisabled();

    await waitFor(() => user.click(nextBtn));
    expect(queue.currentSong).toBe(songNames[1]);

    await waitFor(() => user.click(prevBtn));
    expect(queue.currentSong).toBe(songNames[0]);
  });
});

describe('extra buttons', () => {
  it('cycles through playback rate', async () => {
    const user = userEvent.setup();
    render(<Player />);

    const playrateBtn = screen.getByRole('button', { name: /playrate/i });
    expect(playrateBtn).toHaveTextContent('1x');

    await waitFor(() => user.click(playrateBtn));
    expect(playrateBtn).toHaveTextContent('2x');
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.PLAYRATE,
      '2',
    );

    await waitFor(() => user.click(playrateBtn));
    expect(playrateBtn).toHaveTextContent('3x');
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.PLAYRATE,
      '3',
    );

    await waitFor(() => user.click(playrateBtn));
    expect(playrateBtn).toHaveTextContent('1x');
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.PLAYRATE,
      '1',
    );
  });

  it('toggles mute correctly', async () => {
    const user = userEvent.setup();
    render(<Player />);

    const muteBtn = screen.getByRole('button', { name: /mute/i });
    await waitFor(() => user.click(muteBtn));
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.IS_MUTED,
      'true',
    );

    const unmuteBtn = screen.getByRole('button', { name: /unmute/i });
    await waitFor(() => user.click(unmuteBtn));
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.IS_MUTED,
      'false',
    );
  });

  it('favs and unfavs current song', async () => {
    const user = userEvent.setup();
    render(<Player />, {
      wrapper: ({ children }) => (
        <QueueWrapper>
          <FavsWrapper>{children}</FavsWrapper>
        </QueueWrapper>
      ),
    });

    expect(favs.isFaved).toBeFalsy();

    const favBtn = screen.getByRole('button', { name: /fav/i });
    expect(favBtn).toBeDisabled();

    act(() => initQueue());
    await waitFor(() => expect(favBtn).not.toBeDisabled());

    await waitFor(() => user.click(favBtn));
    expect(favs.isFaved).toBeTruthy();
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.FAV_LIST,
      expect.any(String),
    );

    const unfavBtn = screen.getByRole('button', { name: /unfav/i });
    await waitFor(() => user.click(unfavBtn));
    expect(favs.isFaved).toBeFalsy();
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.FAV_LIST,
      expect.any(String),
    );
  });
});
