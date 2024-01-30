import React, { useEffect, useState } from "react";
import "./style.scss";
import { Outlet, useNavigate } from "react-router-dom";
import MyAccmodations from "./MyAccmodations";



const AccomodationPage = () => {
  console.log("AccomodationPage");
  const navigate = useNavigate();
  const [places, setplaces] = useState([]);

  const getPlaces = async () => {
    // send data to server and get response back
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/places`,
        {
          method: "GET",
          credentials: "include",
          withCredentials: true,
        }
      );
      const data = await response.json();
      setplaces([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlaces();
  }, [navigate]);

  return (
    <section className="accomodations_section">
      <h2>Accomodation</h2>
      <button onClick={() => navigate("/account/accomodations/new")}>
        Add new Plcaes
      </button>
      <Outlet />
      {
        places.length > 0 ? <MyAccmodations places={places} /> : null
      }
    </section>

  );
};

export default AccomodationPage;
