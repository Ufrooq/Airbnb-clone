import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Reg = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
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
          onChange={() => handleChange}
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
