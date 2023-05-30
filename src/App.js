import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import HomePg from "./Pages/HomePg";
import LoginPg from "./Pages/LoginPg";
import ProductPg from "./Pages/ProductPg";
import RegPg from "./Pages/RegPg";
import CartPg from "./Pages/CartPg";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Header />
        <Searchbar />
        <Routes>
          <Route path="/" Component={HomePg} />
          <Route path="/login" Component={LoginPg} />
          <Route path="/register" Component={RegPg} />
          <Route path="/product-page" Component={ProductPg} />
          <Route path="/cart-page" Component={CartPg} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;