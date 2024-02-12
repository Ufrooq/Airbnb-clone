import React, { useEffect, useState } from "react";
import "./style.scss";
import { Outlet, useNavigate } from "react-router-dom";
import MyAccmodations from "./MyAccmodations";
import LoaderMain from "../../../components/LoaderMain";
import Empty from "../../../components/Empty";



const AccomodationPage = () => {
  const navigate = useNavigate();
  const [places, setplaces] = useState([]);
  const [noDataFound, setnoDataFound] = useState(null);

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
      setTimeout(() => {
        if (response.ok && data.length > 0) {
          setplaces([...data]);
        } else {
          setnoDataFound(true);
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlaces();
  }, [navigate]);

  return (
    <section className="accomodations_section">
      <h1>My Accomodations</h1>
      <button onClick={() => navigate("/account/accomodations/new")}>
        Add new Plcaes <i class="fa-solid fa-plus"></i>
      </button>
      <Outlet />
      {
        places.length > 0 ? <MyAccmodations places={places} /> :
          (noDataFound == null) ? <LoaderMain /> : <Empty title="Accomodations" />
      }
    </section>

  );
};

export default AccomodationPage;
