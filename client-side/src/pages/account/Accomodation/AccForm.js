import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./style.scss";

const AccForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [placeData, setplaceData] = useState({
    title: "",
    address: "",
    link: "",
    photos: [],
    description: "",
    perks: {
      wifi: false,
      park: false,
      tv: false,
      radio: false,
      pet: false,
      entrance: false,
    },
    extraInfo: "",
    checkIn: 0,
    checkOut: 0,
    maxGuests: 1,
    price: 10
  });
  const [starredImg, setstarredImg] = useState(-1);

  const [imagesFromBackEnd, setimagesFromBackEnd] = useState([]);
  const handleChange = (e) => {
    setplaceData({ ...placeData, [e.target.name]: e.target.value });
  };

  const handleLinkPhotos = async (link) => {
    // send data to server and get response back
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/linkMedia`,
        {
          method: "POST",
          credentials: "include",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            link: placeData.link,
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
      const formData = new FormData();
      files.forEach((file) => {
        formData.append(`photos`, file)
      });
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/photosMedia`,
        {
          method: "POST",
          credentials: "include",
          withCredentials: true,
          body: formData
        }
      );
      console.log(response);
      const data = await response.json();
      setimagesFromBackEnd([...imagesFromBackEnd, ...data]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleConvertLink = (e) => {
    e.preventDefault();
    setplaceData({ ...placeData, link: e.target.value });
    handleLinkPhotos();
  };

  const onImageChange = (e) => {
    const files = e.target.files;
    handlePhotosData([...files]);
    setplaceData({ ...placeData, photos: files });
  };


  const handleCheckboxes = (e) => {
    setplaceData({
      ...placeData,
      perks: {
        ...placeData.perks,
        [e.target.name]: !placeData.perks[e.target.name]
      }
    });
  }

  const getFormData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/places/${id}`
      );
      // destructuring response fom server -->
      const { placeData, perksData } = response.data;

      // destructuring placeData fom server -->
      const { title, address, link, photos, description,
        extraInfo, checkIn, checkOut, maxGuests, price } = placeData;

      // destructuring perksData fom server -->
      const { wifi, park, tv, radio, pet, entrance } = perksData;

      const perksToUpdate = {
        wifi: wifi || false,
        park: park || false,
        tv: tv || false,
        radio: radio || false,
        pet: pet || false,
        entrance: entrance || false,
      };


      const dataToUpdate = {
        title: title,
        address: address,
        link: "",
        photos: photos,
        description: description,
        perks: perksToUpdate,
        extraInfo: extraInfo,
        checkIn: checkIn,
        checkOut: checkOut,
        maxGuests: maxGuests,
        price: price
      };
      setplaceData(dataToUpdate);
      setimagesFromBackEnd(placeData.photos);
    } catch (error) {
      console.log(error);
    }
  }


  const updateDataOnServer = async (data) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/users/places/${id}`,
        data,
        { withCredentials: true },
      );
      console.log(response);
      if (response.status == 201) {
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/places`,
        {
          method: "POST",
          credentials: "include",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data
          })
        }
      );
      if (response.ok) {
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removePhoto = (imgAddress) => {
    const filteredArray = imagesFromBackEnd.filter(item => item != imgAddress)
    setimagesFromBackEnd(filteredArray);
  }

  const swapArray = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setimagesFromBackEnd([...swapArray(imagesFromBackEnd, 0, starredImg)])
    // send data to server here
    if (id) {
      updateDataOnServer(placeData);
      return;
    }
    const data = { ...placeData, photos: imagesFromBackEnd };
    sendDataToServer(data);
  };



  useEffect(() => {
    if (!id)
      return;

    getFormData();
  }, [id]);

  return (
    <form onSubmit={handleSubmit}   >
      <div>
        <h2>Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          ipsa?
        </p>
        <input
          type="text"
          value={placeData.title}
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
          value={placeData.address}
          onChange={handleChange}
          name="address"
        />
      </div>
      <div className="photos_section">
        <h2>Photos</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          ipsa?
        </p>
        <div className="link_photo">
          <input
            type="text"
            name="link"
            onChange={handleChange}
            value={placeData.link}
            placeholder="add images using a link"
          />
          <button onClick={handleConvertLink}>add photo</button>
        </div>
        <div className="photos">
          {imagesFromBackEnd.length > 0 &&
            imagesFromBackEnd.map((image, key) => (
              <div className="gal img_" key={key}>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/Uploads/${image}`}
                  alt="image"
                />
                {starredImg == key ?
                  <i class="fa-solid fa-star star"
                    onClick={() => setstarredImg(-1)}
                  ></i>
                  :
                  <i
                    className="fa-regular fa-star star"
                    onClick={() => setstarredImg(key)}
                  ></i>
                }

                <i className="fa-regular fa-trash-can delete" onClick={() => removePhoto(image)}></i>
              </div>
            ))}
          <div className="gal upload_label">
            <label>
              Upload
              <input type="file" multiple="multiple" onChange={onImageChange} />
            </label>
          </div>
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
          value={placeData.description}
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div className="perks">
        <h2>Perks</h2>
        <div className="items">
          <label>
            <input
              type="checkbox"
              checked={placeData.perks.wifi}
              name="wifi"
              onChange={handleCheckboxes}
            />
            <span>wifi</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={placeData.perks.park}
              name="park"
              onChange={handleCheckboxes}
            />
            <span>free park</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={placeData.perks.tv}
              name="tv"
              onChange={handleCheckboxes}
            />
            <span>Tv</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={placeData.perks.radio}
              name="radio"
              onChange={handleCheckboxes}
            />
            <span>radio</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={placeData.perks.pet}
              name="pet"
              onChange={handleCheckboxes}
            />
            <span>Pet</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={placeData.perks.entrance}
              name="entrance"
              onChange={handleCheckboxes}
            />
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
          value={placeData.extraInfo}
          onChange={handleChange}
        />
      </div>
      <div className="time">
        <div className="in_time">
          <h2>Check In Time</h2>
          <input
            type="text"
            name="checkIn"
            value={placeData.checkIn}
            onChange={handleChange}
          />
        </div>
        <div className="out_time">
          <h2>Check Out Time</h2>
          <input
            type="text"
            name="checkOut"
            value={placeData.checkOut}
            onChange={handleChange}
          />
        </div>
        <div className="guests">
          <h2>Max Guests Allowed</h2>
          <input
            type="number"
            name="maxGuests"
            value={placeData.maxGuests}
            onChange={handleChange}
          />
        </div>
        <div className="price">
          <h2>Price in $</h2>
          <input
            type="number"
            name="price"
            value={placeData.price}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="final_btns">
        <button type="submit">{id ? "Update" : "Save"}</button>
        <button>cancel</button>
      </div>
    </form>
  );
};

export default AccForm;
