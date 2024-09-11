import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas";
import Footer from "./components/Footer";
import NavbarC from "./components/NavbarC";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarC />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App; 
