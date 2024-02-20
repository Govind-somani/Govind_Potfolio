import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Enginnering", "Team Leader"];
  const period = 2000;
  const navigate = useNavigate();

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Govind `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Sr. Software Enginnering", "Team Leader" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p style={{ fontFamily: "Poppins" }}>
                    My name is Govind Somani, and I am an experienced Software
                    Developer with over three years of expertise in designing
                    and developing web applications. My specialization lies in
                    React JS and related technologies. I excel in crafting
                    responsive web pages, leveraging frameworks such as MUI and
                    Bootstrap.
                    <br />
                    <br />
                    My skill set extends to understanding and implementing
                    complex technical concepts efficiently, ensuring the timely
                    delivery of tasks while upholding high-quality standards. I
                    have a proven track record of integrating third-party
                    libraries, including the CashFree and Stripe payment
                    gateway, and adeptly collaborating with team members to
                    identify and resolve software bugs promptly.
                    <br />
                    <br />
                    My educational background includes a Master's in Computer
                    Applications from Medicaps University Indore, providing me
                    with a strong foundation to excel in the field of software
                    development.
                    <br />
                    <br />
                    <b>Key Skill-</b> React JS Development, Web Application
                    Design, Responsive Web Development, Frameworks: MUI,
                    Bootstrap, Third-Party Library Integration, Frontend
                    Development, API Integration, Unit Testing, Node JS,
                    Express, Mongo DB, MySQL.
                    <br />
                    <br />
                    <b>Version Control-</b> BitBucket, GitLab and GitHub.
                  </p>
                  <button onClick={() => handleContact()}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
