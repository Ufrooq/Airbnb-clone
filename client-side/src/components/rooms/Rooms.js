import React, { useEffect, useState } from "react";
import "./style.scss";
import ReserveCard from "./ReserveCard";
import Host from "./Host";
import { useParams } from "react-router-dom";
import axios from "axios";

const Rooms = () => {
  const { id } = useParams();
  const [place, setplace] = useState(null);
  const [perks, setperks] = useState(null);
  const [host, sethost] = useState(null);

  const getPlaceData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/places/${id}`
      );
      // destructuring response fom server -->
      const { placeData, perksData } = response.data;
      setperks(perksData);
      setplace(placeData);
    } catch (error) {
      console.log(error);
    }
  }
  const currentUser = async (owner) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/places/host/${owner}`
      );
      sethost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPlaceData();
  }, []);


  useEffect(() => {
    if (place) {
      console.log(place);
      currentUser(place.owner);
    }
  }, [place]);





  return (

    <section className="room_section">
      {place ?
        <>
          <h1 className="heading_main">{place.title}</h1>
          <div className="sub_main">
            <div className="reviews">
              <i className="fa-solid fa-star"></i>4.9 . <a href="/">56 reviews</a> .
              <a href="/"> São Paulo, Brazil</a>
            </div>
            <div className="save">
              <i className="fa-regular fa-bookmark"></i>save
              {/* <i class="fa-regular fa-bookmark"></i> already saved-icons */}
            </div>
          </div>
          <div className="gallery_section">
            <div className="image_gallery">
              {place.photos.map((photo, key) => (
                <div id={`im_${key + 1}`} className="image_wrapper">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/Uploads/${photo}`}
                    alt={`photo${key + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="spects">
              <h1>Tiny home in Râșnov Romacril, Romania</h1>
              <p>4 guests. 2 bedrooms . 2 beds . 1 bath</p>
              <p>
                <i className="fa-solid fa-star"></i>4.9 . <a href="/">56 reviews</a> .
              </p>
            </div>
          </div>
          <div className="middle_section">
            <Host name={host} />
            <ReserveCard price={place.price} />
          </div>
          <div className="description_section">
            <ul>
              <li>
                <i className="fa-solid fa-ranking-star"></i>
                <div>
                  <p>Dragos is a Superhost</p>
                  <p>Superhosts are experienced, highly rated Hosts.</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <p>Great location</p>
                  <p>100% of recent guests gave the location a 5-star rating.</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-calendar-week"></i>
                <div>
                  <p>Free cancellation before.</p>
                </div>
              </li>
            </ul>
            <p className="description">
              {place.description}
            </p>
          </div>
          <div className="services_section">
            <h1>What this place offers</h1>
            {perks ?
              <div className="services">
                <p>
                  <i className="fa-solid fa-mountain-sun"></i>
                  Free Park
                </p>
                <p>
                  <i className="fa-solid fa-wifi"></i>
                  Wifi
                </p>
                <p>
                  <i class="fa-solid fa-road-barrier"></i>
                  Free Entrance
                </p>
                <p>
                  <i class="fa-solid fa-dog"></i>
                  Pets
                </p>
                <p>
                  <i class="fa-solid fa-radio"></i>
                  Radio
                </p>
                <p>
                  <i class="fa-solid fa-tv"></i>
                  Tv
                </p>
              </div>
              :
              <p>No perks</p>
            }
            <button>Show all 8 amenities</button>
          </div>
        </>
        :
        <p>loading...</p>
      }

    </section>
  );
};

export default Rooms;
