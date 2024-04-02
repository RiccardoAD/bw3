import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

function SingleProfile({ profileId }) {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetchProfileData();
  }, [profileId]);

  const fetchProfileData = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profileId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  return (
    <Col xs={12} className="gy-4 border-bottom">
      {profileData && (
        <>
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
        </>
      )}
    </Col>
  );
}

export default SingleProfile;
