import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Post from "./Post";

const PostsList = () => {
  const { data, isLoading, error, fetchNow } = useFetch({
    url: "http://localhost:7070/posts",
  });

  useEffect(() => {
    fetchNow();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data.length == 0) {
    return <div>Вы ещё не создовали пост.</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data &&
        data.map((item) => (
          <Row className="mt-4" key={item.id}>
            <Link 
              className="text-decoration-none text-reset"
              to={`/posts/${item.id}`}
            >
              <Post 
                created={item.created}
                content={item.content}/>
            </Link>
          </Row>
        ))}
    </>
  );
};

export default PostsList;
