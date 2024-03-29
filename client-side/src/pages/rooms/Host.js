import React from "react";
import im from "../../assets/avatar.png";

const Host = ({ name }) => {
  return (
    <div className="host_section">
      <div className="header_section">
        <img src={im} alt="" srcset="" />
        <div className="hosted_by">
          <p>Hosted by {name}</p>
          <p>Superhost . 3 years hosting</p>
        </div>
      </div>
    </div>
  );
};

export default Host;
