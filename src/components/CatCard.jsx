import {Card} from "react-bootstrap";

const avatarHost = import.meta.env.VITE_SERVER_HOST + '/avatar'

const CatCard = ({cat}) => {

    const imgSrc = (cat) => {
        return cat.avatar ? `${avatarHost}/${cat.avatar}` : `${avatarHost}/avatar-2fac49e0-346b-11ef-9e3f-036b82359cfe.png`
    }

    return (
            <Card className={"text-center bg-transparent shadow m-0 p-0 border-0 rounded-3"}>
                <Card.Img
                    className={"text-center align-content-center rounded-3"}
                    src={imgSrc(cat)}
                    alt={'Фото скоро появится'}
                    style={{
                        height: "30vh",
                        minHeight:"300px",
                        objectFit: "cover"}}
                />
                <Card.Body>
                    <Card.Title>{cat.name}</Card.Title>
                    <Card.Subtitle>{cat.age}</Card.Subtitle>
                </Card.Body>
            </Card>
    );
};

export default CatCard;