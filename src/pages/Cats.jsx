import {Col, Container, Form, Row} from "react-bootstrap";
import CatList from "../components/CatList.jsx";

const Cats = () => {
    return (
        <Container fluid>
            <Row md={12} style={{padding:"1vh",marginBottom:"1vh",minHeight: "2vh"}}>
                <Form className={"d-flex"}>
                    <Col md={3} lg={2} justify={"center"} align={"center"} style={{
                    }}>
                        <Form.Range style={{width: "75%"}} value={0}/>
                    </Col>
                    <Col md={9} lg={10} align={"center"}>
                        <p>ColorsBar</p>
                    </Col>
                </Form>
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