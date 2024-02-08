import countriesJson from '../countries.json';

const Selector = () => {
  countriesJson.map((country) =>
    console.log(country)
  )
  return(
    <div>
      <select>
        {countriesJson.map((country,index) =>
          <option key={index}>{country.Country}</option>
        )}
      </select>
    </div>
  );
};

export default Selector;