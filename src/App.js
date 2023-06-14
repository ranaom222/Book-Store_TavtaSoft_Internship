import { BrowserRouter} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import MyNavigation from "./MyNavigation";
import { Provider } from "react-redux";
import store from "./state/store";
import { loadIcon } from "./assets";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
     <Provider store={store}>
        <ToastContainer />
        <div>
          <div className="loader-wrapper" id="load">
            <img src={loadIcon} alt="Loading..." />
          </div>
        </div>
        <Header />
        <Searchbar/>
        <MyNavigation />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;