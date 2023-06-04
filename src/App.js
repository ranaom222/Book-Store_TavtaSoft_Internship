import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import { AuthWrapper } from "./context/auth";

import MyNavigation from "./MyNavigation";

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <ToastContainer />
        <Header />
        <Searchbar/>
        <MyNavigation />
        <Footer />
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;