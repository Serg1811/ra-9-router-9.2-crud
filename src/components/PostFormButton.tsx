import { Button } from "react-bootstrap";

const PostFormButton = ({
  isLoading,
  contentLoadingButton,
  contentButton,
}: {
  isLoading: boolean;
  contentLoadingButton: string;
  contentButton: string;
}) => (
  <Button type="submit" disabled={isLoading}>
    {isLoading ? `${contentLoadingButton}...` : `${contentButton}`}
  </Button>
);

export default PostFormButton;
