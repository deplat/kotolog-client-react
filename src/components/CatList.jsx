import {useEffect, useState} from "react";
import axios from "axios";
import CatCard from "./CatCard.jsx";
import {Col, Container, Row} from "react-bootstrap";

const CatList = () => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_HOST}/api/cats`)
            .then(res => setCats(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <Container fluid className={"m-0 p-0"}>
            <Row className={"m-0 p-0 justify-content-center"}>
                {cats.map((cat) =>
                    <Col key={cat.id} xs={6} md={4} xxl={4} className={"p-0"} style={{minWidth: "280px", maxWidth: "350px", margin: "1.2rem"}}>
                        <CatCard cat={cat}/>
                    </Col>
                )}
            </Row>
        </Container>
    )
};
export default CatList;