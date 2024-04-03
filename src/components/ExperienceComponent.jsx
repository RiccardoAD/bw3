import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import AddIcon from "../assets/svg/add_icon.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";
import CompanyIcon from "../assets/company_icon.png";
import { Link, useParams } from "react-router-dom";

import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ExperienceComponent = function () {
  /*  PARAMS CHE VERRANNO AGGIORNATI CON L'USERID DELLA FETCH */
  const params = useParams();
  console.log("PARAMS", params);

  /* STATO E FUNZIONI PER IL MODALE D'AGGIUNTA  */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* STATO E FUNZIONI PER IL MODALE DI MODIFICA  */
  const [appear, setAppear] = useState(false);

  const handleDisappear = () => setAppear(false);
  const handleAppear = () => setAppear(true);

  /* STATO E FUNZIONI PER IL FORM */

  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
    setValidated(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    /*  Il reset dei campi funziona solo se non controllo la validità dei campi,
      per questo per ora è commentato
  
     handleReset();
     handleClose();
    */
  };

  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          <div id="otherCards">
            <Row>
              <Col>
                {/*  PULSANTE "+" E MODALE D'AGGIUNTA CHE SI MOSTRA SOLO NELLA PAGINA DI MODIFICA */}
                {params.userId && (
                  <>
                    <img
                      src={AddIcon}
                      className="editIcon"
                      style={{ position: "absolute", top: "1rem", right: "1.8rem" }}
                      onClick={handleShow}
                    ></img>

                    <Modal show={show} onHide={handleClose} size="lg">
                      <Modal.Header closeButton>
                        <Modal.Title>Aggiungi Esperienza</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        {/*   INIZIO FORM PER AGGIUNGERE POSIZIONE LAVORATIVA */}

                        <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
                          <Form.Group className="mb-3" controlId="posizione lavorativa">
                            <Form.Label>Posizione lavorativa</Form.Label>
                            <Form.Control required type="text" placeholder="Scrivi qui la tua posizione lavorativa" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="compagnia">
                            <Form.Label>Compagnia</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Scrivi qui la compagnia per cui hai lavorato"
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="data di inizio">
                            <Form.Label>Data di Inizio</Form.Label>
                            <Form.Control required type="text" placeholder="Scrivi qui la tua data di inizio" />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="data conclusione">
                            <Form.Label>Data Conclusione</Form.Label>
                            <Form.Control required type="text" placeholder="Scrivi qui la scadenza del tuo contratto" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="area geografica">
                            <Form.Label>Area Geografica</Form.Label>
                            <Form.Control required type="text" placeholder="Scrivi qui la tua area geografica" />
                          </Form.Group>
                        </Form>

                        {/*     FINE FORM
                         */}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleSubmit}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                )}
                {/* FINE MODALE D'AGGIUNTA */}

                {/* PULSANTE EDIT CON LINK ALLA PAGINA ESPERIENZE CHE SI MOSTRA SOLO NELLA PAGINA PROFILE */}
                {!params.userId && (
                  <Link to="/profile/experiences">
                    <img src={EditPen} className="editIcon" style={{ position: "absolute", top: "1rem" }} />
                  </Link>
                )}

                {/* PULSANTE EDIT CHE ATTIVA MODALE CON FORM DI MODIFICA POSIZIONE LAVORATIVA CHE SI ATTIVA NELLA PAGINA EXPERIENCES */}

                <h5 className="fw-bold pb-2">Esperienza</h5>
              </Col>
            </Row>

            {/* ESPERIENZE STATICHE DA MAPPARE NON APPENA ABBIAMO LA FECTH: */}
            <Row className=" border-bottom py-3" style={{ position: "relative" }}>
              <Col className="col-2 col-lg-1">
                {params.userId && (
                  <>
                    <img
                      src={EditPen}
                      className="editIcon"
                      style={{ position: "absolute", top: "0.5rem", right: "1rem" }}
                      onClick={handleAppear}
                    />

                    <Modal show={appear} onHide={handleDisappear} size="lg">
                      <Modal.Header closeButton>
                        <Modal.Title>Modifica Esperienza</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        {/*   INIZIO FORM PER MODIFICARE POSIZIONE LAVORATIVA */}

                        <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
                          <Form.Group className="mb-3" controlId="posizione lavorativa">
                            <Form.Label>Posizione lavorativa</Form.Label>
                            <Form.Control required type="text" placeholder="Scrivi qui la tua posizione lavorativa" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="compagnia">
                            <Form.Label>Compagnia</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Scrivi qui la compagnia per cui hai lavorato"
                            />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="data di inizio">
                            <Form.Label>Data di Inizio</Form.Label>
                            <Form.Control required type="text" placeholder="Scrivi qui la tua data di inizio" />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="data conclusione">
                            <Form.Label>Data Conclusione</Form.Label>
                            <Form.Control required type="text" placeholder="Scrivi qui la scadenza del tuo contratto" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="area geografica">
                            <Form.Label>Area Geografica</Form.Label>
                            <Form.Control required type="text" placeholder="Scrivi qui la tua area geografica" />
                          </Form.Group>
                        </Form>

                        {/*     FINE FORM
                         */}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleDisappear}>
                          Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleSubmit}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                )}

                <img src={CompanyIcon} style={{ width: "50px" }}></img>
              </Col>
              <Col>
                <p className="fw-bold">Mansione</p>
                <p className="timeAndLocation">Periodo</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolor alias quaerat, dolore quam amet
                  dicta perspiciatis quas excepturi, repellendus facere quos? Incidunt sed minus vero optio laborum
                  architecto eveniet.
                </p>
              </Col>
            </Row>
          </div>

          {!params.userId && (
            <Row>
              <Col className="col-12 sectionFooter">
                Mostra tutte le esperienze
                <img src={RightArrow} style={{ marginLeft: "10px" }}></img>
              </Col>
            </Row>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default ExperienceComponent;
