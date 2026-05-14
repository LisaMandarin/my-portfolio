import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { techIconMap } from "../../data/projects-data";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.techStack?.length > 0 && (
          <div className="project-tech-list" aria-label={`${props.title} tech stack`}>
            {props.techStack.map((tech) => (
              <span className="project-tech-pill" key={tech}>
                <Icon
                  icon={techIconMap[tech] || "mdi:code-tags"}
                  className="project-tech-icon"
                  aria-hidden="true"
                />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        )}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
