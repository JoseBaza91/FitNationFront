import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas";
Rutas;
BrowserRouter;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Rutas></Rutas>
      </BrowserRouter>
    </>
  );
};

export default App;
