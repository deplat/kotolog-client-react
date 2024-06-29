import {Card, Col} from "react-bootstrap";

const avatarHost = import.meta.env.VITE_SERVER_HOST + '/avatar'

const CatCard = ({cat}) => {

    const imgSrc = (cat) => {
        return cat.avatar ? `${avatarHost}/${cat.avatar}` : `${avatarHost}/avatar-2fac49e0-346b-11ef-9e3f-036b82359cfe.png`
    }

    return (
        <Col xs={6} md={4} lg={3} xl={3} xxl>
            <Card className="text-center bg-gradient  border-0 rounded-3" style={{marginBottom: 20}}>
                <Card.Img
                    className={"text-center align-content-center rounded-3"}
                    src={imgSrc(cat)}
                    alt={'Фото скоро появится'}
                    style={{height: "25vh", minHeight:"300px", width: "100%", objectFit: "cover"}}
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