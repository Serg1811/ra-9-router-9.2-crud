import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import PostFormContainer from "./PostFormContainer";
import ClosePostButton from "./ClosePostButton";
import { Button, Col, Row } from "react-bootstrap";
import Post from "./Post";

const PostView = () => {
  const { postId } = useParams();
  const [content, setContent] = useState<string>(""); // Состояние для содержимого поста
  const [created, setCreated] = useState<Date>(new Date)
  const [edit, setEdit] = useState(false);

  
  const { data, isLoading, error, fetchNow } = useFetch({
    url: `http://localhost:7070/posts/${postId}`,
  });

  useEffect(() => {
    fetchNow();
  }, [postId]);

  useEffect(() => {
    if (data.post) {
      setContent(data.post.content);
      setCreated(data.post.created)
      console.info(data);
      
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:7070/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({ postId, content }),
      });
      setContent("");
      window.location.href = "/";
      setEdit(false);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

    const handleDelete = async (id: number) => {
      try {
        await fetch(`http://localhost:7070/posts/${id}`, {
          method: "DELETE",
        });
        window.location.href = "/";
      } catch (error) {
        console.error("Error deleting post:", error.message);
      }
    };

  return (
    <>
    {content && !edit && (
        <>
            <ClosePostButton />
            <Post 
              created={created}
              content={content}
              />
            <Row className="mt-4 gx-2" xs="auto">
                <Col>
                    <Button
                        variant="primary"
                        onClick={() => {
                            setEdit(true);
                            // setFormContent(currentPost.content);
                        }}
                    >
                        Изменить
                    </Button>
                </Col>
                <Col>
                    <Button variant="danger" onClick={() => handleDelete(postId)}>
                        Удалить
                    </Button>
                </Col>
            </Row>
        </>
     )} 
     {content && edit && ( 
        <>
            <ClosePostButton />
            <PostFormContainer
                handleSubmit={handleSubmit}
                content={content}
                handleChange={handleChange}
                      isLoading={isLoading}
                error={error}
                contentLoadingButton="Сохранение..."
                contentButton={'Сохранить'}
            />
        </>
    )}
</>


  );
};

export default PostView;
