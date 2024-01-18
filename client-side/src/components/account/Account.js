import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <section className="profile_section">
      <br />
      <Link to="account/perInfo">Personal Info</Link>
      <br />
      <Link to="account/accomodations">Accomodations</Link>
      <br />
      <Link to="account/bookings">Bookings</Link>
    </section>
  );
};

export default Account;
