export const formatSeconds = (seconds?: number) => ({
  toMinutes() {
    if (seconds === undefined || seconds < 0) return '? min';

    const minutes = Math.ceil(seconds / 60);
    return `${minutes} min`;
  },
  toFull() {
    if (seconds === undefined || seconds < 0) return '??:??';

    const hours = Math.floor(seconds / 3600);
    const hoursRest = Math.floor(seconds % 3600);
    const minutes = Math.floor(hoursRest / 60);
    const minutesRest = Math.floor(hoursRest % 60);
    return [hours || -1, minutes, minutesRest]
      .filter((el) => el >= 0)
      .map((el) => el.toString().padStart(3 - el.toString().length, '0'))
      .join(':');
  },
});

export const formatConstant = (genre: string) => ({
  toCapitalized() {
    return genre
      .split(/_|-|\s/)
      .map(
        (word) =>
          word.substring(0, 1).toLocaleUpperCase() +
          word.substring(1).toLocaleLowerCase(),
      )
      .join(' ');
  },
});
