import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import "./style.scss";
import Loader from "../../components/LoaderMain";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  // const { showModel } = useContext(globalContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
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
      console.log(data);
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
