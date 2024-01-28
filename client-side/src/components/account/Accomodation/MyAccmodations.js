import React from "react";
import { Link } from "react-router-dom";

const MyAccmodations = ({ placeId, title, desc, media }) => {
  return (
    <Link to={placeId} className="accomodation">
      <div className="image">
        <img src={`${process.env.REACT_APP_BASE_URL}/Uploads/${media}`}
          alt="image" />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>
          {desc}
        </p>
      </div>
    </Link>
  );
};

export default MyAccmodations;
