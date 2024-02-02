import React, { useState } from "react";

const ReserveCard = ({ price }) => {


  const { bookingData, setBookingData } = useState({
    checkIn: 0,
    checkOut: 0,
    guests: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingData({ ...bookingData, [e.target.name]: e.target.value })
  }

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
              <input
                type="date"
                name="checkIn"
                onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
              />
            </div>
            <div className="cld out">
              <label>
                Check out :
              </label>
              <input
                type="date"
                name="checkOut"
                onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
              />
            </div>
          </div>
          <div className="guests">
            Number of Guests
            <input
              type="number"
              name="guests"
              onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
            />
          </div>
        </div>
        <button onClick={handleSubmit}>Book Place</button>
      </div>
    </div>
  );
};

export default ReserveCard;
