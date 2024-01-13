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
              description="METUBE is a  Video streaming platform build using React.js with Tailwind CSS framework with integration of Live YOUTUBE API."
              ghLink="https://github.com/RitikJ22/Ibizotest"
              demoLink="https://ibizotest.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TalkThatTalk}
              isBlog={false}
              title="TALK-THAT-TALK"
              description="Talk That Talk is a movement created for men to learn about prostate cancer. This App is built for this cause using Next.js with Typescript and SASS."
              ghLink={false}
              demoLink="https://www.talkthattalkpc.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERLEADA}
              isBlog={false}
              title="ERLEADA"
              description="Erleada is a web application for a product ERLEADA® apalutamide which is a prescription medicine used to treat prostate cancer. This Application is built on Next.js with typescript in combination with SASS & GSAP"
              ghLink={false}
              demoLink="https://www.erleada.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TALVEY}
              isBlog={false}
              title="TALVEY"
              description="TALVEY is a Web application for a product TALVEY™ which is a prescription medicine to treat adults with multiple myeloma. It's built using Next.js with Typescript and SASS. "
              ghLink={false}
              demoLink="https://www.talvey.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CARVYKTI}
              isBlog={false}
              title="CARVYKTI"
              description="CARVYKTI is a Web application for a product CARVYKTI ® (ciltacabtagene autoleucel) which is a treatment used for adult patients who have cancer of the bone marrow.It's build using Next.js with Typescript and Sass"
              ghLink={false}
              demoLink="https://www.carvykti.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TECVAYLI}
              isBlog={false}
              title="TECVAYLI"
              description="TECVAYLI® is a prescription medicine to treat adults with multiple myeloma . This Application is build for this product using Next.js with Typescript and with Sass ."
              ghLink={false}
              demoLink="https://www.tecvayli.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ZIGFOOD}
              isBlog={false}
              title="ZIGFOOD"
              description="ZIGFOOD is a web application for ordering food. It's build using React.js with Tailwind CSS with the integration of Swiggy's Live public api."
              ghLink="https://github.com/RitikJ22/NamasteReact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClickFlix}
              isBlog={false}
              title="ClickFlix"
              description="Working on a Netflix clone project  with intergation of CHATGPT API."
              ghLink={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
