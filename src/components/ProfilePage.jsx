import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import Analisi from "./Analisi";
import Risorse from "./Risorse";

const ProfilePage = function () {
    return (
        <Container>
            <Row className="d-flex flex-column">
            <Col className="col-12 col-md-8 col-lg-10 mt-4"><ProfileHeader /></Col>
            <Col className="col-12 col-md-8 col-lg-10 mt-4"><Analisi /></Col>
            <Col className="col-12 col-md-8 col-lg-10 mt-4"><Risorse /></Col>
            </Row>
        </Container>
    )

}

export default ProfilePage