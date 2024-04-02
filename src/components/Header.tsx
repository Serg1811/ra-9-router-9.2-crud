import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Row xs="auto">
      <Col className="d-flex align-items-center">
        <Link to="/posts/new">
          <Button variant="primary">Создать пост</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
