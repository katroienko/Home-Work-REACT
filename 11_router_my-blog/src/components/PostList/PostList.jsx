import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllPosts } from "../../api/posts";

import styles from "./PostList.module.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getAllPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const elements = posts.map(({ id, title }) => (
    <li key={id}>
      <Link className={styles.link} to={`/posts/${id}`}>
        {title}
      </Link>
    </li>
  ));

  return (
    <>
      <h3>My posts</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {posts.length > 0 ?
        <div className={styles.posts}>
          <ul>{elements}</ul>
        </div> : <p>No posts found.</p>}
    </>
  );
};

export default PostList;
