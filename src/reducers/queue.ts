export type State = {
  songNames: string[];
  currentIndex: number;
};

export const initialState: State = {
  songNames: [],
  currentIndex: 0,
};

export enum ActionType {
  SET,
  PREV,
  NEXT,
}

export type Action =
  | {
      type: ActionType.SET;
      payload: State;
    }
  | {
      type: ActionType.PREV;
    }
  | {
      type: ActionType.NEXT;
    };

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.PREV:
      return {
        ...state,
        currentIndex:
          state.currentIndex > 0
            ? state.currentIndex - 1
            : state.songNames.length - 1,
      };
    case ActionType.NEXT:
      const nextIndex = state.currentIndex + 1;
      return {
        ...state,
        currentIndex: nextIndex < state.songNames.length ? nextIndex : 0,
      };
  }
}
