import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useEffect, useState } from "react";
import Response from "../Services/response.json";

export const Projects = () => {
  const [data, setData] = useState([]);
  const [company, setCompany] = useState([]);
  const [expirence, setExpirence] = useState([]);
  // console.log("response ", Response.data.workExperence.project);
  useEffect(() => {
    setData(Response.data.workExperence.project);
    setCompany(Response.data.workExperence.company);
    setExpirence(Response.data.workExperence.project1);
  }, []);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I show you to all the big and small websites I have done so
                    far
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item> */}
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div>
                          {company.map((item) => (
                            <>
                              <h4>
                                {item.name}{" "}
                                <span style={{ paddingLeft: "370px" }}>
                                  {item.dateOfJoining} {item.str}{" "}
                                  {item.dateOfLeaving}
                                </span>
                              </h4>
                              <p
                                style={{
                                  paddingRight: "930px",
                                }}
                              >
                                {item.designation}
                              </p>
                            </>
                          ))}
                        </div>
                        <Row
                          style={{
                            // justifyContent: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          {data.map((project, index) => {
                            return (
                              <Col md={4} className="project-card">
                                <ProjectCard
                                  category={project.category}
                                  title={project.title}
                                  description={project.description}
                                  technology={project.technology}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                        <div>
                          {company?.map((item) => (
                            <>
                              <h4>
                                {item[0]?.name}{" "}
                                <span style={{ paddingLeft: "540px" }}>
                                  {item[0]?.dateOfJoining} {item[0]?.str}{" "}
                                  {item[0]?.dateOfLeaving}
                                </span>
                              </h4>
                              <p
                                style={{
                                  paddingRight: "930px",
                                }}
                              >
                                {item[0]?.designation}
                              </p>
                            </>
                          ))}
                        </div>
                        <Row
                          style={{
                            // justifyContent: "center",
                            paddingBottom: "10px",
                          }}
                        >
                          {expirence.map((project, index) => {
                            return (
                              <Col md={4} className="project-card">
                                <ProjectCard
                                  category={project?.category}
                                  title={project?.title || ""}
                                  description={project?.description}
                                  technology={project?.technology}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
