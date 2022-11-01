Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(() => null),
    setItem: jest.fn(() => null),
  },
  writable: true,
});

// eslint-disable-next-line @typescript-eslint/unbound-method
export const localStorageSetMock = window.localStorage.setItem;
