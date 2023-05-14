import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    window.location.href = `/#${id}`;
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p>Hamburgownia</p>
      </div>

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
    </div>
  );
};

export default NavBar;
