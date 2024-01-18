import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { globalContext } from "../../App";

const Navbar = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(globalContext);
  const [userdata, setuserdata] = useState();
  const [showModel, setshowModel] = useState(false);
  const navigate = useNavigate();
  async function getUserData() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setuserdata(data);
        setisLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleNavigation(par) {
    setshowModel(false);
    if (par == "in") {
      navigate("/login");
      return;
    }
    navigate("/register");
  }

  useEffect(() => {
    getUserData();
  }, [isLoggedIn]);

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
        <i
          class="fa-solid fa-ellipsis-vertical"
          onClick={() => setshowModel(true)}
        ></i>
        {showModel ? (
          <div className="model">
            <i
              class="fa-solid fa-xmark"
              onClick={() => setshowModel(false)}
            ></i>
            <div className="action_buttons">
              {isLoggedIn ? (
                <>
                  <Link to="/profile" style={{ color: "black" }}>
                    {userdata.currentUser.name}'s Profile
                  </Link>
                  <button>Logout</button>
                </>
              ) : (
                <>
                  <p>No user</p>
                  <button onClick={() => handleNavigation("in")}>Login</button>
                  <button onClick={() => handleNavigation("reg")}>
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Navbar;
