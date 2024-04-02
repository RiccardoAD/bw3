import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const ProfileHeader = function () {
    return (
       <Row>

       <Col>
       <Card style={{ position: "relative"}}>
      <Card.Img variant="top" style={{ height: '10rem' }} src="https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div id="profilePicture">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrptuijk8yZC1B_5W0kZGBl9GQHZ6YGNzeYROhsD83nQ&s"></img>
      </div>
      <Card.Body id="headerCard">
        <h4 className="profileTitle">Nome Cognome</h4>
        <Card.Text>
         Sottotitolo per la professione
        </Card.Text>
        <p className="timeAndLocation">Località se dinamica • <a href="">Informazioni di contatto</a></p>
        <button className="mainBtn">Disponibile per</button>
        <button className="secondaryBtn">Disponibile per</button>
        <button className="tertiaryBtn">Altro</button>
      </Card.Body>
    </Card>

       
       </Col>


       </Row>
    )

}

export default ProfileHeader