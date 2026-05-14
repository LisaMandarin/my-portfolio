import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectsData } from "../../data/projects-data";

function Projects() {
  const [language, setLanguage] = useState("ENG");
  const isEnglish = language === "ENG";

  const toggleLanguage = () => {
    setLanguage(isEnglish ? "CH" : "ENG");
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-heading-wrapper">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <button
            type="button"
            className="about-language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle Projects language"
          >
            {isEnglish ? "EN → 中文" : "中文 → EN"}
          </button>
        </div>
        <p style={{ color: "white" }}>
          {isEnglish
            ? "Here are a few projects I've worked on recently."
            : "以下是我近期完成的幾個專案。"}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.image}
                isBlog={false}
                title={project.name}
                description={isEnglish ? project.overviewEn : project.overviewCh}
                techStack={project.techStack}
                ghLink={project.repoLink}
                demoLink={project.siteLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
