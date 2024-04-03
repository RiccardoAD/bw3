import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";

const ProfileHeader = function () {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("il mio profilo", data);
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <Row>
      <Col>
        <Card style={{ position: "relative" }}>
          {profileData && (
            <>
              <Card.Img variant="top" style={{ height: "10rem" }} src={profileData.image} className="img-fluid" />
              <div id="profilePicture">
                <img src={profileData.image} alt="Profile" className="img-fluid" />
              </div>
              <Card.Body id="headerCard">
                <img src={EditPen} className="editIcon" alt="Edit Pen Icon" />
                <h4 className="profileTitle">
                  {profileData.name} {profileData.surname}
                </h4>
                <Card.Text>{profileData.bio}</Card.Text>
                <p className="timeAndLocation">
                  {profileData.area} • <a href="#">Informazioni di contatto</a>
                </p>
                <button className="mainBtn">Disponibile per</button>
                <button className="secondaryBtn">Profilo</button>
                <button className="tertiaryBtn">Altro</button>
              </Card.Body>
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
