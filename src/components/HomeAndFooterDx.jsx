import { Row, Col, Container } from "react-bootstrap";
import logo from "../assets/svg/svgexport-1.svg";
import { CaretDownFill, InfoSquareFill } from "react-bootstrap-icons";
import GeneratedPost from "./GeneratedPost.jsx";
import AddPost from "./AddPost.jsx";
import ParteSinistraHome from "./ParteSinistraHome.jsx";
import LinkedInNavbar from "../components/LinkedInNavbar.jsx";
const HomeAndFooterDx = () => {
  return (
    <>
<LinkedInNavbar />

      <Container className="sfondo mt-5">
        <Row className="pt-4">
          <Col className="col-12 col-md-4 col-lg-3">
            <ParteSinistraHome />
          </Col>
  
  
  
          <Col>
  
  
            <Row>
  
              <Col>
                <AddPost />
  
                <GeneratedPost />
              </Col>
  
              <Col className="col-12 col-lg-4">
                <div className="bg-white my-2 py-3 border border-1r rounded ">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 px-2 py-1 fw-semibold">LinkedIn Notizie</p>
                    <InfoSquareFill className=" me-2"></InfoSquareFill>
                  </div>
                  <ul className="me-2">
                    <li className="Fs-9 mb-1">
                      <p className="mb-0 fw-semibold">Piu sfide per la cybersecurity</p>
                      <p className="mb-0 text-secondary Fs-8">Notizie principali &#x25CF; 26 lettori</p>
                    </li>
                    <li className="Fs-9 mb-1">
                      <p className="mb-0 fw-semibold">SONDAGGIO: Cosa valuti di più...</p>
                      <p className="mb-0 text-secondary Fs-8">1 giorno fa</p>
                    </li>
                    <li className="Fs-9 mb-1">
                      <p className="mb-0 fw-semibold">Cercare lavoro nella tecnologia</p>
                      <p className="mb-0 text-secondary Fs-8">1 giorno fa</p>
                    </li>
                    <li className="Fs-9 mb-1">
                      <p className="mb-0 fw-semibold">quali confini tra vita e lavoro </p>
                      <p className="mb-0 text-secondary Fs-8">1 giorno fa</p>
                    </li>
                    <li className="Fs-9 mb-1">
                      <p className="mb-0 fw-semibold">Saper arrivare al momento giusto</p>
                      <p className="mb-0 text-secondary Fs-8">2 giorni fa</p>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center mx-4 text-secondary">
                    <p className="mb-0 fw-semibold">Show more</p>
                    <CaretDownFill className="ms-2"></CaretDownFill>
                  </div>
                </div>
            
  
           {/*  START SIDEBAR FOOTER  */}
            <div className="mb-2 py-2">
              <div className="d-flex mx-4 justify-content-center">
                <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
                  Informazioni
                </a>
                <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
                  Accessibilità
                </a>
              </div>
              <div className="d-flex mx-4 justify-content-center my-2">
                <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
                  Centro Assistenza
                </a>
                <a href="#" className="me-2  text-decoration-none  text-secondary font-home-destra">
                  Privacy e condizioni
                </a>
              </div>
              <div className="d-flex mx-4 justify-content-center">
                <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
                  Opzioni per gli annunci pubblicitari
                </a>
              </div>
              <div className="d-flex mx-4 my-2 justify-content-center">
                <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
                  Pubblicità
                </a>
                <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
                  Servizi alle aziende
                </a>
              </div>
              <div className="d-flex mx-4 justify-content-center">
                <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
                  Scarica l'app LinkedIn
                </a>
                <a href="#" className="me-2 text-decoration-none  text-secondary font-home-destra">
                  Altro
                </a>
              </div>
              <div className="d-flex flex-column mx-4 align-items-center mt-3">
                <img src={logo} x="0" y="0" width="56" height="14" alt="logo2"/>
                <p className="font-home-destra ms-1 ">LinkedIn Corporation © 2024</p>
              </div>
            </div>
          </Col>
  
  
  
            </Row>
          </Col>
  
          
        </Row>
      </Container>
    </>
  );
};

export default HomeAndFooterDx;
