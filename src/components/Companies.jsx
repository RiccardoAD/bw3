import { Row, Col, Image, Button } from "react-bootstrap";
import WindstarCruises from "../assets/Windstar_Cruises.jpeg";
import MysticCruises from "../assets/mystic_cruises_logo.jpeg";

function Companies() {
  return (
    <Row className="border rounded bg-light m-2 px-5">
      <Col xs={12} className="pt-5">
        <h2 className="fw-bold">Potrebbe interessarti</h2>
      </Col>
      <Col xs={12}>
        <h4 className="fw-bold">Pagine per te</h4>
      </Col>
      <Col xs={12} className="gy-4 border-bottom">
        <Row>
          <Col xs={1}>
            <Image src={MysticCruises} className="rounded-circle img-fluid" />
          </Col>
          <Col xs={11} className="pb-3">
            <h2 className="fw-bold">Mystic Cruises</h2>
            <h4>Organizzazione di viaggi</h4>
            <h3>51.804 follower</h3>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs={1}></Col>
          <Col xs={11}>
            <Button type="button" className="btn btn-light btn-outline-dark rounded-pill">
              <h3 className="py-1 px-2">Segui</h3>
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs={12} className="gy-4 border-bottom">
        <Row>
          <Col xs={1}>
            <Image src={WindstarCruises} className="rounded-circle img-fluid" />
          </Col>
          <Col xs={11} className="pb-3">
            <h2 className="fw-bold">Windstar Cruises</h2>
            <h4>Tempo libero, viaggi e turismo</h4>
            <h3>71.422 follower</h3>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs={1}></Col>
          <Col xs={11}>
            <Button type="button" className="btn btn-light btn-outline-dark rounded-pill">
              <h3 className="py-1 px-2">Segui</h3>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Companies;
