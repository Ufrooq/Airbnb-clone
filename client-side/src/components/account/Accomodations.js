import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyAccList from "./MyAccList";
import "./style.scss";

const Accomodations = () => {
  const [showForm, setshowForm] = useState(false);
  return (
    <section className="accomodations_form">
      <h2>Accomodation</h2>
      <button onClick={() => setshowForm(true)}>Add new Plcaes</button>
      {showForm ? (
        <form action="">
          <div>
            <h2>Title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa?
            </p>
            <input type="text" />
          </div>
          <div>
            <h2>Address</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa?
            </p>
            <input type="text" />
          </div>
          <div className="photo">
            <h2>Photos</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              ipsa?
            </p>
            <div className="link_photo">
              <input type="text" placeholder="add images using a link" />
              <button>add photo</button>
            </div>
            <div className="upload_photo">
              <button>upload from your device</button>
            </div>
          </div>
        </form>
      ) : (
        <MyAccList />
      )}
    </section>
  );
};

export default Accomodations;
