import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Shopcategory from "./pages/Shopcategory.jsx";
import Product from "./pages/product.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Addcart.jsx";
import Footer from "./component/Footer/Footer.jsx";
import men_banner from "./component/Assests/banner_mens.png";
import women_banner from "./component/Assests/banner_women.png";
import kids_banner from "./component/Assests/banner_kids.png";
import AdminPage from "./pages/AdminPage.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="Admin-page" element ={<AdminPage/>} />
          <Route
            path="mens"
            element={<Shopcategory banner={men_banner} category="men" />}
          />
          <Route
            path="womens"
            element={<Shopcategory banner={women_banner} category="women" />}
          />
          <Route
            path="kids"
            element={<Shopcategory banner={kids_banner} category="kid" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="Login" element={<Login />} />

          <Route path="Sign-up" element={<Signup/>} />
          <Route path="Cart" element={<Cart />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
