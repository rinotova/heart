import React, { useState } from 'react';
import {
  HeartContext,
  HeartContextType,
  heartInitialState,
} from './Heart/HeartContext';

function Heart({ children }: { children: React.ReactNode }) {
  const [contextState, setContext] =
    useState<HeartContextType>(heartInitialState);

  const heartClickedHandler = () => {
    setContext((prevContext) => ({
      ...prevContext,
      count: prevContext.count + 1,
    }));
  };

  return (
    <HeartContext.Provider value={{ ...contextState, setContext }}>
      <button
        onClick={heartClickedHandler}
        className='cursor-pointer hover:text-[#a83f39] grid grid-cols-2 gap-0 items-center justify-center'
      >
        {children}
      </button>
    </HeartContext.Provider>
  );
}

export default Heart;
