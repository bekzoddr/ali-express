import React, { memo, useEffect, useState } from "react";
import axios from "../../api";
import Products from "../../components/products/Products";
import useWishlistStore from "../../context/wishlistSlice";
import { Button } from "@mui/material";
import image from "../../assets/images/empty.png";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const wishes = useWishlistStore((state) => state.wishlist);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingTop: "200px",
        marginBottom: "30px",
      }}
    >
      {wishes.length ? (
        <Products title="Wishlist" data={wishes} />
      ) : (
        <div className="empty container">
          <img width={500} src={image} alt="" />
          <Link to="/">
            <Button variant="contained">Shop Now</Button>
          </Link>
        </div>
      )}
      <br />
      <br />
      <br />
      <Products title="RELATED PRODUCTS" data={data.slice(0, 5)} />
    </div>
  );
};

export default memo(Wishlist);
