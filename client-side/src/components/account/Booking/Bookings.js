import axios from "axios";
import React, { useEffect } from "react";
import "./style.scss";
import BookingCard from "./BookingCard";

const Bookings = () => {
  const getBookings = async () => {
    // send data to server and get response back
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/booking`,
        { withCredentials: true },
      );
      console.log(response.data);
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
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
    </section>
  );
};

export default Bookings;
