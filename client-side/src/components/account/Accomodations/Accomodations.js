import React, { useState } from "react";
import "./style.scss";
import { Outlet, useNavigate } from "react-router-dom";

const Accomodations = () => {
  const navigate = useNavigate();
  return (
    <section className="accomodations_section">
      <h2>Accomodation</h2>
      <button onClick={() => navigate("/account/accomodations/new")}>
        Add new Plcaes
      </button>
      <Outlet />
    </section>
  );
};

export default Accomodations;
