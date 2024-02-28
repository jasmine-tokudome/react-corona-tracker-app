const Card = (props) => {
  return (
    <div>
      <h2>Card</h2>
      <button>Get All Data</button>
      {props.allCountriesData.map((singleData,index) =>
      <div key={index}>
        <h2>{singleData.Country}</h2>
        <p>新規感染者：{singleData.NewConfirmed.toLocaleString()}</p>
        <p>感染者総数：{singleData.TotalConfirmed.toLocaleString()}</p>
      </div>
      )}
    </div>
  );
};

export default Card;
