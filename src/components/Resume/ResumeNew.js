import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/minting0608/"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <FaLinkedinIn />
            &nbsp;View LinkedIn Profile
          </Button>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            paddingTop: "40px",
            color: "white",
            fontSize: "1.2em",
          }}
        >
          <p style={{ textAlign: "center" }}>
            Resume PDF coming soon. In the meantime, please visit my{" "}
            <a
              href="https://www.linkedin.com/in/minting0608/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#c084f5" }}
            >
              LinkedIn profile
            </a>
            .
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
