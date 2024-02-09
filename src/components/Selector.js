import {useState} from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
  const[country, setCountry] = useState('');
  return(
    <div>
      <select onChange = {(e)=> setCountry(e.target.value)}>
        {countriesJson.map((country,index) =>
          <option key={index}>{country.Country}</option>
        )}
      </select>
    </div>
  );
};

export default Selector;