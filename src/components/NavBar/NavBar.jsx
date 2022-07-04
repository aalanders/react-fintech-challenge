import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar" data-testid="nav-bar">
      <img className="nav-bar__img" src={logo} alt="Aumni Logo" />
      <div className="nav-bar__link-container">
        <Link to="/">View all Funds</Link>
      </div>
    </div>
  );
};

export default NavBar;
