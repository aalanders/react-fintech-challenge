import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar" data-testid="nav-bar">
      <div className="nav-bar__link-container">
        <Link to="/">View all Funds</Link>
      </div>
    </div>
  );
};

export default NavBar;
