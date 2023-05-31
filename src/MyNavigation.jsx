import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthWarpper, useAuthContext } from "./context/auth";
import CartPg from "./Pages/CartPg";
import HomePg from "./Pages/HomePg";
import LoginPg from "./Pages/LoginPg";
import ProductPg from "./Pages/ProductPg";
import RegPg from "./Pages/RegPg";

function MyNavigation() {
  const authContext = useAuthContext();

  const Redirect = <Navigate to={"/login"} />;
  return (
    <Routes>
      <Route path="/" element={authContext.user.id ? <HomePg /> : Redirect} />
      <Route path="/login" element={<LoginPg />} />
      <Route path="/register" element={<RegPg />} />
      <Route path="/product-page" element={<ProductPg />} />
      <Route path="/cart-page" element={<CartPg />} />
    </Routes>
  );
}

export default MyNavigation;