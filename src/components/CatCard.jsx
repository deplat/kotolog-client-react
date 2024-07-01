import {Button, Card, Stack} from "react-bootstrap";
import {avatarHost} from "../utils/consts.js";


const CatCard = ({cat}) => {
    const {
        avatar,
        name,
        age
    } = cat;

    const imgSrc = (avatar) => {
        return avatar ? `${avatarHost}/${avatar}` : `${avatarHost}/avatar-default.jpg`
    };

    return (
            <Card className={"text-center m-0 p-0 border-0 rounded-3 shadow"}>
                    <Card.Img
                        src={imgSrc(avatar)}
                        alt={`${name}`}
                        className={"text-center align-content-center rounded-3"}
                        style={{
                            height: "27vh",
                            minHeight:"300px",
                            maxHeight:"320px",
                            objectFit: "cover"}}
                    />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{age}</Card.Subtitle>
                    <Stack
                    direction="horizontal"
                    gap="2"
                    className={"d-flex justify-content-end"}
                    style={{marginTop: "1.1rem"}}
                    >
                        <Button style={{
                            background: "pink",
                            border: "pink"
                        }}>
                            Изменить
                        </Button>
                        <Button className="btn-danger">
                            Удалить
                        </Button>
                    </Stack>
                </Card.Body>
            </Card>
    );
};

export default CatCard;