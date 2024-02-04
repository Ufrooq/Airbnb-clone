import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MyAccmodations = ({ places }) => {
  const navigate = useNavigate();

  const handleDeletePlace = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/places`,
        {
          method: "DELETE",
          credentials: "include",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id
          })
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="my_listed_places">
      {
        places.length > 0 ? places.map((place, key) => (
          <div key={key} className="accomodation">
            <div className="image">
              <img src={`${process.env.REACT_APP_BASE_URL}/Uploads/${place.photos[0]}`}
                alt="image" />
            </div>
            <div className="info">
              <h2>{place.title}</h2>
              <p>
                {place.description}
              </p>
            </div>
            <div className="_buttons">
              <button onClick={() => handleDeletePlace(place._id)}>delete</button>
              <button onClick={() => navigate(place._id)}>edit</button>
            </div>
          </div>
        )) :
          <h1>No Places Found</h1>
      }
    </section>
  );
};

export default MyAccmodations;
