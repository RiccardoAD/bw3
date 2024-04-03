import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProfileHeader = function () {
  /* STATO E FUNZIONI PER IL MODALE  */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

    /*  Il reset dei campi funziona solo se non controllo la validità dei campi, per questo per ora è commentato
   handleReset();
   handleClose();
  */
  };

  return (
    <Row>
      <Col>
        <Card style={{ position: "relative" }}>
          <Card.Img
            variant="top"
            style={{ height: "10rem" }}
            src="https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div id="profilePicture">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrptuijk8yZC1B_5W0kZGBl9GQHZ6YGNzeYROhsD83nQ&s"></img>
          </div>
          <Card.Body id="headerCard">
            <img src={EditPen} className="editIcon" onClick={handleShow}></img>

            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                {/*   INIZIO FORM PER MODIFICARE I DATI DEL PROFILO */}

                <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control required type="text" placeholder="Scrivi qui il tuo nome" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="cognome">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control required type="text" placeholder="Scrivi qui il tuo cognome" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="indirizzo email">
                    <Form.Label>Indirizzo Email</Form.Label>
                    <Form.Control required type="email" placeholder="Scrivi qui la tua email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="text" placeholder="Scrivi qui il tuo username" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="biografia">
                    <Form.Label>Raccontaci di te:</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="professione">
                    <Form.Label>Professione</Form.Label>
                    <Form.Control required type="text" placeholder="Scrivi qui la tua professione" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="area geografica">
                    <Form.Label>Area Geografica</Form.Label>
                    <Form.Control required type="text" placeholder="Scrivi qui la tua area geografica" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="immagine profilo">
                    <Form.Label>URL immagine profilo</Form.Label>
                    <Form.Control required type="text" placeholder="Inserisci l'indirizzo della tua icon" />
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

            <h4 className="profileTitle">Nome Cognome</h4>
            <Card.Text>Sottotitolo per la professione</Card.Text>
            <p className="timeAndLocation">
              Località se dinamica • <a href="">Informazioni di contatto</a>
            </p>

            <button className="mainBtn">Disponibile per</button>
            <button className="secondaryBtn">Profilo</button>
            <button className="tertiaryBtn">Altro</button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
