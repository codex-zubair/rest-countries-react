
import './App.css';
import Countries from './Components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <h1  className='text-2xl font-semibold bg-slate-200 py-2 mb-5'>Country Details</h1>

      {/* Adding grid layout For each Country */}
      <section className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-3 w-11/12 mx-auto mt-2'>
      <Countries></Countries>
      </section>
      
    </div>
  );
}

export default App;
