import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Min-ting Chuang</span>{" "}
            from <span className="purple">Taiwan</span>.
            <br />
            I'm currently a{" "}
            <span className="purple">Full-stack Developer and AI Engineer</span> actively
            seeking opportunities in web development.
            <br />
            I hold an{" "}
            <span className="purple">Bachelor's Degree in Software Development</span>{" "}
            from{" "}
            <span className="purple">Brigham Young University–Idaho</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Language Teaching & Cross-cultural Communication 🌏
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Language Learning Apps ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you fail to plan, you are planning to fail!"{" "}
          </p>
          <footer className="blockquote-footer">Min-ting</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
