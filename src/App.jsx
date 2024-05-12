import "./sass/style.scss";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import ProductCart from "./pages/product-cart/ProductCart";
import ProductChekout from "./pages/product-chaekout/ProductChekout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-cart" element={<ProductCart />} />
        <Route path="product-chekout" element={<ProductChekout />} />
      </Routes>
    </>
  );
}

export default App;
