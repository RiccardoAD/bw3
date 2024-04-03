import { useState } from "react";
import { Navbar, Nav, Form, FormControl, Dropdown, Container } from "react-bootstrap";
import linkedinLogo from "../assets/logo.png";

const LinkedInNavbar = () => {
  const [tuDropdownOpen, setTuDropdownOpen] = useState(false);
  const [aziendeDropdownOpen, setAziendeDropdownOpen] = useState(false);

  const toggleTuDropdown = () => setTuDropdownOpen(!tuDropdownOpen);
  const toggleAziendeDropdown = () => setAziendeDropdownOpen(!aziendeDropdownOpen);

  return (
    <Navbar expand="lg" className="custom-navbar fixed-top bg-white">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={linkedinLogo}
            width="30"
            height="30"
            className="d-inline-block align-top me-3"
            alt="LinkedIn Logo"
          />
          <Form inline>
            <FormControl
              type="text"
              placeholder="Cerca"
              className="pe-5 me-2"
              style={{ width: "350px", backgroundColor: "rgb(238, 243, 249)" }}
            />
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="gap-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#network">Rete</Nav.Link>
            <Nav.Link href="#jobs">Lavoro</Nav.Link>
            <Nav.Link href="#messaging">Messagistica</Nav.Link>
            <Nav.Link href="#notifications">Notifiche</Nav.Link>
            {/* Tu */}
            <Dropdown show={tuDropdownOpen} onToggle={toggleTuDropdown}>
              <Dropdown.Toggle as={Nav.Link}>Tu</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#action/1">
                  <div className="profile-info-container">
                    {/* Spazio rotondo */}
                    <div className="profile-pic-container">
                      <div className="p-4 bg-secondary rounded-circle"></div>
                    </div>
                    {/* Nome e cognome */}
                    <div className="profile-details pt-3">
                      <h5 className="profile-name">Nome e cognome</h5>
                      <p className="profile-role">Ruolo professionale</p>
                    </div>
                  </div>
                  <Dropdown.Divider />

                  <Dropdown.Item href="#action/3" style={{ fontWeight: "bold" }}>
                    Account
                  </Dropdown.Item>
                  <Dropdown.Item href="#action/5">Impostazioni e Privacy</Dropdown.Item>
                  <Dropdown.Item href="#action/6">Guida</Dropdown.Item>
                  <Dropdown.Item href="#action/7">Lingua</Dropdown.Item>

                  <Dropdown.Item href="#action/4" style={{ fontWeight: "bold" }}>
                    Gestisci
                  </Dropdown.Item>
                  <Dropdown.Item href="#action/5">Post e attività</Dropdown.Item>
                  <Dropdown.Item href="#action/6">Account per la pubblicazione di offerte</Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item href="#action/5">Esci</Dropdown.Item>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Per le aziende */}
            <Dropdown show={aziendeDropdownOpen} onToggle={toggleAziendeDropdown}>
              <Dropdown.Toggle as={Nav.Link}>Per le aziende</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#action/1">Per le aziende</Dropdown.Item>
                <Dropdown.Item href="#action/2">Scopri altri prodotti Linkedin</Dropdown.Item>
                <Dropdown.Item href="#action/3">Scopri altro per il business</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LinkedInNavbar;
