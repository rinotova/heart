import React, { useMemo, useState } from 'react';
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
  onClick,
}: {
  children: React.ReactNode;
  count?: number;
  onClick?: () => void;
}) {
  const isControlled = !!(count && onClick);
  const [contextState, setContext] = useState<HeartContextType>(
    { count } || heartInitialState
  );
  const heartClickedHandler = () => {
    isControlled
      ? onClick()
      : setContext((prevContext) => ({
          ...prevContext,
          count: prevContext.count + 1,
        }));
  };

  const memoizedContextValue = useMemo(
    () => (isControlled ? { count } : contextState),
    [contextState, isControlled, count]
  );

  return (
    <HeartContext.Provider value={memoizedContextValue}>
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
