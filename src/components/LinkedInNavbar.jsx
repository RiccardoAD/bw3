import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/css/style.css";
import { Form } from "react-bootstrap";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";
import linkedinLogo from "../assets/logo.png";
import cerca_bold from "../assets/svg/cerca_bold.svg";
import home from "../assets/svg/home.svg";
import people from "../assets/svg/people.svg";
import work from "../assets/svg/work.svg";
import message from "../assets/svg/message.svg";
import campana from "../assets/svg/campana.svg";
import business from "../assets/svg/business.svg";
import { profileMeAct } from "../redux/actions/profileMeAct";
import { useDispatch, useSelector } from "react-redux";

function LinkedInNavbar() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileMeRed.profileData);

  useEffect(() => {
    dispatch(profileMeAct());
  }, [dispatch]);

  return (
    <Navbar collapseOnSelect expand="sm" className="flex-xs-row-reverse bg-body-tertiary fixed-top">
      <Container>
        <div className="d-flex align-items-center gap-sm-3">
          <div className="d-flex me-2">
            <Navbar.Brand href="#home" className="container_logo_navbar_fixed m-0" width="45px" height="45px">
              <img src={linkedinLogo} alt="logo" width="36px" height="36px" className="Logo_navbar_fixed " />
            </Navbar.Brand>
          </div>

          <div>
            <div className="position-relative">
              <img src={cerca_bold} alt="cerca_bold" className="d-lg-none" style={{ width: "30px" }} />
              <img
                src={cerca_bold}
                alt="research_icon"
                className="d-none d-lg-block position-absolute research_icon_navbar"
              />
              <Form.Control
                type="text"
                placeholder="Cerca"
                className="d-none d-lg-block ps-5 research_input_form_navbar m-0"
                width={"20%"}
              />
            </div>
          </div>
        </div>

        <div className="d-md-flex">
          <div className=" gap-5 d-flex ">
            <Nav className="flex-xs-row-reverse d-md-flex align-items-center ms-4 gap-4">
              <div className="icons_navbar">
                <img src={home} alt="home_icon" />
                <Nav.Link as={Link} to="/" className="p-0">
                  Home
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src={people} alt="network_icon" />
                <Nav.Link href="/Rete" className="p-0">
                  Network
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src={work} alt="jobs_icon" />
                <Nav.Link href="/Lavoro" className="p-0">
                  Jobs
                </Nav.Link>
              </div>

              <div className="icons_navbar">
                <img src={message} alt="messages_icon" />
                <Nav.Link href="/Messagistica" className="p-0">
                  Messages
                </Nav.Link>
              </div>
              <div className="icons_navbar">
                <img src={campana} alt="notification_icon" />
                <Nav.Link href="/Notifiche" className="p-0">
                  Notifications
                </Nav.Link>
              </div>
            </Nav>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start gap-2 ms-4">
            <div className="icons_navbar">
              <div className="d-flex justify-content-center ">
                <Link to={"/profile"}>
                  <img
                    src={profileData.image}
                    alt="profile_picture"
                    width={"25px"}
                    height={"25px"}
                    className="image_dropdown_navbar object-fit-cover"
                  />
                </Link>
              </div>

              <NavDropdown title="Me" id="collapsible-nav-dropdown" className="p-0 dropdown-menu-left">
                <div style={{ width: "18rem" }} className="dropdown-menu-right">
                  <div className="px-2">
                    <img
                      src={profileData.image}
                      alt="draft_picture"
                      width="30px"
                      height={"30px"}
                      className="image_dropdown_navbar object-fit-cover"
                    />
                    <div>
                      <p className="fw-semibold">
                        {profileData.name} {profileData.surname}
                      </p>
                      <p>{profileData.bio}</p>

                      <MyButton text={"Visualizza Profilo"} colore={"primary"} link={"/Profile"}></MyButton>
                    </div>
                  </div>
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Esci</NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav>
              <div className="container icons_navbar">
                <div className="d-flex justify-content-center"></div>
                <img src={business} alt="business_icon mb-0" />
                <NavDropdown title="Business" id="collapsible-nav-dropdown">
                  <div>
                    <div>
                      <div>
                        <p>Per le aziende</p>
                      </div>
                    </div>
                  </div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Scopri altro</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default LinkedInNavbar;
