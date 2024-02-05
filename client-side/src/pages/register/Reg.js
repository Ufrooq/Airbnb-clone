import React, { useContext, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import Mycontext from "../../components/Mycontext";

const Reg = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setisLoggedIn } = useContext(Mycontext);
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = userData;
    console.log(userData);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/register`,
        {
          method: "POST",
          credentials: "include",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      console.log(response);
      if (!response.ok) {
        return;
      }
      setisLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="register_card">
      <div className="top">
        <h1>Registration Page</h1>
      </div>
      <div className="line" />
      <form className="info" onSubmit={handleSubmit}>
        <h1>Welcome to Airbnb</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button type="submit">Continue</button>
        <p>
          Already have an account ?
          <span>
            <Link to="/login" style={{ color: "black" }}>
              {" "}
              Login
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Reg;
