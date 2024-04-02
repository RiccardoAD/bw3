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
    <Row className="border rounded bg-light m-2">
      <Col xs={12} className="pt-5 px-5">
        <h2 className="fw-bold">Persone che potresti conoscere</h2>
      </Col>
      <Col xs={12} className="px-5">
        <h4>Dalla tua azienda</h4>
      </Col>
      {tuttiIProfili.slice(0, 5).map((unProfilo) => (
        <ProfileFetch key={unProfilo._id} profileData={unProfilo} />
      ))}
      <Col xs={12} className="text-center p-0">
        <Button className="btn bg-light w-100 text-secondary fw-bold fs-2 p-5 border-0 border-top">Mostra tutto</Button>
      </Col>
    </Row>
  );
}

export default ProfilesSugg;
