import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        <i className="fa-brands fa-airbnb"></i>
        <h1>airbnb</h1>
      </div>
      <div className="features">
        <Link style={{ color: "black" }}>Anywhere</Link>
        <Link style={{ color: "black" }}>Anyweek</Link>
        <Link style={{ color: "black" }}>Add guests</Link>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="other">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </section>
  );
};

export default Navbar;
