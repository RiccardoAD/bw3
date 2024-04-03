import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import AddIcon from "../assets/svg/add_icon.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";
import CompanyIcon from "../assets/company_icon.png";
import { Link, useParams } from "react-router-dom";

const ExperienceComponent = function () {
  const params = useParams();
  console.log("PARAMS", params);

  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          <div id="otherCards">
            <Row>
              <Col>
                {params.userId && (
                  <img
                    src={AddIcon}
                    className="editIcon"
                    style={{ position: "absolute", top: "1rem", right: "4rem" }}
                  ></img>
                )}

                <Link to="/profile/experiences">
                  {" "}
                  <img src={EditPen} className="editIcon" style={{ position: "absolute", top: "1rem" }} />{" "}
                </Link>
                <h5 className="fw-bold pb-2">Esperienza</h5>
              </Col>
            </Row>

            <Row className=" border-bottom py-3">
              <Col className="col-2 col-lg-1">
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

            <Row className="py-3">
              <Col className="col-2 col-lg-1">
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

          <Row>
            <Col className="col-12 sectionFooter">
              Mostra tutte le esperienze
              <img src={RightArrow} style={{ marginLeft: "10px" }}></img>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ExperienceComponent;
