import { useContext } from 'react';
import { HeartContext } from './HeartContext';

interface HeartProps {
  size?: number;
}

function HeartIcon({ size }: HeartProps) {
  const heartContext = useContext(HeartContext);
  const isHeartLiked = heartContext.count > 0;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={isHeartLiked ? '#a83f39' : 'currentColor'}
      viewBox='0 0 24 24'
      width={size ?? 42}
      height={size ?? 42}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
      />
    </svg>
  );
}

export default HeartIcon;
