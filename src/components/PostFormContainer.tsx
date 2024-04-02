import PostFormButton from "./PostFormButton";
import PostFormError from "./PostFormError";
import Form from 'react-bootstrap/Form';

const PostFormContainer = ({
  content,
  handleChange,
  handleSubmit,
  isLoading,
  error,
  contentLoadingButton,
  contentButton,
}: {
  content: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: null | {message: string};
  contentLoadingButton: string;
  contentButton: string;
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          required
        />
    </Form.Group>
      <PostFormButton
        isLoading={isLoading}
        contentLoadingButton={contentLoadingButton}
        contentButton={contentButton}
      />
    {error && <PostFormError />}
    </Form>
      );
    };



export default PostFormContainer;
