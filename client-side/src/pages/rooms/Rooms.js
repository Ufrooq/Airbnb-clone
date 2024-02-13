import React, { useEffect, useState } from "react";
import "./style.scss";
import ReserveCard from "./ReserveCard";
import Host from "./Host";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoaderMain from "../../components/LoaderMain";
import ImgGallery from "../../components/ImgGallery";
import Perks from "../../components/Perks";
import Rating from "../../components/Rating";
import Modal from "../../components/Modal";

const Rooms = () => {
  const { id } = useParams();
  const [place, setplace] = useState(null);
  const [perks, setperks] = useState(null);
  const [host, sethost] = useState(null);
  const [showReviewModal, setshowReviewModal] = useState(false);

  const getPlaceData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/places/${id}`
      );
      // destructuring response fom server -->
      const { placeData, perksData } = response.data;
      setTimeout(() => {
        setperks(perksData);
        setplace(placeData);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
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

  const handleModal = () => {
    setshowReviewModal(!showReviewModal);
  };
  useEffect(() => {
    getPlaceData();
  }, []);


  useEffect(() => {
    if (place) {
      currentUser(place.owner);
    }
  }, [place]);



  return (

    <section className="room_section">
      {place ?
        <>
          {showReviewModal && <Modal handleModal={handleModal} />}
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
          <ImgGallery photos={place.photos} />
          <div className="middle_section">
            <Host name={host} />
            <ReserveCard price={place.price} id={place._id} />
          </div>
          <Rating handleModal={handleModal} />
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
          <Perks perks={perks} />
        </>
        :
        <LoaderMain />
      }
    </section>
  );
};

export default Rooms;
