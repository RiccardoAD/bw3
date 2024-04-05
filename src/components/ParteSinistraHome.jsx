import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { profileMeAct } from "../redux/actions/profileMeAct";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import FriendIcon from "../assets/svg/addFriend.svg";
import BookmarkIcon from "../assets/svg/bookmark_icon.svg";

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
                <Row>
                  <Col className="position-relative p-0 m-0">
                    <div className=" p-0 cursor">
                      <input type="file" id="bgImage" hidden />
                      <label htmlFor="bgImage" className="bgProfile cursor ">
                        <img
                          className="bgProfile"
                          src="https://images.unsplash.com/photo-1593328125760-2a9bf6288fb2?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="profileBg"
                        />
                      </label>
                      <Link to="/profile">
                        <img
                          src={profileData.image}
                          alt="ProfileData"
                          className="position-absolute top-100 start-50 translate-middle img-fluid rounded rounded-circle border border-3 border-white"
                          id="miniProfile"
                        />
                      </Link>
                    </div>
                  </Col>
                </Row>
                <Row className="border-bottom">
                  <Col>
                    <Row className="mt-5">
                      <Link to="/profile" className="text-black">
                        <h4 className="mt-3 text-center">{`${profileData.name} ${profileData.surname}`}</h4>
                      </Link>
                      {/* <h4 className="my-3 text-center">Nome cognome</h4>  */}
                    </Row>
                    <Row className="gx-0">
                      <Col>
                        {/* <p className="mb-2 text-center">titolo</p> */}
                        <p className="mb-3 text-center">{profileData.bio}</p>
                      </Col>
                    </Row>
                    <Row className="timeAndLocation">
                      <Col>
                        <div>
                          <p className="mb-4 text-center">{profileData.area}</p>
                          {/* <p className="mb-2 text-center">placeholder</p> */}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="border-bottom mt-3">
                  <Col>
                    <div className="d-flex justify-content-between">
                      <p className="text-left text-muted mb-0 fw-bold">
                        Collegamenti <span className="text-primary">500</span>
                      </p>
                      <img src={FriendIcon} style={{ width: "20px" }} />
                    </div>
                    <p className="text-left font-weight-bold mt-0">Espandi la tua rete</p>
                  </Col>
                </Row>

                <Row className="border-bottom mt-3">
                  <Col>
                    {/* Accedi a strumenti e info */}
                    <p className="text-left text-muted mb-0">Accedi a strumenti e informazioni in esclusiva</p>
                    <p className="text-left font-weight-bold mt-0">Riattiva Premium con il 50 % di sconto </p>
                  </Col>
                </Row>

                <Row className=" d- flex mt-3 align-items-center">
                  <Col className="d-flex flex-grow-0 p-0 m-0 ms-2">
                   <p> <img src={BookmarkIcon} style={{ width: "20px" }} /></p>
                  </Col>
                  <Col className="d-flex ">
                    <p className="text-left font-weight-bold mt-0">I miei elementi</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Row className="mt-3">
            <Col>
              <Card style={{ position: "relative", overflow: "hidden" }}>
                <div id="otherCards">
                  <Row className=" border-bottom py-3 align-items-center">
                    <Col>
                      <p className="fw-bold text-primary pb-2 fs-5">Recenti</p>

                      <p className="text-left text-muted mb-0">Start up & PMI</p>
                      <p className="text-left text-muted mb-0">Reti di imprese</p>
                      <p className="text-left text-muted mb-0">digichamps</p>
                      <p className="text-left text-muted mb-0">Digital marketing</p>
                    </Col>
                  </Row>

                  <Row className="pt-3 align-items-center">
                    <Col>
                      <p className="fw-bold text-primary py-1">Gruppi</p>
                      <p className="fw-bold text-primary py-1">Eventi</p>
                      <p className="fw-bold text-primary py-1">Hashtag seguiti</p>
                    </Col>
                  </Row>
                </div>

                <Row>
                  <Col className="col-12 sectionFooter">Scopri di più</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default ParteSinistraHome;
