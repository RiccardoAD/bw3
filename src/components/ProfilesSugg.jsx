import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions";
import { Col, Row, Button } from "react-bootstrap";
import ProfileFetch from "./ProfileFetch";

function ProfilesSugg() {
  const dispatch = useDispatch();
  const tuttiIProfili = useSelector((state) => state.profile.profiles);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  console.log("Profiles:", tuttiIProfili);

  return (
    <>
      <Row className="border border-bottom-0 rounded-top bg-white px-4">
        <Col xs={12} className="pt-4">
          <p className="fw-bold m-0">Persone che potresti conoscere</p>
        </Col>
        <Col xs={12}>
          <p className="m-0">Dalla tua azienda</p>
        </Col>
        {tuttiIProfili.slice(0, 5).map((unProfilo) => (
          <ProfileFetch key={unProfilo._id} profileData={unProfilo} />
        ))}
      </Row>
      <Row>
        <Col xs={12} className="text-center p-0 border border-top-0 rounded-bottom">
          <Button className="btn bg-white w-100 text-secondary fw-bold fs-6 border-0">Mostra tutto</Button>
        </Col>
      </Row>
    </>
  );
}

export default ProfilesSugg;
