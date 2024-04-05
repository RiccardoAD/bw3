import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import post from "../redux/actions/post";
import { Row, Col } from "react-bootstrap";
import { Chat, HandThumbsUp, Share, Send } from "react-bootstrap-icons";
import Spinner from "./Spinner";
import Card from "react-bootstrap/Card";
import EditPen from "../assets/svg/edit_pen_long.svg";
import DotsIcon from "../assets/svg/dots_icon.svg";

const GeneratedPost = () => {
  let results = useSelector((state) => state.post.postState);
  console.log(results);
  let isLoading = useSelector((state) => state.post.isLoading);
  console.log(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(post());
  }, [dispatch]);

  let resultsSlice = results.slice(-8).reverse();

  const handleRefresh = () => {
    dispatch(post());
  };

  return (
    <>
      <Row>
        <Col>
          {isLoading ? (
            <Spinner />
          ) : (
            resultsSlice.map((p, index) => (
              <Card style={{ position: "relative", overflow: "hidden" }} key={index} id="otherCards" className="mt-3">
                <div id="otherCards" style={{ padding: "1rem" }}>
                  <Row className="align-items-center pt-1 pb-4 border-bottom">
                    <Col className="col-1 me-4 me-lg-3 me-xxl-1 p-0">
                      <img
                        src={DotsIcon}
                        className="editIcon"
                        style={{ position: "absolute", top: "0.5rem", right: "4rem" }}
                      ></img>
                      <img src={EditPen} className="editIcon" style={{ position: "absolute", top: "0.5rem" }}></img>

                      <img src={p.user.image} alt="" className="asideImg rounded-circle" />
                    </Col>{" "}
                    <Col>
                      <p className="fw-bold ms-1 mt-1">{p.username}</p>
                      <p className="ms-1 text-secondary">{p.user.title}</p>
                    </Col>
                    <Col className="d-flex">
                      <p className="ms-auto mt-1 text-primary fw-bold followBtn">+ Segui</p>
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col className="col-12 d-flex justify-content-start align-items-start">
                      <p className="mt-3">{p.text}</p>
                    </Col>
                  </Row>
                </div>

                <Row className="mt-2 border-top">
                  <Col>
                    <p className="sectionFooterPosts mt-2">
                      <HandThumbsUp className="me-1" />
                      Consiglia
                    </p>
                  </Col>

                  <Col>
                    <p className="sectionFooterPosts mt-2">
                      <Chat className="me-1" />
                      Commenta
                    </p>
                  </Col>
                  <Col>
                    <p className="sectionFooterPosts mt-2">
                      <Share className="me-1" />
                      Diffondi post
                    </p>
                  </Col>
                  <Col>
                    <p className="sectionFooterPosts mt-2">
                      <Send className="me-1" /> Invia
                    </p>
                  </Col>
                </Row>
              </Card>
            ))
          )}
        </Col>
      </Row>
      <Row>
        <Col className="my-4 text-center">
          <button className="secondaryBtn" onClick={handleRefresh}>
            Vedi altri post
          </button>
        </Col>
      </Row>
    </>
  );
};

export default GeneratedPost;
