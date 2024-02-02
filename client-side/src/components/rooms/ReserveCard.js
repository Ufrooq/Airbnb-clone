import React from "react";

const ReserveCard = ({ price }) => {
  return (
    <div className="reservation_section">
      <div className="reservation_card">
        <div className="top_Ofcard">
          <p>
            <span>${price}</span> night
          </p>
          <p>
            <i className="fa-solid fa-star"></i>4.9 . <a href="/">56 reviews</a> .
          </p>
        </div>
        <button>Check availability</button>
      </div>
    </div>
  );
};

export default ReserveCard;
