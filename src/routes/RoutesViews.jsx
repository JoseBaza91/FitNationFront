import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminProductPage from "../pages/AdminProductPage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import PlanDetailsPage from "../pages/PlanDetailsPage";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import TurnosPage from "../pages/TurnosPage";
import PlanDetailsPage from "../pages/PlanDetailsPage";
import AdminUserPage from "../pages/AdminUserPage";
import AdminClass from "../pages/AdminClass";
import ProductPage from "../pages/ProductPage";
import UserCarPage from "../pages/UserCarPage";
import UserFavPage from "../pages/UserFavPage";

const RoutesViews = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/admin-clases" element={<AdminClass />} />
        <Route path="/admin-usuarios" element={<AdminUserPage />} />
        <Route path="/admin-inicio" element={<AdminPage />} />
        <Route path="/usuario-inicio" element={<UserPage />} />
        <Route path="/usuario-carrito" element={<UserCarPage />} />
        <Route path="/usuario-favoritos" element={<UserFavPage />} />
        <Route path="/plan-detalles" element={<PlanDetailsPage />} />
        <Route path="/admin-productos" element={<AdminProductPage />} />
        <Route path="/productos/:id" element={<ProductPage />} />
        <Route path="/turnos" element={<TurnosPage />} />
        <Route path="/iniciar-sesion" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plan-detalles" element={<PlanDetailsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterC />
    </>
  );
};

export default RoutesViews;
