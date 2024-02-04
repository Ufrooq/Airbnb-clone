import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Card = ({ title, img, desc, price, id }) => {
  const [liked, setliked] = useState(false);
  return (
    <Link to={`/rooms/${id}`}
      style={{ textDecoration: "none", color: "black" }}
      className="card"
      id={title}
    >
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
        <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
          {desc}
        </p>
      </div>
      <div className="price">
        <p>
          <span>{price}$</span> per night
        </p>
      </div>
    </Link>
  );
};

export default Card;
