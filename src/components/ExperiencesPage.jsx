import { Container, Row, Col } from "react-bootstrap";

import ExperienceComponent from "./ExperienceComponent";

import ProfileDexSideBar from "./ProfileDexSideBar";
import LinkedInNavbar from "../components/LinkedInNavbar";
const ExperiencesPage = function () {
  return (
    <>
<LinkedInNavbar />

      <Container className="mt-5">
        <Row className="d-flex">
          <Col className="col-md-6 col-lg-8 mt-3">
            <Row>
              <Col className="col-12 my-3">
                <ExperienceComponent />
              </Col>
            </Row>
          </Col>
          <Col className="col-md-6 col-lg-4 d-none d-md-block mt-3">
            <ProfileDexSideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExperiencesPage;
