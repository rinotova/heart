import { useContext, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import { HeartContext } from './HeartContext';

function HeartPlus() {
  const plusRef = useRef<HTMLDivElement>(null);
  const heartContext = useContext(HeartContext);
  const { count } = heartContext;
  const isHeartLiked = count > 0;

  useEffect(() => {
    if (plusRef.current && count > 0) {
      animate(
        plusRef.current,
        {
          y: [0, -75],
          opacity: [1, 0.75, 0.75, 0],
        },
        {
          ease: 'easeIn',
          type: 'spring',
          duration: 2,
        }
      );
    }
  }, [count]);
  return (
    <div
      ref={plusRef}
      className={`text-green-400 text-sm -mt-10 -ml-2 -z-10 ${
        !isHeartLiked ? 'hidden' : ''
      }`}
    >
      +1
    </div>
  );
}

export default HeartPlus;
