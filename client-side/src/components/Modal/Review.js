import React from 'react';
import avatar from "../../assets/avatar.png";

import "./style.scss";

const Review = () => {
    return (
        <div className='review_'>
            <div className="header">
                <img src={avatar} alt="avatar" />
                <p>Umar Farooq</p>
            </div>
            <div className="content_">
                <p>
                    Its been months. WHEN are you guys gonna fix the crashes mid-raid. I've missed tons of easy 3 stars because the game crashes before i can use any of my spells and most troops. And no it isn't on my end. There are tons of forums with people having the same issue. We dont need weekly money grabs in the shop. We need for the game to actually be playable!!!
                </p>
            </div>
            <div className="reacts">
                <i class="fa-regular fa-thumbs-up"></i>
                |
                <i class="fa-regular fa-thumbs-down"></i>
            </div>
        </div>
    )
};

export default Review;