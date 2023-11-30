import Header from "./components/header/Header.js";
import About from "./components/about/About.js";
import Project from "./components/projects/Projects.js";
import Contact from "./components/contact/Contact.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header className="section" />
      <About className="section" />
      <Project className="section" />
      <Contact className="section" />
    </div>
  );
}
