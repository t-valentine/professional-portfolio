import WindowComponent from "../window component/WindowComponent";
import "./About.css";
import DotNetLogo from "../../assets/tech-icons/icons8-.net-framework-100.png";
import AgileLogo from "../../assets/tech-icons/icons8-agile-100.png";
import GitLogo from "../../assets/tech-icons/icons8-git-100.png";

function About() {
  var React = require("react");
  var Packery = require("react-packery-component")(React);

  var packeryOptions = {
    transitionDuration: 0,
  };

  return (
    <div id="about-page">
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
        <WindowComponent
          title="Technology"
          content={
            <>
              <Packery
                className={"my-gallery-class"} // default ''
                elementType={"ul"} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
              >
                <img
                  src={DotNetLogo}
                  alt="dot net logo"
                  className="grid-item"
                ></img>
                <img
                  src={AgileLogo}
                  alt="agile logo"
                  className="grid-item"
                ></img>
                <img src={GitLogo} alt="git logo" className="grid-item"></img>
                <img src={AgileLogo} alt="c# logo" className="grid-item"></img>
                <img
                  src={AgileLogo}
                  alt="python logo"
                  className="grid-item"
                ></img>
                <img
                  src={AgileLogo}
                  alt="react logo"
                  className="grid-item"
                ></img>
                <img
                  src={AgileLogo}
                  alt="html logo"
                  className="grid-item"
                ></img>
                <img src={AgileLogo} alt="css logo" className="grid-item"></img>
                <img
                  src={AgileLogo}
                  alt="javascript logo"
                  className="grid-item"
                ></img>
                <img
                  src={AgileLogo}
                  alt="power apps logo"
                  className="grid-item"
                ></img>
                <img
                  src={AgileLogo}
                  alt="power automate logo"
                  className="grid-item"
                ></img>
                <img
                  src={AgileLogo}
                  alt="power bi logo"
                  className="grid-item"
                ></img>
              </Packery>
            </>
          }
        />
      </div>
    </div>
  );
}

export default About;
