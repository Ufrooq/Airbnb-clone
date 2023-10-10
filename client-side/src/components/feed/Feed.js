import React, { useContext } from "react";
import Card from "../card/Card";
import Login from "../login/Login";
import { globalContext } from "../../App";
import "./style.scss";

const Feed = () => {
  // const { showModel } = useContext(globalContext);
  return (
    <section className="feed_section">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Feed;
