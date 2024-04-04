import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import RightArrow from "../assets/svg/right_arrow_icon.svg";
import CompanyIcon from "../assets/company_icon.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileMeAct } from "../redux/actions/profileMeAct";
import AddExpModal from "./AddExpModal";
import ModifyExpModal from "./ModifyExpModal";

const ExperienceComponent = function () {
  /*  FETCH CON REDUX */
  const profileData = useSelector((state) => state.profileMeRed.profileData);
  const dispatch = useDispatch();

  // HOOK ESPERIENZE
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    dispatch(profileMeAct());
  }, [dispatch]);

  console.log("PROVA STATO REDUX", profileData);

  useEffect(() => {
    if (profileData) {
      fetchExperiences(profileData._id);
    }
  }, [profileData]);

  const fetchExperiences = async (userId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user experiences");
      }
      const experiencesData = await response.json();
      setExperiences(experiencesData);
    } catch (error) {
      console.error("Error fetching user experiences:", error);
    }
  };

  /*  PARAMS CHE VERRANNO AGGIORNATI CON L'USERID DELLA FETCH */
  const params = useParams();
  console.log("PARAMS", params);

  /*  Il reset dei campi funziona solo se non controllo la validità dei campi,
      per questo per ora è commentato
  
     handleReset();
     handleClose();
    */

  return (
    <Row>
      <Col>
        <Card style={{ position: "relative", overflow: "hidden" }}>
          <div id="otherCards">
            <Row>
              <Col>
                {/*  PULSANTE "+" E MODALE D'AGGIUNTA CHE SI MOSTRA SOLO NELLA PAGINA DI MODIFICA */}
                {params.userId && profileData && <AddExpModal userId={profileData._id} />}
                {/* FINE MODALE D'AGGIUNTA */}

                {/* PULSANTE EDIT CON LINK ALLA PAGINA ESPERIENZE CHE SI MOSTRA SOLO NELLA PAGINA PROFILE */}

                {!params.userId && profileData && (
                  <Link to={`/profile/experiences/${profileData._id}`}>
                    <img src={EditPen} className="editIcon" style={{ position: "absolute", top: "1rem" }} />
                  </Link>
                )}

                {/* PULSANTE EDIT CHE ATTIVA MODALE CON FORM DI MODIFICA POSIZIONE LAVORATIVA CHE SI ATTIVA NELLA PAGINA EXPERIENCES */}

                <h5 className="fw-bold pb-2">Esperienza</h5>
              </Col>
            </Row>

            {/* ESPERIENZE STATICHE DA MAPPARE NON APPENA ABBIAMO LA FECTH: */}
            {experiences.map((experience) => (
              <Row key={experience._id} className="border-bottom py-3" style={{ position: "relative" }}>
                <Col className="col-2 col-lg-1">
                  {params.userId && profileData && (
                    <ModifyExpModal userId={profileData._id} expId={experience._id} experience={experience} />
                  )}
                  <img src={CompanyIcon} style={{ width: "50px" }} alt="Company Logo"></img>
                </Col>
                <Col>
                  <p className="fw-bold">{experience.role}</p>
                  <p className="timeAndLocation">{`${experience.startDate} - ${experience.endDate || "Present"}`}</p>
                  <p>{experience.description}</p>
                </Col>
              </Row>
            ))}
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
