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
import TALVEY_HCP from "../../Assets/TalveyHcp.png";
import  DOCSUMO from "../../Assets/Docsumo.png";
import REMOTLINK from "../../Assets/Remotlink.png";

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
              description="METUBE is a optimmized Video streaming platform build using React and Tailwind CSS framework with integration of YOUTUBE API."
              ghLink="https://github.com/RitikJ22/Ibizotest"
              demoLink="https://ibizotest.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERLEADA}
              isBlog={false}
              title="ERLEADA"
              description="Erleada is a web application for a product ERLEADA® which is a prescription medicine used to treat  prostate cancer. It's build using Next.js with Sass."
              ghLink={false}
              demoLink="https://www.erleada.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ ZIGFOOD}
              isBlog={false}
              title="ZIGFOOD"
              description="ZIGFOOD is a optimized Frontend food ordering web app build using React with Tailwind with the integration of Swiggy's public api."
              ghLink="https://github.com/RitikJ22/NamasteReact"
              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClickFlix}
              isBlog={false}
              title="ClickFlix"
              description="Comming Soon..."
              ghLink={false}
                            
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ CARVYKTI}
              isBlog={false}
              title="CARVYKTI"
              description="CARVYKTI is a Web application for a product CARVYKTI ® (ciltacabtagene autoleucel) which is a treatment used for adult patients who have cancer of the bone marrow.It's build using Next.js with Sass"
              ghLink={false}
              demoLink="https://www.carvykti.com/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ CARVYKTI_HCP}
              isBlog={false}
              title="CARVYKTI HCP"
              description="CARVYKTI is a Web application for a product CAR-T therapy for the treatment of adult patients with relapsed or refractory multiple myeloma. It's build using Next.js with Sass ."
              ghLink={false}
              demoLink="https://www.carvyktihcp.com/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ TALVEY_HCP}
              isBlog={false}
              title="TALVEY HCP"
              description="TALVEY HCP is a Web application for a product TALVEY Medicine built using Next.js and SASS. "
              ghLink={false}
              demoLink="https://www.talveyhcp.com/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ REMOTLINK}
              isBlog={false}
              title="REMOTLINK"
              description="Remotlink is a Web app used to manage resources and catalouges for universities which is built using React with Tailwind . "
              ghLink="https://github.com/RitikJ22/Remotlink-UI"
              demoLink="https://remotlink-ui.vercel.app/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ DOCSUMO}
              isBlog={false}
              title="DOCSUMO"
              description="DOCSUMO is project built on Next.js and Tailwind for Product Docsumo which is a Document AI Platform Built for Scale & Efficiency"
              ghLink="https://github.com/RitikJ22/Docsumo-test"
              demoLink="https://docsumo-test.vercel.app/"
              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
