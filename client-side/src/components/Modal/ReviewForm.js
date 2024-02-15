import React from 'react';
import avatar from "../../assets/avatar.png";
import "./style.scss";

const ReviewForm = ({ handleReviewFormModal }) => {
    return (
        <div className="model_content">
            <i
                class="fa-solid fa-xmark cross_2"
                onClick={handleReviewFormModal}
            ></i>
            <div className="user">
                <img src={avatar} alt="" />
                <div className="desc">
                    <h1>Umar Farooq</h1>
                    <p>
                        Reviews are public and include your account and device info. Everyone can see your Google Account name and photo, and the type of device associated with your review. Developers can also see your country and device information (such as language, model, and OS version) and may use this information to respond to you. Past edits are visible to users and the app developer unless you delete your review.
                    </p>
                    <a href="https://play.google.com/about/comment-posting-policy/" target='_blank'>
                        Learn more
                    </a>
                </div>
            </div>
            <div className="comment">
                <div className="stars">
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                </div>
                <textarea
                    cols="10"
                    rows="1"
                    placeholder='describe your experience (optional) '
                ></textarea>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default ReviewForm