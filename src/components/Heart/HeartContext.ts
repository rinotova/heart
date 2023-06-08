import { createContext } from 'react';

export type HeartContextType = {
  count: number;
  setContext: React.Dispatch<React.SetStateAction<HeartContextType>>;
};
export const heartInitialState = {
  count: 0,
  setContext: () => {},
};
export const HeartContext = createContext<HeartContextType>(heartInitialState);
