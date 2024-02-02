import React, { useState } from "react";
import "./style.scss";

const Card = ({ title, img }) => {
  const [liked, setliked] = useState(false);
  return (
    <div className="card">
      <div className="media">
        <img
          src={`${process.env.REACT_APP_BASE_URL}/Uploads/${img}`}
          alt="media"
        />
        {liked ?
          <i className="fa-solid fa-heart"
            style={{ color: "red" }}
            onClick={() => setliked(false)}
          >
          </i>
          :
          <i class="fa-regular fa-heart"
            style={{ color: "red" }}
            onClick={() => setliked(true)}
          >
          </i>

        }
      </div>
      <div className="desc">
        <div className="main">
          <h2>{title}</h2>
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
    </div >
  );
};

export default Card;
