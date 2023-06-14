import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CartPg from "./Pages/CartPg";
import HomePg from "./Pages/HomePg";
import LoginPg from "./Pages/LoginPg";
import UpdateProfile from "./Pages/UpdateProfile";
import RegPg from "./Pages/RegPg";
import Book from "./Pages/Book";
import AddBook from "./Pages/AddBook";
import Users from "./Pages/Users";
import Categories from "./Pages/Categories";
import AddCategory from "./Pages/AddCategory";
import EditUser from "./Pages/EditUser";
import { useSelector } from "react-redux";

function MyNavigation() {
  const authData = useSelector((state) => state.auth.user);

  const Redirect = <Navigate to={"/login"} />;
  return (
    <Routes>
      <Route path="/" element={authData.id ? <HomePg /> : Redirect} />
      <Route path="/login" element={<LoginPg />} />
      <Route
        path="/register"
        element={!authData.id ? <RegPg /> : Redirect}
      />
      <Route
        path="/update-profile"
        element={authData.id ? <UpdateProfile /> : Redirect}
      />
      <Route path="/book" element={authData.id ? <Book /> : Redirect} />
      <Route
        path="/add-book"
        element={authData.id ? <AddBook /> : Redirect}
      />
      <Route path="/users" element={authData.id ? <Users /> : Redirect} />
      <Route
        path="/edit-user"
        element={authData.id ? <EditUser /> : Redirect}
      />
       <Route
        path="/edit-user/:id"
        element={authData.id ? <EditUser /> : Redirect}
      />
      <Route
        path="/categories"
        element={authData.id ? <Categories /> : Redirect}
      />
      <Route
        path="/add-category"
        element={authData.id ? <AddCategory /> : Redirect}
      />
      <Route
        path="/add-category/:id"
        element={authData.id ? <AddCategory /> : Redirect}
      />
      <Route
        path="/add-book/:id"
        element={authData.id ? <AddBook /> : Redirect}
      />
      <Route
        path="/cart-page"
        element={authData.id ? <CartPg /> : Redirect}
      />
    </Routes>
  );
}

export default MyNavigation;
