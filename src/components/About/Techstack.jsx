import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { techIconMap } from "../../data/projects-data";

const techStack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Ant Design",
  "Flutter",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Docker",
  "Git",
  "Postman",
  "Swagger",
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech) => (
        <Col xs={4} md={2} className="tech-icons" key={tech}>
          <Icon
            icon={techIconMap[tech] || "mdi:code-tags"}
            className="tech-icon-images"
            aria-hidden="true"
          />
          <div className="tech-icons-text">{tech}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
