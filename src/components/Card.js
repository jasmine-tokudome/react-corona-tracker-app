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
      {allCountriesData.map((singleData,index) =>
      <div key={index}>
        <h2>{singleData.Country}</h2>
        <p>新規感染者：{singleData.NewConfirmed}</p>
        <p>感染者総数：{singleData.TotalConfirmed}</p>
      </div>
      )}
    </div>
  );
};

export default Card;
