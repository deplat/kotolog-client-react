import {Card, Col} from "react-bootstrap";

const avatarHost = import.meta.env.VITE_SERVER_HOST + '/avatar'

const CatCard = ({cat}) => {

    const imgSrc = (cat) => {
        return cat.avatar ? `${avatarHost}/${cat.avatar}` : `${avatarHost}/avatar-526f1510-3395-11ef-bb6b-af4a695f6c28.jpg`
    }

    return (
        <Col xs={6} md={4} lg={3} xl={3} xxl>
            <Card className="text-center" style={{marginBottom: 20}}>
                <Card.Img
                    className={"text-center align-content-center"}
                    src={imgSrc(cat)}
                    alt={'Фото скоро появится'}
                    style={{height: "30vh", width: "100%", objectFit: "cover"}}
                />
                <Card.Body>
                    <Card.Title>{cat.name}</Card.Title>
                    <Card.Subtitle>{cat.age}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CatCard;