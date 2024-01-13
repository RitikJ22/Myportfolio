import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm passionate about crafting exceptional user
              experiences through intuitive design, bringing forth seamless and
              engaging web solutions. 🚀
              <br />
              <br />
              In the realm of web development, I am well-versed in classics like
              <i>
                <b className="purple"> JavaScript, React.js, and Next.js</b>
              </i>
              .
              <br />
              <br />
              My primary focus lies in building
              <i>
                <b className="purple"> web apps and products</b>
              </i>
              , with a keen interest in various aspects of
              <i>
                <b className="purple"> Full Stack Development</b>
              </i>
              .
              <br />
              <br />I thrive on turning ideas into reality, leveraging the power
              of
              <b className="purple"> React.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern CSS libraries and frameworks like Tailwind and MUI
                </b>
              </i>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar d-none d-md-block">
            <Tilt>
              <img src={myImg} className="img-fluid radius" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RitikJ22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/RitikJa62967785"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/ritik-jaiswal-36a735153"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
