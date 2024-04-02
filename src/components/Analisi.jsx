import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import EditPen from "../assets/svg/edit_pen_long.svg"

const Analisi = function () {
    return (
       <Row>

       <Col>
       <Card style={{ position: "relative"}}>
      <Card.Body id="otherCards">
       
    <h5>Analisi</h5>
        <p className="timeAndLocation">Solo per te</p>

        <Row>
            <Col><Row>
                <Col>Icona</Col>
                <Col><p className="fw-bold">Visualizzazioni profilo</p>
                <p>Scopri chi ha visitato il tuo profilo.</p></Col></Row></Col>

                
                <Col><Row>
                <Col>Icona</Col>
                <Col>Impressioni del post</Col></Row></Col>
        </Row>
      
  
        
      </Card.Body>
    </Card>

       
       </Col>


       </Row>
    )

}

export default Analisi