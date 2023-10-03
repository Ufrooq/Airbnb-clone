import React, { useContext } from "react";
import { globalContext } from "../../App";
import "./style.scss";

const Login = () => {
  const { showModel, setShowModel } = useContext(globalContext);

  return (
    <div className="login_card">
      <div className="top">
        <i class="fa-solid fa-xmark" onClick={() => setShowModel(false)}></i>
        <h1>Login Page</h1>
      </div>
      <div className="line" />
      <div className="info">
        <h1>Welcome to Airbnb</h1>
        <input type="email" name="email" placeholder="Enter email" required />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Login;
