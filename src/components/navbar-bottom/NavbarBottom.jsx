import React from "react";
import { IoStar } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const NavbarBottom = () => {
  return (
    <nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="sub__nav">
          <div className="nav__address">
            <button className="address__btn1">Месяц красных цен</button>
            <button>
              Из Китая <IoStar color="gold" />
            </button>
          </div>
          <div className="nav__languages">
            <button>
              <IoLocationSharp /> Toshkent Tumani
            </button>
            <button>RU</button>
            <button>UZS</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBottom;
