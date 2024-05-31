import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import useWishlistStore from "../../context/wishlistSlice";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Products = ({ data, title, categorys }) => {
  const [value, setValue] = useState(0);
  const wishes = useWishlistStore((state) => state.wishlist); // get wishlist from Zustand store
  const toggleToWishes = useWishlistStore((state) => state.toggleToWishes); // get toggleToWishes action from Zustand store

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let products = data?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__image">
        <h2>SALE</h2>
        <button onClick={() => toggleToWishes(el)}>
          {wishes.some((w) => w.id === el.id) ? (
            <FaHeart className="likes" />
          ) : (
            <FaRegHeart className="likes" />
          )}
        </button>
        <img width={216} height={216} src={el.images[0]} alt="" />
      </div>
      <div className="product__body">
        <h2>{el.title}</h2>
        <div className="review">
          <IoStar color="#cc290a" />
          <h2>{el.rating}</h2>
          <h2>{el.id} купили</h2>
        </div>
        <div className="product__prices">
          <div className="soon">
            <h2 className="price">{el.discountPercentage} UZS</h2>
            <h2 className="time">скоро</h2>
          </div>
          <h2 className="cost">{el.price} UZS</h2>
        </div>
      </div>
    </div>
  ));

  let tabs = categorys?.map((category, index) => (
    <Tab key={index} label={category} {...a11yProps(index)} />
  ));

  return (
    <div className="container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabs}
          </Tabs>
        </Box>
      </Box>
      <br />
      <br />
      <div className="products">{products}</div>
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  categorys: PropTypes.array,
};

export default Products;
