import React, { useEffect, useState } from "react";
import "./style.scss";
import { Outlet, useNavigate } from "react-router-dom";
import MyAccmodations from "./MyAccmodations";



const AccomodationPage = () => {
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
      setplaces([...places, ...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlaces();
  }, [])

  return (
    <section className="accomodations_section">
      <h2>Accomodation</h2>
      <button onClick={() => navigate("/account/accomodations/new")}>
        Add new Plcaes
      </button>
      <Outlet />
      <section className="my_listed_places">
        {
          places.length > 0 ? places.map((place) => (
            <MyAccmodations title={place.title} desc={place.description} media={place.photos[2]} />
          )) :
            <h1>No Places Found</h1>
        }
      </section>
    </section>
  );
};

export default AccomodationPage;
