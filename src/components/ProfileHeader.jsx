import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProfileHeader = function () {
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
    image: "",
  });

  /* STATO E FUNZIONI PER IL MODALE  */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /* STATO E FUNZIONI PER IL FORM */

  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

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
        console.log("dati fetch", profileData);
        setFormData(data);
        console.log("dati form", formData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleReset = () => {
    formRef.current.reset();
    setValidated(false);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
        },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          username: formData.username,
          bio: formData.bio,
          title: formData.title,
          area: formData.area,
          image: formData.image,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedProfileData = await response.json();
      console.log("Profile updated successfully:", updatedProfileData);
      setFormData(updatedProfileData);
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

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
                <img src={EditPen} className="editIcon" alt="Edit Pen Icon" onClick={handleShow} />

                <Modal show={show} onHide={handleClose} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Modifica Profilo</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    {/*   INIZIO FORM PER MODIFICARE I DATI DEL PROFILO */}

                    <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui il tuo nome"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              name: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="cognome">
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui il tuo cognome"
                          value={formData.surname}
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              surname: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="indirizzo email">
                        <Form.Label>Indirizzo Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Scrivi qui la tua email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              email: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui il tuo username"
                          value={formData.username}
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              username: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="biografia">
                        <Form.Label>Raccontaci di te</Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          rows={3}
                          value={formData.bio}
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              bio: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="professione">
                        <Form.Label>Professione</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui la tua professione"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              title: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="area geografica">
                        <Form.Label>Area Geografica</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Scrivi qui la tua area geografica"
                          value={formData.area}
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              area: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="immagine profilo">
                        <Form.Label>URL immagine profilo</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Inserisci l'indirizzo della tua icon"
                          value={formData.image}
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              image: e.target.value,
                            }))
                          }
                        />
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
