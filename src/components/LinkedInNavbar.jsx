import { useState } from "react";
import { Navbar, Nav, Form, FormControl, Dropdown } from "react-bootstrap";
import linkedinLogo from "../assets/logo.png";

const LinkedInNavbar = () => {
  const [tuDropdownOpen, setTuDropdownOpen] = useState(false);
  const [aziendeDropdownOpen, setAziendeDropdownOpen] = useState(false);

  const toggleTuDropdown = () => setTuDropdownOpen(!tuDropdownOpen);
  const toggleAziendeDropdown = () => setAziendeDropdownOpen(!aziendeDropdownOpen);

  return (
    <div>
      <Navbar bg="white" expand="lg" className="custom-navbar fixed-top">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={linkedinLogo}
            width="30"
            height="30"
            className="d-inline-block align-top linkedin-logo"
            alt="LinkedIn Logo"
          />
          <Form inline>
            <FormControl type="text" placeholder="Cerca" className="mr-sm-2 search-field" />
          </Form>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto nav-spacer">
            <Nav.Link href="#home" className="home-link">
              Home
            </Nav.Link>
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
                      <div className="profile-pic-placeholder"></div>
                    </div>
                    {/* Nome e cognome */}
                    <div className="profile-details">
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
      </Navbar>
    </div>
  );
};

export default LinkedInNavbar;
