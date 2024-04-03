import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Informazioni from "./Informazioni";
import ExperienceComponent from "./ExperienceComponent";
import Formazione from "./Formazione";
import ProfileDexSideBar from "./ProfileDexSideBar";

const ProfilePage = function () {
  return (
    <Container className="mt-5">
      <Row className="d-flex">
        <Col className="col-md-6 col-lg-8 mt-3">
          <Row>
            <Col className="col-12 my-3">
              <ProfileHeader />
            </Col>
            <Col className="col-12 my-3">
              <Analisi />
            </Col>
            <Col className="col-12 my-3">
              <Risorse />
            </Col>
            <Col className="col-12 my-3">
              <Informazioni />
            </Col>
            <Col className="col-12 my-3">
              <ExperienceComponent />
            </Col>
            <Col className="col-12 my-3">
              <Formazione />
            </Col>
          </Row>
        </Col>
        <Col className="col-md-6 col-lg-4 d-none d-md-block mt-3">
          <ProfileDexSideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
