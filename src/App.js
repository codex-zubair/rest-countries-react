import logo from './logo.svg';
import './App.css';
import Countries from './Componenets/Countries/Countries';
import Country from './Componenets/Country/Country';

function App() {
  return (
    <div className="App">
      <h1>Country Details</h1>
      <Countries></Countries>
      <Country></Country>
    </div>
  );
}

export default App;
