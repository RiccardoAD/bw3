import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";

const ProfilePage = function () {
    return (
        <Container>
            <Row>
            <Col className="col-12 col-md-8 col-lg-10"><ProfileHeader /></Col>
            </Row>
        </Container>
    )

}

export default ProfilePage