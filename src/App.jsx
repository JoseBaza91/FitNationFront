import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";
import { useState } from "react";
import PrivateRouter from "./routes/PrivateRouter";
import PublicRouter from "./routes/PublicRouter";
import NavbarC from "./components/NavbarC";
import FooterC from "./components/FooterC";

const App = () => {

  const [userIsLogged, setUserIsLogged] = useState(false);

  return (
    <BrowserRouter>
    <NavbarC />
      {
        userIsLogged ? (
          <PrivateRouter />
        ) : (
          <PublicRouter setUserIsLogged={setUserIsLogged} />
        )
      }
      <FooterC />
    </BrowserRouter>
  );
};

export default App;
