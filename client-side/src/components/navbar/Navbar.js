import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { globalContext } from "../../App";

const Navbar = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(globalContext);
  const [username, setusername] = useState("");
  const [showModel, setshowModel] = useState(false);
  async function getUserData() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        console.log(response);
        const data = await response.json();
        setisLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

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
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="other">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <div className="model">
          <i class="fa-solid fa-xmark"></i>
          <div className="action_buttons">
            {isLoggedIn ? (
              <>
                <p>No user</p>
                <button>Login</button>
              </>
            ) : (
              <>
                <p>{username}</p>
                <button>Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
