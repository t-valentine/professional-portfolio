import React from "react";
import "./About.css";
import DotNetLogo from "../../assets/tech-icons/icons8-.net-framework-100.png";
import AgileLogo from "../../assets/tech-icons/icons8-agile-100.png";
import GitLogo from "../../assets/tech-icons/icons8-git-100.png";
import CSharpLogo from "../../assets/tech-icons/icons8-c-100.png";
import PythonLogo from "../../assets/tech-icons/icons8-python-100.png";
import ReactLogo from "../../assets/tech-icons/icons8-react-100.png";
import HTMLLogo from "../../assets/tech-icons/icons8-html-100.png";
import CSSLogo from "../../assets/tech-icons/icons8-css3-100.png";
import JavascriptLogo from "../../assets/tech-icons/icons8-javascript-100.png";
import PostgreLogo from "../../assets/tech-icons/icons8-postgresql-100.png";
import PowerAppsLogo from "../../assets/tech-icons/icons8-power-apps-100.png";
import PAutomateLogo from "../../assets/tech-icons/icons8-microsoft-power-automate-2020-100.png";
import PBiLogo from "../../assets/tech-icons/icons8-power-bi-2021-100.png";

function About() {
  return (
    <div id="about-page" className="section">
      <div id="about-section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          cumque ullam maxime id velit animi doloremque consequatur ipsum
          officiis, beatae consectetur, provident asperiores fugit voluptatem
          reiciendis quae, ea saepe? Eligendi.
        </p>
      </div>
      <div id="tech-section">
        <h2>Technologies</h2>
        <div id="tech-list">
          <img src={DotNetLogo} alt="dot net logo" className="grid-item"></img>
          <img src={AgileLogo} alt="agile logo" className="grid-item"></img>
          <img src={GitLogo} alt="git logo" className="grid-item"></img>
          <img src={CSharpLogo} alt="c# logo" className="grid-item"></img>
          <img src={PythonLogo} alt="python logo" className="grid-item"></img>
          <img src={ReactLogo} alt="react logo" className="grid-item"></img>
          <img src={HTMLLogo} alt="html logo" className="grid-item"></img>
          <img src={CSSLogo} alt="css logo" className="grid-item"></img>
          <img
            src={JavascriptLogo}
            alt="javascript logo"
            className="grid-item"
          ></img>
          <img
            src={PostgreLogo}
            alt="postgreSQL logo"
            className="grid-item"
          ></img>
          <img
            src={PowerAppsLogo}
            alt="power apps logo"
            className="grid-item"
          ></img>
          <img
            src={PAutomateLogo}
            alt="power automate logo"
            className="grid-item"
          ></img>
          <img src={PBiLogo} alt="power bi logo" className="grid-item"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
