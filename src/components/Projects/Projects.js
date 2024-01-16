import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ZIGFOOD from "../../Assets/ZIGFOOD.webp";
import METUBE from "../../Assets/Metube.webp";
import ClickFlix from "../../Assets/CLICKFLIX.webp";
import ERLEADA from "../../Assets/Erleada.webp";
import CARVYKTI from "../../Assets/CARVYKTI.webp";
import TECVAYLI from "../../Assets/tecvyali.webp";
import TALVEY from "../../Assets/TalveyHcp.webp";
import TalkThatTalk from "../../Assets/talkthattalkpc.webp";

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
              imgPath={METUBE}
              isBlog={false}
              title="METUBE"
              description="METUBE is a  Video streaming platform build using React.js and Tailwind CSS framework with integration of Live Google API to get latest videos hosted on Youtube and their interactions data as well."
              ghLink="https://github.com/RitikJ22/Ibizotest"
              demoLink="https://ibizotest.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TalkThatTalk}
              isBlog={true}
              title="TALK-THAT-TALK"
              description="Talk That Talk is a movement created for men to learn about prostate cancer. This App is built for this cause using Next.js with Typescript and SCSS for styling UI."
              ghLink="https://www.talkthattalkpc.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERLEADA}
              isBlog={true}
              title="ERLEADA"
              description="Erleada is a web application for a product ERLEADA® apalutamide which is a prescription medicine used to treat prostate cancer. This Application is built on Next.js with typescript in combination with SCSS & GSAP for styling and animations."
              ghLink="https://www.erleada.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TALVEY}
              isBlog={true}
              title="TALVEY"
              description="TALVEY is a Web application for a product TALVEY™ which is a prescription medicine to treat adults with multiple myeloma. It's built using Next.js with Typescript and SCSS for styling UI. "
              ghLink="https://www.talvey.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CARVYKTI}
              isBlog={true}
              title="CARVYKTI"
              description="CARVYKTI is a Web application for a product CARVYKTI ® (ciltacabtagene autoleucel) which is a treatment used for adult patients who have cancer of the bone marrow.It's build using Next.js with Typescript and SCSS for styling UI"
              ghLink="https://www.carvykti.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TECVAYLI}
              isBlog={true}
              title="TECVAYLI"
              description="TECVAYLI® is a prescription medicine to treat adults with multiple myeloma . This Application is build for this product using Next.js and Typescript  with SCSS for styling UI."
              ghLink="https://www.tecvayli.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ZIGFOOD}
              isBlog={false}
              title="ZIGFOOD"
              description="ZIGFOOD is Food ordering web application. It's build using React.js and Tailwind CSS with the integration of Swiggy's Live public api to get live restaurant updates."
              ghLink="https://github.com/RitikJ22/NamasteReact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClickFlix}
              isBlog={true}
              title="ClickFlix"
              description="Working on a Netflix clone project  with intergation of CHATGPT API."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
