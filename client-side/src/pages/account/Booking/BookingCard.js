import React from 'react';
import { Link, useParams } from "react-router-dom";
import "./style.scss";

const BookingCard = ({ placeId, img, title, checkIn, checkOut, nights, price }) => {
    return (
        <Link
            to={placeId}
            className="booking_card"
            style={{ textDecoration: "none", color: "black" }}
        >
            <div className="card_image">
                <img src={`${process.env.REACT_APP_BASE_URL}/Uploads/${img} `}
                    alt="img"
                />
            </div>
            <div className="card_content">
                <h2>{title}</h2>
                <div className="time_frame">
                    <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        {checkIn}
                    </span>
                    <i class="fa-solid fa-arrow-right"></i>
                    <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        {checkOut}
                    </span>
                </div>
                <div className="price">
                    <span>
                        <i class="fa-solid fa-moon">
                        </i>
                        {nights} nights{" "}
                    </span>
                    | Total Price : <span style={{ fontWeight: "bold" }}>${price}</span>
                </div>
            </div>
        </Link>
    );
};

export default BookingCard