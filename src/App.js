import {useState} from "react";
import countriesJson from './countries.json';
import TopPage from "./pages/TopPage";
import './App.css';
import Selector from "./components/Selector";

function App() {
  const[country, setCountry] = useState("");
  const[countryDate, setCountryDate] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });

  const getCountryDate =  () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res=>res.json())
      .then(date=>console.log(date.length-1))
  }

  return (
    <div>
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryDate={getCountryDate} />
    </div>
  );
}

export default App;
