import logo from './logo.svg';
import './App.css';
import Countries from './Componenets/Countries/Countries';
import Country from './Componenets/Country/Country';

function App() {
  return (
    <div className="App">
      <h1 className='text-2xl font-semibold'>Country Details</h1>

      {/* Adding grid layout For each Country */}
      <section className='grid grid-cols-3 gap-2 w-11/12 mx-auto mt-2'>
      <Countries></Countries>
      </section>
      
    </div>
  );
}

export default App;
