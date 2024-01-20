import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyAccList from "./MyAccList";
import "./style.scss";

const Accomodations = () => {
  const [showForm, setshowForm] = useState(false);

  const [userData, setuserData] = useState({
    title: "",
    address: "",
    link: "",
    photos: [],
    description: "",
    perks: [],
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
  });

  let name, val;
  const handleChange = (e) => {
    name = e.target.name;
    val = e.target.value;
    setuserData({ ...userData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <section className="accomodations_form">
      <h2>Accomodation</h2>
      <button onClick={() => setshowForm(true)}>Add new Plcaes</button>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa?
            </p>
            <input
              type="text"
              value={userData.title}
              onChange={handleChange}
              name="title"
            />
          </div>
          <div>
            <h2>Address</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa?
            </p>
            <input
              type="text"
              value={userData.address}
              onChange={handleChange}
              name="address"
            />
          </div>
          <div className="photo">
            <h2>Photos</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa?
            </p>
            <div className="link_photo">
              <input
                type="text"
                name="link_photo"
                onChange={handleChange}
                value={userData.link}
                placeholder="add images using a link"
              />
              <button>add photo</button>
            </div>
            <div className="upload_photo">
              <button>upload from your device</button>
            </div>
          </div>
          <div>
            <h2>Description</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa?
            </p>
            <textarea
              name="description"
              onChange={handleChange}
              value={userData.description}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="perks">
            <h2>Perks</h2>
            <div className="items">
              <label>
                <input type="checkbox" />
                <span>wifi</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>free park</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Tv</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>radio</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Pet</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Private Entrance</span>
              </label>
            </div>
          </div>
          <div className="extraInfo">
            <h2>Extra info</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa?
            </p>
            <input
              type="text"
              name="extraInfo"
              value={userData.extraInfo}
              onChange={handleChange}
            />
          </div>
          <div className="time">
            <div className="in_time">
              <h2>Check In Time</h2>
              <input
                type="text"
                name="checkIn"
                value={userData.checkIn}
                onChange={handleChange}
              />
            </div>
            <div className="out_time">
              <h2>Check Out Time</h2>
              <input
                type="text"
                name="checkOut"
                value={userData.checkOut}
                onChange={handleChange}
              />
            </div>
            <div className="guests">
              <h2>Max Guests Allowed</h2>
              <input
                type="text"
                name="maxGuests"
                value={userData.maxGuests}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="final_btns">
            <button type="submit">Save</button>
            <button onClick={() => setshowForm(false)}>cancel</button>
          </div>
        </form>
      ) : (
        <MyAccList />
      )}
    </section>
  );
};

export default Accomodations;
