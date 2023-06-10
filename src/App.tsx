import { useState } from 'react';
import Heart from './components/Heart/Heart';

function App() {
  const [count, setCount] = useState(10);

  const onClickHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <Heart count={count} onClick={onClickHandler}>
        <Heart.icon />
        <Heart.count />
        <Heart.plus />
      </Heart>
    </main>
  );
}

export default App;
