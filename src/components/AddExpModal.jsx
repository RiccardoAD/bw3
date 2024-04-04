import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddIcon from "../assets/svg/add_icon.svg";

const AddExpModal = ({ userId }) => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    area: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Failed to add experience");
        }

        // After successful submission, close the modal
        handleClose();
      } catch (error) {
        console.error("Error adding experience:", error);
      }
    }
  };
  return (
    <>
      <img
        src={AddIcon}
        className="editIcon"
        style={{ position: "absolute", top: "1rem", right: "1.8rem" }}
        onClick={handleShow} // Use handleShow function passed from parent
      />

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
              <Form.Control required type="text" placeholder="Scrivi qui la compagnia per cui hai lavorato" />
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
          {/*     FINE FORM */}
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
  );
};

export default AddExpModal;
