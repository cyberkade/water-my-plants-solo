import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">LOGO GOES HERE</div>
      <Link to="/login">Log In</Link>
      <Link to="/faq">FAQ</Link>
    </div>
  );
};

export default Header;
