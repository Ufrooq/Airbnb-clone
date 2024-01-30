import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <section className="foot">
      <ul className="left-section">
        <li>
          <h3>© 2023 Airbnb, Inc.</h3>
        </li>
        .
        <li>
          <a href="">Terms</a>
        </li>
        .
        <li>
          <a href="">Privacy</a>
        </li>
        .
        <li>
          <a href="">Sitemap</a>
        </li>
      </ul>
      <ul className="right-section">
        <li>
          <h3>$USD</h3>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
