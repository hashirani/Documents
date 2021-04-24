import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Population from './components/Population/Population';

function App() {
const [countries , setCountries] = useState([]);
const [addcountry, setAddCountry] = useState([]);

useEffect(()=>{
fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => {
    setCountries(data);
    //console.log(data);
    const names=data.map(country =>country.name);
    //console.log(names);
  });

},[]);
const handleCountry =(country)=>{
  // console.log('add click',country)
const newAddCountry=[...addcountry,country]
setAddCountry(newAddCountry);
}
  return (
    <div className="App">
      <h1>country lodded:{countries.length}</h1>
      <h3>Country Added:{addcountry.length}</h3>
    <Population addcountry={addcountry}></Population>
      
      
        {
          countries.map(country =><Country country={country}
             key={country.alpha3Code}
             handleCountry={handleCountry}
             >

             </Country>)
        }
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
