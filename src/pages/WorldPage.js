import Header from "../components/Header";

impoert Heaer from '../components/Header';
import Card from '../components/Card';

const WorldPage = (props) => {
  return (
    <div>
      <Header />
      <Title />
      <Card allCountriesData={props.allCountriesData} />
    </div>
  );
};

export default WorldPage;