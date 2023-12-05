import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritik Jaiswal </span>
            from <span className="purple"> Uttarakhand, India.</span>
            <br /> 
            I'm an experienced Front-End Engineer with 2+ years in creating dynamic and responsive user interfaces . Proven expertise in translating design concepts into efficient and high-performance code. Adept at collaborating with cross-functional teams to deliver exceptional user experiences. Passionate about staying abreast of emerging technologies and implementing best practices for web development. Open to new challenges and opportunities for continuous learning and growth.

            <br />
            Additionally, I am currently employed as a FrontEnd developer at
            TCS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Powerlifting
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ritik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
