export const play = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation(async () => undefined); // eslint-disable-line @typescript-eslint/require-await
export const pause = jest
  .spyOn(window.HTMLMediaElement.prototype, 'pause')
  .mockImplementation(() => undefined);

export const resetAllMocks = () => {
  play.mockReset();
  pause.mockReset();
};
