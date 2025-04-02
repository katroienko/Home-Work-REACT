import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./SinglePost.module.css";
import { getPostById } from "../../api/posts";

const SinglePost = () => {
  const { id } = useParams(); // Получаем id из URL
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await getPostById(id);
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      <button onClick={goBack} type="button">
        Go back
      </button>
      <p className={styles.pathname}>Текущий путь: {window.location.pathname}</p>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;
