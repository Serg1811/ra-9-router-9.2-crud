import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import PostFormContainer from "./PostFormContainer";
import ClosePostButton from "./ClosePostButton";

const PostNews = () => {
  const [content, setContent] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const { isLoading, error, fetchNow } = useFetch({
    url: "http://localhost:7070/posts",
    options: {
      method: "POST",
      body: JSON.stringify({ id, content }),
    },
  });
console.info(error);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    localStorage.setItem("content", JSON.stringify(e.target.value));
  };

  useEffect(() => {
    const storedItem = localStorage.getItem("content");
    if (storedItem) {
      setContent(storedItem);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchNow();
    setId((prevId) => prevId + 1);
    window.location.href = "/";
    setContent('');
    localStorage.removeItem('content');
  };

  return (
    <>
    <ClosePostButton/>
      <PostFormContainer
        content={content}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        contentLoadingButton={"Отправка...."}
        contentButton={"Отправить"}
      />
    </>
  );
};

export default PostNews;
