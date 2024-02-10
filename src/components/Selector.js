import {useState} from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
  const[country, setCountry] = useState("");
  const getCountryDate =  () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res=>res.json())
      .then(date=>console.log(date))
  }
  return(
    <div>
      <select onChange={(e)=>setCountry(e.target.value)}>
        <option>Select A Country</option>
        {countriesJson.map((country,index) =>
          <option key={index} value={country.Slug}>{country.Country}</option>
        )}
      </select>
      <button onClick={getCountryDate}>Get Data</button>
    </div>
  );
};

export default Selector;