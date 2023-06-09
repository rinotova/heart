import { useContext } from 'react';
import { HeartContext } from './HeartContext';

function HeartCount() {
  const heartContext = useContext(HeartContext);
  return (
    <span>
      <p className='text-black text-sm -ml-6'>{heartContext.count}</p>
    </span>
  );
}

export default HeartCount;
