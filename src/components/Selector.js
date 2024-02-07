import countriesJson from '../countries.json';

const Selector = () => {

  return(
    <div>
      <select>
        {countriesJson.map((country) =>
          console.log(country.Country)
        )}
      </select>
    </div>
  );
};

export default Selector;