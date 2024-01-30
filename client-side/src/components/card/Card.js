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
        <i className="fa-solid fa-heart"></i>
      </div>
      <div className="desc">
        <div className="main">
          <h2>Bleru, Sweden</h2>
          <span>
            <i className="fa-solid fa-star"></i>4.9
          </span>
        </div>
        <p>300 kilometers away</p>
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
