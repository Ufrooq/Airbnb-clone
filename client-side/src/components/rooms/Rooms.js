import React from "react";
import "./style.scss";

const Rooms = () => {
  return (
    <section className="room_section">
      <h1 className="heading_main">Cozy room in a vegan oasis</h1>
      <div className="sub_main">
        <div className="reviews">
          <i class="fa-solid fa-star"></i>4.9 . <a href="/">56 reviews</a> .
          <a href="/"> São Paulo, Brazil</a>
        </div>
        <div className="save">
          save<i class="fa-regular fa-bookmark"></i>
          {/* <i class="fa-regular fa-bookmark"></i> already saved-icons */}
        </div>
      </div>

      <div className="image_gallery"></div>
    </section>
  );
};

export default Rooms;
