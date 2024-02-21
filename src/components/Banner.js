import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useNavigate } from "react-router-dom";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Enginnering", "Team Leader"];
  const period = 2000;
  const navigate = useNavigate();

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     // tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

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
          <Col xs={12} md={10} xl={7}>
            {/* <TrackVisibility> */}
            {/* {({ isVisible }) => ( */}
            <div
              // className={
              //   isVisible ? "animate__animated animate__fadeIn" : ""
              // }
              className="roles"
            >
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hey there! I'm Govind Somani `}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Sr. Software Enginnering", "Team Leader" ]'
                >
                  {/* <span className="wrap">{text}</span> */}
                </span>
              </h1>
              <p style={{ fontFamily: "Poppins" }}>
                A skilled Software Developer with more than three years of
                experience in creating and designing web applications. My
                expertise lies in React JS and its related technologies. I'm
                really good at building responsive web pages using frameworks
                like MUI and Bootstrap.
                <br />
                <br />
                I'm not just limited to that though! I'm also great at
                understanding and implementing complex technical concepts
                efficiently, ensuring that tasks are delivered on time while
                maintaining high-quality standards. I have a proven track record
                of integrating third-party libraries, such as CashFree and
                Stripe payment gateway, and working closely with my team to
                quickly identify and fix software bugs.
                <br />
                <br />
                In terms of education, I hold a Master's degree in Computer
                Applications from Medicaps University Indore, which has provided
                me with a solid foundation to excel in the field of software
                development.
                <br />
                <br />
                Here are some of my key skills: React JS Development, Web
                Application Design, Responsive Web Development, Frameworks like
                MUI and Bootstrap, Third-Party Library Integration, Frontend
                Development, API Integration, Unit Testing, Node JS, Express,
                Mongo DB, and MySQL.
                <br />
                <br />
                When it comes to version control, I'm familiar with BitBucket,
                GitLab, and GitHub.
              </p>
              {/* <button onClick={() => handleContact()}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button> */}
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/govind-somani"
                  target={"_blank"}
                  rel="noreferrer"
                  title="Visit LinkedIn Profile"
                >
                  {" "}
                  <img src={navIcon1} alt="" />
                </a>
              </div>
            </div>
            {/* )} */}
            {/* </TrackVisibility> */}
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
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
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};
