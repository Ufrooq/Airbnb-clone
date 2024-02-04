import React, { useState } from "react";
import { differenceInCalendarDays } from 'date-fns';
import { useNavigate } from "react-router-dom";

const ReserveCard = ({ price, id }) => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    checkIn: 0,
    checkOut: 0,
    guests: 1,
    fullname: "",
    phone: 0
  });
  let noOfDays = 0;
  if (bookingData.checkIn && bookingData.checkOut) {
    noOfDays = differenceInCalendarDays(new Date(bookingData.checkOut), new Date(bookingData.checkIn));
  }

  const sendData = async (data) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/booking`,
        {
          method: "POST",
          credentials: "include",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: data,
            price: noOfDays * price,
            placeId: id
          }),
        }
      );
      if (response.ok) {
        navigate("/account/bookings")
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(bookingData);
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
            {noOfDays > 0 && bookingData.guests > 1 &&
              (
                <>
                  <div className="name_ booking_info">
                    Enter Fullname :
                    <input
                      type="text"
                      name="fullname"
                      value={bookingData.fullname}
                      onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
                    />
                  </div>
                  <div className="phone_ booking_info">
                    Enter Phone :
                    <input
                      type="number"
                      name="phone"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value })}
                    />
                  </div>
                </>
              )
            }
          </>
        </div>
        <button onClick={handleSubmit}>Book this place{noOfDays > 0 && ` for ${noOfDays * price}$`}</button>
      </div>
    </div>
  );
};

export default ReserveCard;
