import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Reg = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="register_card">
      <div className="top">
        <h1>Registration Page</h1>
      </div>
      <div className="line" />
      <form className="info">
        <h1>Welcome to Airbnb</h1>
        <input type="text" name="name" placeholder="Enter your name" required />
        <input type="email" name="email" placeholder="Enter email" required />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button>Continue</button>
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
