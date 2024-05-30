import React, { useEffect, useState } from "react";
import NavbarBottom from "../../components/navbar-bottom/NavbarBottom";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import axios from "../../api";
const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const category = ["All", "Bags", "Bags", "Sneakers", "Belt", "Sunglasses"];
  const categoryItems = category?.map((el, inx) => <li key={inx}>{el}</li>);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products`)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [count]);
  return (
    <div className="home">
      <NavbarBottom />
      <br />
      <Hero />
      <br />
      <br />
      <Products title="BEST SELLER" categorys={categoryItems} data={data} />
    </div>
  );
};

export default Home;
