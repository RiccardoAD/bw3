import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

function ProfileFetch({ profileData }) {
  return (
    <Col xs={12} className="gy-3 border-bottom">
      <Row>
        <Col xs={3}>
          <Image src={profileData.image} className="rounded-circle img-fluid" />
        </Col>
        <Col xs={9} className="pb-2">
          <p className="fw-bold m-0">
            {profileData.name} {profileData.surname}
          </p>
          <p className="m-0">{profileData.title}</p>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col xs={3}></Col>
        <Col xs={9}>
          <Button type="button" className="btn bg-white btn-outline-secondary rounded-pill">
            <p className="m-0 pb-1 px-2">Collegati</p>
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default ProfileFetch;
