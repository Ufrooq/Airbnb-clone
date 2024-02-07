import axios from "axios";
import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { format, differenceInCalendarDays } from "date-fns";
import "./style.scss";
import LoaderMain from "../../../components/LoaderMain";
import Empty from "../../../components/Empty";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [noDataFound, setnoDataFound] = useState(null);
  const getBookings = async () => {
    // send data to server and get response back
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/booking`,
        { withCredentials: true },
      );
      setTimeout(() => {
        if (response.ok) {
          setBookings(response.data);
        } else {
          setnoDataFound(true);
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookings();
  }, [])

  return (
    <section className="booking">
      <h1>My Bookings</h1>
      {bookings.length > 0 ? (
        bookings.map((booking, key) => (
          <BookingCard
            key={key}
            img={booking.placeId.photos[0]}
            placeId={booking.placeId._id}
            title={booking.placeId.title}
            checkIn={format(new Date(booking.checkIn), "yyyy-MM-dd")}
            checkOut={format(new Date(booking.checkOut), "yyyy-MM-dd")}
            nights={differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))}
            price={booking.price}
          />
        ))
      ) :
        (noDataFound == null) ? <LoaderMain /> : <Empty />
      }
    </section>
  );
};

export default Bookings;
