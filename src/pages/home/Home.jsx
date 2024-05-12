import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import axios from "../../api/index";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Banner />
      <Products data={products} />
    </div>
  );
};

export default Home;
