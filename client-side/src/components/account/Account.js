import React from "react";
import { Link, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <section className="account_section">
      <br />
      <Link to="perInfo">Personal Info</Link>
      <br />
      <Link to="accomodations">Accomodations</Link>
      <br />
      <Link to="bookings">Bookings</Link>
      <Outlet />
    </section>
  );
};

export default Account;
