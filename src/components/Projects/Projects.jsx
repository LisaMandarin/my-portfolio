import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import charityPreview from "../../Assets/Projects/charity-preview.png";
import notePreview from "../../Assets/Projects/note-preview.png";
import handcraftedPreview from "../../Assets/Projects/handcrafted-preview.webp";
import note2Preview from "../../Assets/Projects/note2-preview.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charityPreview}
              isBlog={false}
              title="Charity Bridge"
              description="A platform built with React.js and Appwrite, enabling users to post, browse, and manage donation items. Features secure OAuth 2.0 login, responsive design, image uploads, and an internal messaging system. Built with Tailwind CSS and Ant Design."
              ghLink="https://github.com/LisaMandarin/Charity-Bridge"
              demoLink="https://charitybridge.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notePreview}
              isBlog={false}
              title="Note4English (React)"
              description="A React-based application for English-Chinese language learning, integrating multiple APIs for translation, note-taking, and PDF generation. Focused on user-friendly interface and seamless third-party service integration."
              ghLink="https://gitlab.com/LisaMandarin/note4english"
              demoLink="https://note4english.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handcraftedPreview}
              isBlog={false}
              title="Handcrafted Haven"
              description="A full-stack commercial web application built with Next.js. Users can browse products, manage profiles, and handle posts and purchase records. Integrates NextAuth.js, dynamic API routes, and a responsive UI."
              ghLink="https://github.com/LisaMandarin/handcrafted-haven"
              demoLink="https://handcrafted-haven-coral.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note2Preview}
              isBlog={false}
              title="Note4English (Vue)"
              description="A Vue-based language learning tool providing English-Chinese translation, example sentences, and PDF generation from learning materials. Integrates OCR, OpenAI, and Microsoft Translator APIs."
              ghLink="https://github.com/LisaMandarin/note4English"
              demoLink="https://note-4-english.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
