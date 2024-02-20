import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import AboutCard from "./AboutCard";
import laptopImg from "../../assets/img/about.png";
import Toolstack from "./Toolstack";
import { ImPointRight } from "react-icons/im";
import Response from "../../Services/response.json";

const About = () => {
  const [about, setAbout] = useState([]);
  const [roles, setRoles] = useState([]);
  // console.log("response ", Response.data.workExperence.project);
  useEffect(() => {
    setAbout(Response.data.workExperence.achievement);
    setRoles(Response.data.workExperence.responsibilities);
  }, []);
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <div>
          <h2>Roles and Responsilbilities</h2>
          <ul className="roles">
            {roles.map((responsibility, index) => (
              <div key={index} >
                <ImPointRight style={{marginRight: '5px'}}/>
                 <span >{responsibility}</span>
              </div>
            ))}
          </ul>
        </div>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Col>
          <h1 className="project-heading">
            Achievements
            {/* <strong className="purple">Skillset </strong> */}
          </h1>

          <ul>
            {about.map((element) => {
              // console.log(element.description);
              return (
                <li className="about-activity">
                <ImPointRight style={{marginRight: '5px'}}/>
                  {element.description}
                </li>
              );
            })}
          </ul>
        </Col>
        <br />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
};

export default About;
