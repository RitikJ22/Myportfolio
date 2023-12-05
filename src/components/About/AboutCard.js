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
            I'm an experienced <span className="purple"> Front-End Engineer</span> with <span className="purple">2+ years</span> in creating dynamic and responsive user interfaces . 
            <br/>
            Proven expertise in translating design concepts into<span className="purple"> efficient</span>  and <span className="purple">high-performance</span> code.
        .
        <br/>
         Open to new <span className="purple">challenges</span> and <span className="purple">opportunities</span> for continuous learning and growth.

            <br />
            Additionally, I am currently employed as a <span className="purple">FrontEnd developer </span>at 
            <span className="purple"> TCS</span>.
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
