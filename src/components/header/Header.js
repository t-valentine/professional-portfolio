import "./Header.css";

function Header() {
  return (
    <div id="header-page" className="section">
      <h1>Hello World</h1>
      <h2>My name is Tobi, I'm a developer</h2>
      <div>
        <a href="#about-page" className="nav-link">
          Learn More About Me
        </a>
        <a href="#projects-page" className="nav-link">
          What I've Worked On
        </a>
        <a href="#contact-page" className="nav-link">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Header;
