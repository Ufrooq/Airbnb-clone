import React from "react";
import avatar from "../../assets/avatar.png";
import "./style.scss";

const PerInfo = () => {
  return (
    <section className="profile_section">
      <div className="profile_card">
        <div className="personal_info">
          <img src={avatar} alt="" />
          <h2 className="name">Umar Farooq</h2>
          <p className="details">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            cupiditate.
          </p>
        </div>
        <div className="date_time">
          <h2>1</h2>
          <p>month on airbnb</p>
        </div>
      </div>
    </section>
  );
};

export default PerInfo;
