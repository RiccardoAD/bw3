import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Informazioni from "./Informazioni";
import Esperienza from "./Esperienza";
import Formazione from "./Formazione";
import ProfileDexSideBar from "./ProfileDexSideBar";

const ProfilePage = function () {
  return (
    <Container className="mt-5">
      <Row className="d-flex pt-4">
        <Col className="col-md-6 col-lg-8">
          <Row className="gy-2">
            <Col className="col-12">
              <ProfileHeader />
            </Col>
            <Col className="col-12">
              <Analisi />
            </Col>
            <Col className="col-12">
              <Risorse />
            </Col>
            <Col className="col-12">
              <Informazioni />
            </Col>
            <Col className="col-12">
              <Esperienza />
            </Col>
            <Col className="col-12">
              <Formazione />
            </Col>
          </Row>
        </Col>
        <Col className="col-md-6 col-lg-4 d-none d-md-block">
          <ProfileDexSideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
