import reducer, {
  Action,
  ActionType,
  initialState,
  State,
} from '$/reducers/queue';
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

const QueueContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const QueueProvider: FC<PropsWithChildren> = ({ children }) => (
  <QueueContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </QueueContext.Provider>
);

export const useQueue = () => {
  const [state, dispatch] = useContext(QueueContext);

  return {
    currentSong: state.songNames[state.currentIndex],
    setQueue: (songNames: string[], currentIndex: number) => {
      dispatch({ type: ActionType.SET, payload: { songNames, currentIndex } });
    },
    goPrevSong: () => {
      dispatch({ type: ActionType.PREV });
    },
    goNextSong: () => {
      dispatch({ type: ActionType.NEXT });
    },
  };
};
