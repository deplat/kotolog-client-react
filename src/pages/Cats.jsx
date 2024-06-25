import {Col, Container, Row} from "react-bootstrap";
import CatList from "../components/CatList.jsx";

const Cats = () => {
    return (
        <Container fluid>
            <Row md={12} className={"d-flex"}>
                <Col md={3} lg={2}>
                    <p>SexBar</p>
                </Col>
                <Col md={9} lg={10}>
                    <p>ColorsBar</p>
                </Col>
            </Row>
            <Row md={12} className={"d-flex"}>
                <Col lg={12}>
                    <CatList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Cats;