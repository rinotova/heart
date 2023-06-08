import Heart from './components/Heart';
import HeartCount from './components/Heart/HeartCount';
import HeartIcon from './components/Heart/HeartIcon';

function App() {
  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <Heart>
        <HeartIcon />
        <HeartCount />
      </Heart>
    </main>
  );
}

export default App;
