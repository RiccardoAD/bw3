import { Row, Col, Container } from "react-bootstrap";

function SideBarSettings() {
  const profileUrl = window.location.href;
  return (
    <Row className="border rounded bg-light m-2 px-5">
      <Row className="py-4 border-bottom">
        <Col xs={12}>
          <h2 className="fw-bold">Lingua del profilo</h2>
        </Col>
        <Col xs={12}>
          <h4>Italiano</h4>
        </Col>
      </Row>
      <Row className="py-4">
        <Col xs={12}>
          <h2 className="fw-bold">Profilo pubblico e URL</h2>
        </Col>
        <Col xs={12}>
          <h4>{profileUrl}</h4>
        </Col>
      </Row>
    </Row>
  );
}

export default SideBarSettings;
