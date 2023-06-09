import Heart from './components/Heart/Heart';

function App() {
  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <Heart>
        <Heart.icon />
        <Heart.count />
        <Heart.plus />
      </Heart>
    </main>
  );
}

export default App;
