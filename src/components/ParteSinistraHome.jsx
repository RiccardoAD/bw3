import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { profileMeAct } from "../redux/actions/profileMeAct";
import { Link } from "react-router-dom";

function ParteSinistraHome() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileMeRed.profileData);

  useEffect(() => {
    dispatch(profileMeAct());
  }, [dispatch]);
  return (
    <>
      {profileData && (
        <>
          <Container>
            <Row className="profileContainer mt-3">
              <Col>
                <Row className="">
                  <div className=" p-0 cursor">
                    <input type="file" id="bgImage" hidden />
                    <label htmlFor="bgImage" className="bgProfile cursor ">
                      <img
                        className="bgProfile"
                        src="https://cdn.create.vista.com/downloads/b2be2cb4-8abc-452e-b2a4-df3189cc2756_640.jpeg"
                        alt="profileBg"
                      />
                    </label>
                    <div id="miniProfile">
                      {/* <img src="https://placedog.net/916?id=141" alt="Profile" className="position-absolute translate-middle-y img-fluid rounded rounded-circle  " /> */}
                      <Link to="/profile">
                        <img
                          src={profileData.image}
                          alt="ProfileData"
                          className="position-absolute translate-middle-y img-fluid rounded rounded-circle  "
                        />
                      </Link>
                    </div>
                  </div>
                </Row>
                <Row>
                  <Col className="position-relative">
                    <Row className="mt-4 ">
                      <h4 className="my-3 text-center">{`${profileData.name} ${profileData.surname}`}</h4>
                      {/* <h4 className="my-3 text-center">Nome cognome</h4>  */}
                    </Row>
                    <Row className="gx-0">
                      <Col>
                        {/* <p className="mb-2 text-center">titolo</p> */}
                        <p className="mb-2 text-center">{profileData.bio}</p>
                      </Col>
                    </Row>
                    <Row className="  text-secondary mt-0 ">
                      <Col className="d-flex">
                        <div>
                          <p className="mb-2 text-center">{profileData.area}</p>
                          {/* <p className="mb-2 text-center">placeholder</p> */}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <div className="d-flex justify-content-between">
                      <p className="text-left text-muted mb-0">Collegamenti</p>
                      <p className="text-right text-primary mb-0">500</p>
                    </div>
                    <p className="text-left font-weight-bold mt-0">Espandi la tua rete</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    {/* Accedi a strumenti e info */}
                    <p className="text-left text-muted mb-0">Accedi a strumenti e informazioni in esclusiva</p>
                    <p className="text-left font-weight-bold mt-0">Riattiva Premium con il 50 % di sconto </p>
                    <hr className="bg-light" /> {/* Riga grigia */}
                    <p className="text-left font-weight-bold mt-0">I miei elementi</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Container className="profileContainer mt-3">
            <Row>
              <Col>
                <p className="text-left font-weight-bold mt-0">Recenti</p>
                <p className="text-left text-muted mb-0">Start up & PMI</p>
                <p className="text-left text-muted mb-0">Reti di imprese</p>
                <p className="text-left text-muted mb-0">digichamps</p>
                <p className="text-left text-muted mb-0">Digital marketing</p>
                <p className="text-left -bold mt-4 text-primary">Gruppi</p>
                <p className="text-left text-muted mb-0">Start up & PMI</p>
                <p className="text-left text-muted mb-0">Reti di imprese</p>
                <p className="text-left text-muted mb-0">digichamps</p>
                <p className="text-left text-muted mb-0">Digital marketing</p>
                <p className="text-left -bold mt-4 text-primary">Eventi</p>
                <p className="text-left -bold mt-0 text-primary">Hastag seguiti</p>
                <p className="text-left text-muted mb-0">marketing</p>
                <p className="text-left text-muted mb-0">sviluppo web</p>
                <p className="text-left text-muted mb-0">digital marketing</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <p className="text-secondary text-center fw-bold espandi-rete">Scopri di più</p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default ParteSinistraHome;
