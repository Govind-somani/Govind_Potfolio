import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";

export const ProjectCard = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Card md={4} className="project-card-view">
      <Card.Body>
        <Card.Header>
          {" "}
          <Card.Title style={{ textAlign: "inherit" }}>
            Project Category:- {props.category}
          </Card.Title>
        </Card.Header>
        <Card.Header>
          {" "}
          {props.title ? (
            <Card.Title style={{ textAlign: "inherit" }}>
              Project Title:- {props.title || ""}
            </Card.Title>
          ) : (
            ""
          )}
        </Card.Header>
        <Card.Header>
          {" "}
          <Card.Text style={{ textAlign: "inherit" }}>
            <Card.Title> Technology:- </Card.Title>
            {props.technology}
          </Card.Text>
        </Card.Header>

        <Card.Header>
          <Card.Text style={{ textAlign: "initial" }}>
            <Card.Title> Description:- </Card.Title>{" "}
            {isReadMore ? props.description.slice(0, 150) : props.description}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </Card.Text>
        </Card.Header>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
};
