import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminClass from '../pages/AdminClass'
import AdminUserPage from '../pages/AdminUserPage'
import AdminPage from '../pages/AdminPage'
import UserPage from '../pages/UserPage'
import UserCarPage from '../pages/UserCarPage'
import UserFavPage from '../pages/UserFavPage'
import PlanDetailsPage from '../pages/PlanDetailsPage'
import AdminProductPage from '../pages/AdminProductPage'
import ProductPage from '../pages/ProductPage'
import TurnosPage from '../pages/TurnosPage'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import NavbarC from '../components/NavbarC'
import FooterC from '../components/FooterC'

const PrivateRouter = () => {
  return (
    <>
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default PrivateRouter
