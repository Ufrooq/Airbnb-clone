import React from "react";
import "./style.scss";
import RoomInfo from "./RoomInfo";
import Host from "./Host";

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
      <div className="gallery_section">
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
        <div className="spects">
          <h1>Tiny home in Râșnov Romacril, Romania</h1>
          <p>4 guests. 2 bedrooms . 2 beds . 1 bath</p>
          <p>
            <i class="fa-solid fa-star"></i>4.9 . <a href="/">56 reviews</a> .
          </p>
        </div>
      </div>
      <div className="middle_section">
        <Host />
        <RoomInfo />
      </div>
      <div className="description_section">
        <ul>
          <li>
            <i class="fa-solid fa-ranking-star"></i>
            <div>
              <p>Dragos is a Superhost</p>
              <p>Superhosts are experienced, highly rated Hosts.</p>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <p>Great location</p>
              <p>100% of recent guests gave the location a 5-star rating.</p>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-calendar-week"></i>
            <div>
              <p>Free cancellation before Oct 30.</p>
            </div>
          </li>
        </ul>
        <p className="description">
          Our Guitar House was design to offer you not only accommodation, but a
          fully unique experience. Staying at our place will give you the
          feeling of a tiny house, the view of a mountain cabin, the commodity
          and space of a bungalow with hot water, heat, WiFi and electricity.
          Here you will be on the grid but off the pavement
        </p>
      </div>
      <div className="services_section">
        <h1>What this place offers</h1>
        <div className="services">
          <p>
            <i class="fa-solid fa-mountain-sun"></i>
            Mountain view
          </p>
          <p>
            <i class="fa-solid fa-wifi"></i>
            Wifi
          </p>
          <p>
            <i class="fa-solid fa-ban-smoking"></i>
            Smoking allowed
          </p>
          <p>
            <i class="fa-solid fa-bell"></i>
            Smoke alarm
          </p>
          <p>
            <i class="fa-solid fa-image"></i>
            Valley view
          </p>
          <p>
            <i class="fa-solid fa-fire-burner"></i>
            Fire pit
          </p>
          <p>
            <i class="fa-solid fa-bell"></i>
            Carbon monoxide alarm
          </p>
        </div>
        <button>Show all 8 amenities</button>
      </div>
    </section>
  );
};

export default Rooms;
