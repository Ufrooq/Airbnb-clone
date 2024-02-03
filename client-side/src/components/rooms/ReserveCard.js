import React, { useState } from "react";

const ReserveCard = ({ price }) => {

  const [bookingData, setBookingData] = useState({
    checkIn: 0,
    checkOut: 0,
    guests: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookingData);
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
                value={bookingData.checkIn}
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
                value={bookingData.checkOut}
                onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
              />
            </div>
          </div>
          <div className="guests booking_info">
            Number of Guests :
            <input
              type="number"
              name="guests"
              value={bookingData.guests}
              onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
            />
          </div>
          <>
            {bookingData.checkIn > 0 && bookingData.checkOut > 0 && bookingData.guests > 1 &&
              (
                <>
                  <div className="name_ booking_info">
                    Enter Fullname :
                    <input
                      type="text"
                      name="guests"
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
                    />
                  </div>
                  <div className="phone_ booking_info">
                    Enter Phone :
                    <input
                      type="number"
                      name="guests"
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
                    />
                  </div>
                </>
              )
            }
          </>
        </div>
        <button onClick={handleSubmit}>Book Place</button>
      </div>
    </div>
  );
};

export default ReserveCard;
