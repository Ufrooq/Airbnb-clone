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
          <i class="fa-regular fa-bookmark"></i>save
          {/* <i class="fa-regular fa-bookmark"></i> already saved-icons */}
        </div>
      </div>
      <div className="image_gallery">
        <div id="im_1" className="image_wrapper">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/4d713a1e-ab4c-4d70-905f-d24b4042189f.jpeg?im_w=960"
            alt=""
          />
        </div>
        <div id="im_2" className="image_wrapper">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/7f98dcc6-18f9-4cf6-8f83-798c20f1ba7f.jpeg?im_w=720"
            alt=""
          />
        </div>
        <div id="im_3" className="image_wrapper">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/fa670b4e-cb55-470b-a84c-ffc4b9422710.jpeg?im_w=720"
            alt=""
          />
        </div>
        <div id="im_4" className="image_wrapper">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/fb0b52c5-ffbf-400d-b41a-bb656eb47468.jpeg?im_w=720"
            alt=""
          />
        </div>
        <div id="im_5" className="image_wrapper">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/b6beeabe-6cb5-4020-a55f-0609c5c980a2.jpeg?im_w=720"
            alt=""
          />
        </div>
      </div>
      <div className="rooms_info_section">
        <div className="room_charges_card">
          <div className="top_Ofcard">
            <p>
              <span>$26</span> night
            </p>
            <p>
              <i class="fa-solid fa-star"></i>4.9 . <a href="/">56 reviews</a> .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
