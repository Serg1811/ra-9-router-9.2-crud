import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import CloseButton from 'react-bootstrap/CloseButton';

function ClosePostButton() {
    return (
        <Row>
            <Link to="/" className="d-flex flex-row-reverse">
                <CloseButton />
            </Link>
        </Row>
    );
}

export default ClosePostButton;
