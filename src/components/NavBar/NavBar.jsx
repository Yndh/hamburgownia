import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const { pathname } = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  const scrollToSection = (event, id) => {
    if (pathname === "hamburgownia/") {
      event.preventDefault();
      window.location.href = `hamburgownia/#${id}`;
    }
    setIsChecked(false)
  };

   const checkHandle = (event) => {
     setIsChecked(event.target.checked);
   };

  return (
    <div className="navbar">
      <Link to="hamburgownia/" className="logo">
        <img src={logo} alt="Logo" />
        <p>Hamburgownia</p>
      </Link>

      <input
        type="checkbox"
        name=""
        id="mobile-check"
        onChange={checkHandle}
        checked={isChecked}
      />
      <ol>
        <li>
          <Link to="hamburgownia/" onClick={(e) => scrollToSection(e, "menu")}>
            <p>Menu</p>
          </Link>
        </li>
        <li>
          <Link
            to="hamburgownia/"
            onClick={(e) => scrollToSection(e, "promotions")}
          >
            <p>Promocje</p>
          </Link>
        </li>
        <li>
          <Link
            to="hamburgownia/"
            onClick={(e) => scrollToSection(e, "findus")}
          >
            <p>Znajdź nas</p>
          </Link>
        </li>
      </ol>

      <div className="menu-mobile">
        <label htmlFor="mobile-check">
          <i className={`fa-solid ${isChecked ? "fa-xmark" : "fa-bars"}`}></i>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
