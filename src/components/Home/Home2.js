import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my-photo.webp";
import Tilt from "react-parallax-tilt";
import { aboutContent } from "../../data/content";

function Home2() {
  const [language, setLanguage] = useState("ENG");
  const isEnglish = language === "ENG";
  const intro = isEnglish ? aboutContent.introENG : aboutContent.introCH;
  const summary = isEnglish ? aboutContent.summaryENG : aboutContent.summaryCH;

  const toggleLanguage = () => {
    setLanguage(isEnglish ? "CH" : "ENG");
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div className="home-about-heading">
              <h1>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <button
                type="button"
                className="about-language-toggle"
                onClick={toggleLanguage}
                aria-label="Toggle About Me language"
              >
                {isEnglish ? "中文" : "EN"}
              </button>
            </div>
            <p className="home-about-body">
              {intro}
            </p>
            <ul className="home-about-summary">
              {summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
