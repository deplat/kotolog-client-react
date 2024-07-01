import {Col, Container, Form, Row} from "react-bootstrap";
import CatList from "../components/CatList.jsx";

const Cats = () => {
    return (
        <Container
            fluid
            className={"mb-5"}
            style={{background: "#fefefc"}}
        >
            <Row md={12} style={{padding: "1vh", marginBottom: "1vh", minHeight: "2vh"}}>
                <Form className={"d-flex"}>
                    <Col md={3} lg={2} className={"d-flex"} justify={"center"} align={"center"}>
                        <Form.Label>Пол:</Form.Label>
                        <Form.Range/>
                    </Col>
                    <Col md={9} lg={10} align={"center"}>
                        <p>ColorsBar</p>
                    </Col>
                </Form>
            </Row>
            <CatList/>
        </Container>
    );
};

export default Cats;