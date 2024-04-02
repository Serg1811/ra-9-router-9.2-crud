import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('ru');
dayjs.extend(relativeTime);

function Post( {created, content}: {created: Date, content: string}) {
    return (
        <Card>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    {'Опубликовано: ' + dayjs(created).fromNow()}
                </Card.Subtitle>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;
