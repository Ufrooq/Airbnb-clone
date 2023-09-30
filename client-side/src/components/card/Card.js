import React from "react";
import "./style.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="media">
        <img
          src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
          alt="media"
        />
      </div>
      <div className="desc">
        <h2>Bleru, Sweden</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, est!
        </p>
      </div>
      <div className="price">
        <p>
          <span>120$</span> per night
        </p>
      </div>
    </div>
  );
};

export default Card;
