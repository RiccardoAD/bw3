import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions";
import { Button, Col, Row } from "react-bootstrap";
import ProfileFetch from "./ProfileFetch";

function OtherProfiles() {
  const dispatch = useDispatch();
  const tuttiIProfili = useSelector((state) => state.profile.profiles);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  console.log("Profiles:", tuttiIProfili);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <>
      <Row className="border border-bottom-0 rounded-top bg-white px-4">
        <Col xs={12} className="pt-4">
          <p className="fw-bold m-0">Altri profili simili</p>
        </Col>
        {shuffleArray(tuttiIProfili)
          .slice(0, 5)
          .map((unProfilo) => (
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

export default OtherProfiles;
