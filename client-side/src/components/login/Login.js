import React, { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = userData;
    console.log(userData);
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        credentials: "include",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log(response);
      if (!response.ok) {
        return;
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login_card">
      <div className="top">
        <h1>Login Page</h1>
      </div>
      <div className="line" />
      <form className="info" onSubmit={handleSubmit}>
        <h1>Welcome to Airbnb</h1>
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
          required
          onChange={handleChange}
        />
        <button type="submit">Continue</button>
        <p>
          Don't have an account ?
          <span>
            <Link to="/register" style={{ color: "black" }}>
              {" "}
              Register
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
