import React from 'react';
import "./style.scss";

const BookingCard = () => {
    return (
        <div className="booking_card">
            <div className="card_image">
                <img src="https://images.pexels.com/photos/925684/pexels-photo-925684.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
            <div className="card_content">
                <h2>Card Title for booking</h2>
                <div className="time_frame">
                    <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        2023-01-16
                    </span>
                    <i class="fa-solid fa-arrow-right"></i>
                    <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        2023-01-16
                    </span>
                </div>
                <div className="price">
                    <span>
                        <i class="fa-solid fa-moon">
                        </i>
                        6 nights{" "}
                    </span>
                    | Total Price : <span style={{ fontWeight: "bold" }}>$1200</span>
                </div>
            </div>
        </div>
    );
};

export default BookingCard