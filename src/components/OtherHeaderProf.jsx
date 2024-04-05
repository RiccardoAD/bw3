import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import backPhoto from "../assets/photo_2024-04-05_12-42-35.jpg";

const OtherHeaderProf = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pathname = window.location.pathname;
        const parts = pathname.split("/");
        const profileId = parts[2];

        if (profileId) {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profileId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
            },
          });
          const data = await response.json();
          setProfileData(data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {profileData && (
        <Row>
          <Col>
            <Card style={{ position: "relative" }}>
              <>
                <Card.Img
                  variant="top"
                  style={{ height: "12rem", backgroundColor: "black" }}
                  src={backPhoto}
                  className="object-fit-cover"
                />
                <div id="profilePicture">
                  <img src={profileData.image} alt="Profile" className="img-fluid" />
                </div>
                <Card.Body id="headerCard">
                  <h4 className="profileTitle">
                    {profileData.name} {profileData?.surname}
                  </h4>
                  <Card.Text>{profileData?.bio}</Card.Text>
                  <p className="timeAndLocation">
                    {profileData.area} • <a href="#">Informazioni di contatto</a>
                  </p>
                  <button className="mainBtn">Disponibile per</button>
                  <button className="secondaryBtn">Profilo</button>
                  <button className="tertiaryBtn">Altro</button>
                </Card.Body>
              </>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default OtherHeaderProf;
