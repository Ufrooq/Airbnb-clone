import React, { useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { globalContext } from "../../App";

const Navbar = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(globalContext);
  return (
    <section className="navbar">
      <Link to="/" style={{ color: "black" }}>
        <div className="logo">
          <i className="fa-brands fa-airbnb"></i>
          <h1>airbnb</h1>
        </div>
      </Link>
      <div className="features">
        <Link style={{ color: "black" }}>Anywhere</Link>|
        <Link style={{ color: "black" }}>Anyweek</Link>|
        <Link style={{ color: "black" }}>Add guests</Link>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="other">
        {isLoggedIn ? <span>umar farooq</span> : null}
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </section>
  );
};

export default Navbar;
