import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";

const PublicRouter = ({ setUserIsLogged }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/iniciar-sesion" />} />

      <Route
        path="/iniciar-sesion"
        element={<LoginPage setUserIsLogged={setUserIsLogged} />}
      />
      <Route path="/registro" element={<RegisterPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PublicRouter;
