import React from "react";
import { Routes, Route } from "react-router";
import LoginPage from "../pages/LoginPage";
import AuthLayout from "../layout/AuthLayout";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* AUTH ROUTES */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* PROTECTED ROUTES */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="navbar" element={<Navbar />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
