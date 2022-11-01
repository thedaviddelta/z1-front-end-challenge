import HomeView from '$/containers/Views/Home';
import { STORAGE_KEYS } from '$/globals/constants/storageKeys';
import userEvent from '@testing-library/user-event';

import { songsFilter, songsSort } from './mocks/apollo';
import { favsSetup, queueSetup } from './mocks/contexts';
import GetSongsMock from './mocks/GetSongs.json';
import GetSongsFilteredMock from './mocks/GetSongsFiltered.json';
import GetSongsSortedMock from './mocks/GetSongsSorted.json';
import { localStorageSetMock } from './mocks/localStorage';
import { render, screen, waitFor } from './test-utils';

describe('card rendering', () => {
  const expectCardsToHaveSongs = async (mock: typeof GetSongsMock) => {
    const { songs } = mock.data.songs;
    const cards = await screen.findAllByRole('article');

    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(songs[index]?.name ?? '');
    });
  };

  it('renders default song list correctly', async () => {
    render(<HomeView />);

    await expectCardsToHaveSongs(GetSongsMock);
  });

  it('renders filtered song list on search type', async () => {
    const user = userEvent.setup();
    render(<HomeView />);

    const searchInput = screen.getByRole('textbox', { name: /search/i });
    await waitFor(() => user.type(searchInput, songsFilter));

    await expectCardsToHaveSongs(GetSongsFilteredMock);
  });

  it('renders sorted song list on select change', async () => {
    const user = userEvent.setup();
    render(<HomeView />);

    const sortingSelect = screen.getByRole('combobox', { name: /sort by/i });
    await waitFor(() => user.selectOptions(sortingSelect, songsSort));

    await expectCardsToHaveSongs(GetSongsSortedMock);
  });
});

describe('context updating', () => {
  it('updates queue on play click', async () => {
    const { songs } = GetSongsMock.data.songs;
    const { QueueWrapper, queue } = queueSetup();

    const user = userEvent.setup();
    render(<HomeView />, { wrapper: QueueWrapper });

    expect(queue.currentSong).toBeUndefined();

    const playBtns = await screen.findAllByRole('button', { name: /play/i });
    const firstPlayBtn = playBtns[0];

    expect(firstPlayBtn).not.toBeUndefined();
    await waitFor(() => firstPlayBtn && user.click(firstPlayBtn));

    expect(queue.currentSong).toBe(songs[0]?.name ?? '');
  });

  it('favs and unfavs on button click', async () => {
    const { songs } = GetSongsMock.data.songs;
    const { FavsWrapper, favs } = favsSetup(songs[0]?.id);

    const user = userEvent.setup();
    render(<HomeView />, { wrapper: FavsWrapper });

    expect(favs.isFaved).toBeFalsy();

    const favBtns = await screen.findAllByRole('button', { name: /fav/i });
    const firstFavBtn = favBtns[0];

    expect(firstFavBtn).not.toBeUndefined();
    await waitFor(() => firstFavBtn && user.click(firstFavBtn));

    expect(favs.isFaved).toBeTruthy();
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.FAV_LIST,
      expect.any(String),
    );

    const unfavBtns = await screen.findAllByRole('button', { name: /unfav/i });
    const firstUnfavBtn = unfavBtns[0];

    expect(firstUnfavBtn).not.toBeUndefined();
    await waitFor(() => firstUnfavBtn && user.click(firstUnfavBtn));

    expect(favs.isFaved).toBeFalsy();
    expect(localStorageSetMock).toHaveBeenLastCalledWith(
      STORAGE_KEYS.FAV_LIST,
      expect.any(String),
    );
  });
});
