import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

function ProfileFetch({ profileData }) {
  return (
    <Col xs={12} className="gy-4 border-bottom px-5">
      <Row>
        <Col xs={1}>
          <Image src={profileData.image} className="rounded-circle img-fluid" />
        </Col>
        <Col xs={11} className="pb-3">
          <h2 className="fw-bold">
            {profileData.name} {profileData.surname}
          </h2>
          <h4>{profileData.title}</h4>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col xs={1}></Col>
        <Col xs={11}>
          <Button type="button" className="btn btn-light btn-outline-secondary rounded-pill">
            <h3 className="py-1 px-2">Collegati</h3>
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default ProfileFetch;
