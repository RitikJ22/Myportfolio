import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hello, I'm <span className="purple">Ritik Jaiswal</span> from{" "}
        <span className="purple">Uttarakhand, India.</span>
        <br />
        As an experienced <span className="purple">Front-End Engineer</span> with <span className="purple">3 years</span> of expertise, I specialize in crafting dynamic and responsive user interfaces.
        <br />
        <br />
        My skills include translating design concepts into <span className="purple">efficient</span> and <span className="purple">high-performance</span> code, creating seamless and engaging user experiences.
        <br />
        <br />
        I am always open to new <span className="purple">challenges</span> and <span className="purple">opportunities</span> for continuous learning and growth.
        <br />
        <br />
       
      </p>
     
      <p style={{ color: "rgb(155 126 172)" }}>
        "Strive to build things that make a difference!"
      </p>
      <footer className="blockquote-footer">Ritik</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
