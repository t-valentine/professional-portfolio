import React from "react";
import WindowComponent from "../window component/WindowComponent";
import "./About.css";
import TechnologyWindow from "./TechnologyWindow";

function About() {
  return (
    <div id="about-page" className="section">
      <div className="left-section">
        <h2 id="about-heading">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          cumque ullam maxime id velit animi doloremque consequatur ipsum
          officiis, beatae consectetur, provident asperiores fugit voluptatem
          reiciendis quae, ea saepe? Eligendi.
        </p>
      </div>
      <div className="right-section">
        <WindowComponent title="Technology" content={<TechnologyWindow />} />
      </div>
    </div>
  );
}

export default About;
