import { Col, Row } from "react-bootstrap";
import SingleProfile from "./SingleProfile";

function OtherProfiles() {
  return (
    <Row className="border rounded bg-light m-2 px-5">
      <Col xs={12} className="pt-5">
        <h2 className="fw-bold">Altri profili simili</h2>
      </Col>
      <SingleProfile profileId={"6551db85c55e7e0018f83bec"} />
      <SingleProfile profileId={"6551db85c55e7e0018f83bec"} />
      <SingleProfile profileId={"6551db85c55e7e0018f83bec"} />
      <SingleProfile profileId={"6551db85c55e7e0018f83bec"} />
    </Row>
  );
}

export default OtherProfiles;
