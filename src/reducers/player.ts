export type State = {
  playback: 'playing' | 'paused' | 'none'; // mediasession's playback states
  duration: number;
  currentTime: number;
  playrate: number;
  isMuted: boolean;
};

export const initialState: State = {
  playback: 'none',
  duration: 0,
  currentTime: 0,
  playrate: 1,
  isMuted: false,
};

export enum ActionType {
  SETUP,
  PLAY,
  PAUSE,
  STOP,
  TIME_UPDATE,
  NEXT_RATE,
  TOGGLE_MUTE,
}

export type Action =
  | {
      type: ActionType.SETUP;
      payload: {
        duration: number;
      };
    }
  | {
      type: ActionType.PLAY;
    }
  | {
      type: ActionType.PAUSE;
    }
  | {
      type: ActionType.STOP;
    }
  | {
      type: ActionType.TIME_UPDATE;
      payload: {
        currentTime: number;
      };
    }
  | {
      type: ActionType.NEXT_RATE;
    }
  | {
      type: ActionType.TOGGLE_MUTE;
    };

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.SETUP:
      const { duration } = action.payload;
      return {
        ...state,
        playback: 'playing',
        duration,
        currentTime: 0,
      };
    case ActionType.PLAY:
      return {
        ...state,
        playback: 'playing',
      };
    case ActionType.PAUSE:
      return {
        ...state,
        playback: 'paused',
      };
    case ActionType.STOP:
      return {
        ...state,
        playback: 'none',
        duration: 0,
        currentTime: 0,
      };
    case ActionType.TIME_UPDATE:
      const { currentTime } = action.payload;
      return {
        ...state,
        currentTime,
      };
    case ActionType.NEXT_RATE:
      return {
        ...state,
        playrate: state.playrate < 3 ? state.playrate + 1 : 1,
      };
    case ActionType.TOGGLE_MUTE:
      return {
        ...state,
        isMuted: !state.isMuted,
      };
  }
}
