<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";

const App = () => {
  return (
    <Router>
      <RoutesViews />
    </Router>
  );
};

export default App;
=======
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
>>>>>>> registro
