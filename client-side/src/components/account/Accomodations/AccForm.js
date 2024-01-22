import React, { useState } from "react";
import "./style.scss";

const AccForm = () => {
  const [userData, setuserData] = useState({
    title: "",
    address: "",
    link: "",
    photos: null,
    description: "",
    perks: [],
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
  });
  const [imagesFromBackEnd, setimagesFromBackEnd] = useState([]);
  let name, val;
  const handleChange = (e) => {
    name = e.target.name;
    val = e.target.value;
    setuserData({ ...userData, [name]: val });
  };

  const handleServerData = async (link) => {
    // send data to server and get response back
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/uploadMedia`,
        {
          method: "POST",
          credentials: "include",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            link,
          }),
        }
      );
      const data = await response.json();
      setimagesFromBackEnd([...imagesFromBackEnd, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhotosData = async (files) => {
    // send data to server and get response back
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/photosMedia`,
        {
          method: "POST",
          credentials: "include",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            photos: files,
          }),
        }
      );
      console.log(response);
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleConvertLink = (e) => {
    e.preventDefault();
    handleServerData(userData.link);
  };

  const onImageChange = (e) => {
    const files = e.target.files;
    handlePhotosData(files);
    setuserData({ ...userData, photos: files });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to server here
    console.log(userData);
  };
  return (
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
          <br />
          {imagesFromBackEnd.length > 0 &&
            imagesFromBackEnd.map((image, key) => (
              <img
                key={key}
                src={`${process.env.REACT_APP_BASE_URL}/Uploads/${image}`}
                alt=""
              />
            ))}
          <br />
          <input
            type="text"
            name="link"
            onChange={handleChange}
            value={userData.link}
            placeholder="add images using a link"
          />
          <button onClick={handleConvertLink}>add photo</button>
        </div>
        <div className="upload_photo">
          <label>
            upload from your device
            <input type="file" onChange={onImageChange} />
          </label>
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
        <button>cancel</button>
      </div>
    </form>
  );
};

export default AccForm;
