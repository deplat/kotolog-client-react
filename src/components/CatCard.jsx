import {Card, Col} from "react-bootstrap";

const avatarHost = import.meta.env.VITE_SERVER_HOST + '/avatar'

const CatCard = ({cat}) => {
    return (
        <Col md={4} lg={3}>
            <Card className="text-center" style={{padding: "10px"}}>
                <Card.Img src={`${avatarHost}/${cat.avatar}`} alt={`${avatarHost}/${cat.avatar}`}/>
                <div>{cat.name}</div>
                <div>{cat.age}</div>
            </Card>
        </Col>
    );
};

export default CatCard;