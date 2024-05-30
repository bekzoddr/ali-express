import React, { useState, useEffect } from "react";
import logo from "../../assets/images/nav-logo.png";
import { RiBookOpenFill } from "react-icons/ri";
import { BsBoxFill, BsEmojiSmile } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";

const Header = () => {
  const [isShrink, setIsShrink] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (data) => {
    return data?.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filteredData = handleSearch(data);

  return (
    <header>
      <div className="container action">
        <div className={`navbar ${isShrink ? "shrink" : ""}`}>
          <img width={150} src={logo} alt="logo" />
          <h1>AliExpress</h1>
          <div className="navbar__items">
            <button className="nav__button">
              <RiBookOpenFill className="nav__icon" />
              <h2>Каталог</h2>
            </button>
            <div className="nav__search">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type="text"
                placeholder="search..."
              />
              <button>Найти</button>
            </div>
            <ul className="nav__links">
              <button className="nav__button">
                <BsBoxFill className="nav__icon" />
                <h2>Заказы</h2>
              </button>
              <button className="nav__button">
                <FaShoppingCart className="nav__icon" />
                <h2>Корзина</h2>
              </button>
              <button className="nav__button">
                <BsEmojiSmile color="yellow" className="nav__icon" />
                <h2>Войти</h2>
              </button>
            </ul>
          </div>
        </div>
        {isFocused && searchValue && (
          <div className="search-results">
            {filteredData.length > 0 ? (
              filteredData.map((product) => (
                <div key={product.id} className="searched__item">
                  <h3>{product.title}</h3>
                </div>
              ))
            ) : (
              <h2>Ничего не найдено</h2>
            )}
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </header>
  );
};

export default Header;
