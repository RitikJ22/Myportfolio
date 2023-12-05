import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ZIGFOOD from "../../Assets/ZIGFOOD.webp";
import METUBE from "../../Assets/Metube.png";
import ClickFlix from "../../Assets/CLICKFLIX.webp";
import ERLEADA from "../../Assets/Erleada.png";
import CARVYKTI from "../../Assets/CARVYKTI.png";
import CARVYKTI_HCP from "../../Assets/CARVYKTI_HCP.png";

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
              imgPath={ ZIGFOOD}
              isBlog={false}
              title="ZIGFOOD"
              description=""
              ghLink="/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={METUBE}
              isBlog={false}
              title="METUBE"
              description=""
              ghLink="/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClickFlix}
              isBlog={false}
              title="ClickFlix"
              description=""
              ghLink="/"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERLEADA}
              isBlog={false}
              title="ERLEADA"
              description=""
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ CARVYKTI}
              isBlog={false}
              title="CARVYKTI"
              description=""
              demoLink="/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ CARVYKTI_HCP}
              isBlog={false}
              title="CARVYKTI HCP"
              description=""
              demoLink="/"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
