import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Govind Somani </span>
            from <span className="purple"> Makrana (Raj), India. Currently I am leaving in Indore (MP)</span>
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            <ImPointRight style={{marginRight: '5px'}}/>
              Playing Computer Games
            </li>
            <li className="about-activity">
            <ImPointRight style={{marginRight: '5px'}}/>
              Chess & Cricket
            </li>
            <li className="about-activity">
            <ImPointRight style={{marginRight: '5px'}}/>
              Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Govind</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
