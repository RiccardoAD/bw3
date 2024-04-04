import { Container, Row, Col } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Informazioni from "./Informazioni";
import ExperienceComponent from "./ExperienceComponent";
import Formazione from "./Formazione";
import ProfileDexSideBar from "./ProfileDexSideBar";
import FooterProfile from "./FooterProfile";

const ProfilePage = function () {
  return (
    <Container className="mt-5">
      <Row className="d-flex pt-4">
        <Col className="col-md-7 col-lg-8 xxl-9">
          <Row className="gy-2">
            <Col className="col-12">
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
        <Col className="col-md-5 col-lg-4 xxl-3 d-none d-md-block">
          <ProfileDexSideBar />
        </Col>
        <Row>
          <FooterProfile />
        </Row>
      </Row>
    </Container>
  );
};

export default ProfilePage;
