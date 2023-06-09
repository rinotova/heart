import React, { useState } from 'react';
import {
  HeartContext,
  HeartContextType,
  heartInitialState,
} from './HeartContext';
import HeartIcon from './HeartIcon';
import HeartCount from './HeartCount';
import HeartPlus from './HeartPlus';

function Heart({
  children,
  count = 0,
}: {
  children: React.ReactNode;
  count?: number;
  onClickCallback?: () => void;
}) {
  const [contextState, setContext] = useState<HeartContextType>({
    ...heartInitialState,
    count,
  });

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

Heart.icon = HeartIcon;
Heart.count = HeartCount;
Heart.plus = HeartPlus;

export default Heart;
