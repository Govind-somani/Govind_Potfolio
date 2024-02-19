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
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    console.log("response ", Response.data.workExperence.company);
    // setData(Response.data.workExperence.company.projects);
    // setCompany(Response.data.workExperence.company);
    // setExpirence(Response.data.workExperence.project1);
    setProjects(Response.data.workExperence.company);
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
                          {projects.map((item) => (
                            <div key={item.id}>
                              <h4>
                                {item.name}{" "}
                                <span style={{ paddingLeft: "380px" }}>
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
                              <Row
                                style={{
                                  paddingBottom: "10px",
                                }}
                              >
                                {item.projects.map((filteredProject, index) => (
                                  <Col
                                    md={4}
                                    className="project-card"
                                    key={index}
                                  >
                                    <ProjectCard
                                      category={filteredProject.category}
                                      title={filteredProject.title || ""}
                                      description={filteredProject.description}
                                      technology={filteredProject.technology}
                                    />
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          ))}
                        </div>
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
