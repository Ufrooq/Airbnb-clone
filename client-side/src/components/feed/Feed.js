import React, { useContext, useEffect, useState } from "react";
import Card from "../card/Card";
import Login from "../login/Login";
import { globalContext } from "../../App";
import "./style.scss";

const Feed = () => {
  // const { showModel } = useContext(globalContext);
  const [posts, setPosts] = useState([]);


  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/places`,
        {
          method: "GET",
          credentials: "include",
          withCredentials: true,
        }
      );
      const data = await response.json();
      setPosts([...data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed_section">
      {posts.length > 0 ?
        <>
          {
            posts.map((post, key) => (
              <Card key={key} id={post._id} title={post.title} img={post.photos[0]} desc={post.description} price={post.price} />
            ))
          }
        </>
        :
        <p>No posts</p>
      }
    </section>
  );
};

export default Feed;
