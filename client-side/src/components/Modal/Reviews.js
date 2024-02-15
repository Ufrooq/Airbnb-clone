import React from 'react';
import Review from "./Review";
import "./style.scss";

const Reviews = ({ handleReviewFormModal }) => {
    return (
        <div className="model_content">
            <div className="main_">
                <h1>Leave a review</h1>
                <i
                    class="fa-solid fa-xmark cross_1"
                    onClick={handleReviewFormModal}
                ></i>
            </div>
            <div className="reviews_section">
                <Review />
                <hr />
                <Review />
                <hr />
                <Review />
                <hr />
                <Review />
                <hr />
                <Review />
                <hr />
                <Review />
                <hr />
            </div>
        </div>
    )
}

export default Reviews