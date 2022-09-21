
import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
    {/* Header Section */}
    <Header></Header>

      <h1  className='text-2xl font-semibold bg-lime-400 py-2 mb-5'>World Country List</h1>

      {/* Adding grid layout For each Country */}
      <section className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-3 w-11/12 mx-auto mt-2'>
      <Countries></Countries>
      </section>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
