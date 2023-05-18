import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (event, id) => {
    console.log(location);
    if(location.pathname == '/'){
      event.preventDefault();
      window.location.href = `/#${id}`;
    }
    document.querySelector("#mobile-check").checked = false;
    checkHandle();
  };

  const checkHandle = () => {
    setIsChecked(document.querySelector("#mobile-check").checked);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        <p>Hamburgownia</p>
      </Link>

      <input type="checkbox" name="" id="mobile-check" onChange={checkHandle} />
      <ol>
        <li>
          <Link to="#" onClick={(e) => scrollToSection(e, "menu")}>
            <p>Menu</p>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={(e) => scrollToSection(e, "promotions")}>
            <p>Promocje</p>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={(e) => scrollToSection(e, "findus")}>
            <p>Znajdź nas</p>
          </Link>
        </li>
      </ol>

      <div className="menu-mobile">
        <label htmlFor="mobile-check">
          <i class={`fa-solid ${isChecked ? "fa-xmark" : "fa-bars"}`}></i>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
