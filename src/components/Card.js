import { useState } from "react" ;

const Card = () => {
  const [allCountriesData, setAllCountriesData] = useState([]); // [
  const getAllCountriesData = () => {
  fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
    .then(res => res.json())
    .then(data => setAllCountriesData(data.Countries))
}
  return (
    <div>
      {console.log(allCountriesData)}
      <h2>Card</h2>
      <button onClick={getAllCountriesData}>Get All Data</button>
      {allCountriesData.map((signleData) =>
      console.log(signleData)
      )}
    </div>
  );
};

export default Card;
