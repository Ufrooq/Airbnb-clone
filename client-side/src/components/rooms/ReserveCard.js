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
        <div className="inputs_">
          <div className="_in_out">
            <div className="cld">
              <label>
                Check in :
              </label>
              <input type="date" name="in" id="in" />
            </div>
            <div className="cld out">
              <label>
                Check out :
              </label>
              <input type="date" name="" id="" />
            </div>
          </div>
          <div className="guests">
            Number of Guests
            <input type="number" />
          </div>
        </div>
        <button>Book Place</button>
      </div>
    </div>
  );
};

export default ReserveCard;
