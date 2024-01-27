import React from "react";

const MyAccmodations = ({ title, desc, media }) => {
  console.log(media);
  return (
    <div className="accomodation">
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
    </div>
  );
};

export default MyAccmodations;
