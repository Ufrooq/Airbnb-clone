import React, { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";

const Reg = () => {
  const navigate = useNavigate();
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
    try {
      // if (name != "" && email != "" && password != "") {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(response);
      if (!response.ok) {
        return;
      }
      navigate("/");
      // }
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
