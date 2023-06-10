import { createContext } from 'react';

export type HeartContextType = {
  count: number;
};
export const heartInitialState = {
  count: 0,
};
export const HeartContext = createContext<HeartContextType>(heartInitialState);
