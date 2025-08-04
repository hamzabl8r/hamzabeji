import React from "react";
import {
  FaExternalLinkAlt,
  FaCodeBranch,
  FaPalette,
  FaTools,
  FaLaptopCode,
  FaGithub,
} from "react-icons/fa";
import ca from "./assets/caa.gif";
import xo from "./assets/xo.gif";
import weather from "./assets/weather-icon-gif-14.jpg";
import todo from "./assets/todo.gif";

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of my recent projects. Click to view a live demo.
        </p>
        <div className="projects-categories">
          <div className="card project-category-card">
            <FaLaptopCode />
            <h4>Frontend</h4>
            <p>React, JavaScript, HTML, CSS</p>
          </div>
          <div className="card project-category-card">
            <FaCodeBranch />
            <h4>Backend</h4>
            <p>Node.js, Express.js, MongoDB</p>
          </div>
          <div className="card project-category-card">
            <FaTools />
            <h4>Tools</h4>
            <p>Git, VS Code</p>
          </div>
        </div>
        <div className="projects-grid">
          <div className="card project-card">
            <img src={ca} alt="Calculator App" className="project-card-image" />
            <div className="project-card-content">
              <div className="project-card-tags">
                <span className="project-card-tag">JavaScript</span>
                <span className="project-card-tag">HTML</span>
                <span className="project-card-tag">CSS</span>
              </div>
              <h3>Calculator</h3>
              <p>
                A simple yet functional calculator web application. Built with
                vanilla JavaScript, HTML, and CSS.
              </p>
              <div className="project-card-links">
                <a
                  href="https://calculator-pi-virid-30.vercel.app/"
                  className="project-card-link">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/hamzabl8r/Calculator"
                  className="project-card-link">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="card project-card">
            <img src={xo} alt="X-O Game" className="project-card-image" />
            <div className="project-card-content">
              <div className="project-card-tags">
                <span className="project-card-tag">JavaScript</span>
                <span className="project-card-tag">HTML</span>
                <span className="project-card-tag">CSS</span>
              </div>
              <h3>X-O Game</h3>
              <p>
                An interactive Tic-Tac-Toe game created with JavaScript. Enjoy a
                classic game with a clean UI.
              </p>
              <div className="project-card-links">
                <a
                  href="https://x-o-game-three.vercel.app/"
                  className="project-card-link">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/hamzabl8r/X-O-Game"
                  className="project-card-link">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="card project-card">
            <img
              src={weather}
              alt="Weather App"
              className="project-card-image"
            />
            <div className="project-card-content">
              <div className="project-card-tags">
                <span className="project-card-tag">React.js</span>
                <span className="project-card-tag">Axios</span>
                <span className="project-card-tag">CSS</span>
              </div>
              <h3>Weather App</h3>
              <p>
                A simple yet effective weather application that allows users to
                search for a city and view its current weather details,
                including temperature, humidity, and wind speed. Built with
                React.js and Axios for seamless API integration.
              </p>
              <div className="project-card-links">
                <a
                  href="https://weather-app-navy-five-77.vercel.app/"
                  className="project-card-link">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/hamzabl8r/Weather-App"
                  className="project-card-link">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="card project-card">
            <img
              src={todo}
              alt="Redux Toolkit App"
              className="project-card-image"
            />
            <div className="project-card-content">
              <div className="project-card-tags">
                <span className="project-card-tag">React.js</span>
                <span className="project-card-tag">Redux Toolkit</span>
              </div>
              <h3>TODO App</h3>
              <p>
                An intuitive to-do list application built with React. It
                demonstrates core concepts like state management and
                component-based architecture to allow users to add, track, and
                manage their daily tasks efficiently.
              </p>
              <div className="project-card-links">
                <a
                  href="https://redux-bice-one.vercel.app/"
                  className="project-card-link">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/hamzabl8r/Redux"
                  className="project-card-link">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="card project-card">
            <img src="/A8.png" alt="Portfolio Website" className="project-card-image" />
            <div className="project-card-content">
              <div className="project-card-tags">
                <span className="project-card-tag">React</span>
                <span className="project-card-tag">Pure CSS</span>
              </div>
              <h3>Portfolio Website</h3>
              <p>My personal portfolio website, designed and built to showcase my skills and projects.</p>
              <div className="project-card-links">
                <a href="#" className="project-card-link">
                  Live Demo <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        {/* <a href="#" className="btn btn-primary view-more-btn b">View More Projects</a> */}
      </div>
    </section>
  );
};

export default Projects;
