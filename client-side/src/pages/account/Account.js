import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <section className="account_section">
      <div className="navigations">
        <NavLink to="perInfo">
          <i class="fa-solid fa-user"></i>Personal Info
        </NavLink>
        <NavLink to="accomodations">
          <i class="fa-solid fa-list"></i>Accomodations
        </NavLink>
        <NavLink to="bookings">
          <i class="fa-solid fa-house"></i>Bookings
        </NavLink>
      </div>
      <Outlet />
    </section >
  );
};

export default Account;
