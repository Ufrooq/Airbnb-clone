import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import Mycontext from "../../components/Mycontext";
import DotsLoader from "../../components/DotsLoader";

const Navbar = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(Mycontext);
  const [userdata, setuserdata] = useState(null);
  const [showModel, setshowModel] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const [isTyping, setisTyping] = useState("");
  const [loader, setloader] = useState(true);
  const navigate = useNavigate();
  const typingTimeoutRef = useRef(null);

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
  };



  function handleNavigation(par) {
    setshowModel(false);
    if (par == "in") {
      navigate("/login");
      return;
    }
    navigate("/register");
  };


  const fetchPosts = async (value) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/places`,
        {
          method: "GET",
          credentials: "include",
          withCredentials: true,
        }
      );
      const data = await response.json();
      const sugg = data.filter(
        (item) => value && item?.title?.toLowerCase().includes(value)
      )
      setSuggestions(sugg);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSearch(e) {
    setisTyping(e.target.value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      setloader(true);
    }
    typingTimeoutRef.current = setTimeout(() => {
      fetchPosts(e.target.value);
      setloader(false);
    }, 1000);
  };



  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setisLoggedIn(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };


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
        <div className="searchBox"
          style={{
            cursor: `${userdata ? "" : "not-allowed"}`,
            pointerEvents: `${userdata ? "" : "none"}`
          }}
        >
          <button onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass search_">
            </i>
          </button>
          <input
            type="text"
            placeholder="Search places..."
            value={isTyping}
            onChange={handleSearch}
            ref={typingTimeoutRef}
            disabled={userdata?.length > 0}

          />
          {isTyping && <i
            class="fa-solid fa-xmark cross_"
            onClick={() => setisTyping("")}
          ></i>}
        </div>
        {isTyping && (
          <div className="suggestion_box">
            {!loader && suggestions ?
              <ul>
                {suggestions.map((item) => (
                  <div key={item._id}>
                    <li >
                      <a href={`#${item.title}`}>{item.title}</a>
                    </li>
                    <hr />
                  </div>
                ))}
              </ul>
              :
              <DotsLoader />
            }

          </div>
        )}
      </div>
      <div className="other">
        <i
          class="fa-solid fa-ellipsis-vertical"
          onClick={() => setshowModel(!showModel)}
        ></i>
        {showModel ? (
          <div className="nav_modal">
            <i
              class="fa-solid fa-xmark"
              onClick={() => setshowModel(false)}
            ></i>
            <div className="action_buttons">
              {isLoggedIn ? (
                <>
                  <Link to="/account" style={{ color: "black" }}>
                    {userdata.currentUser.name}'s Profile
                  </Link>
                  <button onClick={handleLogout}>Logout</button>
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
    </section >
  );
};

export default Navbar;
