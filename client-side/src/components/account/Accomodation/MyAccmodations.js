import React from "react";
import { Link } from "react-router-dom";

const MyAccmodations = ({ places }) => {

  return (
    <section className="my_listed_places">
      {
        places.length > 0 ? places.map((place, key) => (
          <Link to={place._id} key={key} className="accomodation">
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
          </Link>
        )) :
          <h1>No Places Found</h1>
      }
    </section>
  );
};

export default MyAccmodations;
