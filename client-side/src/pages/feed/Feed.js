import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import Login from "../login/Login";
import { globalContext } from "../../App";
import "./style.scss";
import Loader from "../../components/LoaderMain";

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
      setTimeout(() => {
        setPosts([...data]);
      }, 1000);

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
              <Card
                key={key}
                id={post._id}
                title={post.title}
                img={post.photos[0]}
                desc={post.description}
                price={post.price}
              />
            ))
          }
        </>
        :
        <Loader />
      }
    </section>
  );
};

export default Feed;
