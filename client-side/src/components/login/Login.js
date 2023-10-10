import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login_card">
      <div className="top">
        <h1>Login Page</h1>
      </div>
      <div className="line" />
      <form className="info">
        <h1>Welcome to Airbnb</h1>
        <input type="email" name="email" placeholder="Enter email" required />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button>Continue</button>
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
