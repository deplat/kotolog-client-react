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
        <Container fluid={"lg"} className={"p-0"}>
            <Row xs={1} sm={2} md={3} xl={4}>
                {cats.map((cat) =>
                    <Col key={cat.id} style={{padding:"1.2rem"}}>
                        <CatCard cat={cat}/>
                    </Col>
                )}
            </Row>
        </Container>
    )
};
export default CatList;