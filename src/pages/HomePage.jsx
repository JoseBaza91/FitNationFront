import CardC from "../components/CardC";
import CarruselC from "../components/CarruselC";

const HomePage = () => {
  return (
    <>
      <CarruselC />
      <div className="container">
        <div className="row">
          <CardC />
          <CardC />
          <CardC />
          <CardC />
          <CardC />
          <CardC />
        </div>
      </div>
    </>
  );
};

export default HomePage;
