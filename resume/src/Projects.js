import "./Experience.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  const projectList = [
    {
      title: "Network Vulnerability Scanner",
      description: "A Python-based tool designed to automate security audits and identify open ports and services.",
      tech: ["Python", "Nmap", "Linux"],
      link: "https://github.com/CLEMON-256",
    },
    {
      title: "Portfolio Website",
      description: "A responsive resume website built with React to showcase software engineering and hacking projects.",
      tech: ["React.js", "JavaScript", "CSS"],
      link: "https://github.com/CLEMON-256",
    },
  ];

  return (
    <div className="experience">
      <h1 className="header">Projects</h1>
      <div style={{ marginBottom: "20px" }}>
        <a
          href="https://github.com/CLEMON-256"
          target="_blank"
          rel="noreferrer"
          style={{ color: "orange", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontWeight: "bold" }}
        >
          <AiFillGithub size={25} /> Browse my GitHub for more
        </a>
      </div>
      <div className="work-items">
        {projectList.map((project) => (
          <div className="item" key={project.title}>
            <div className="item-content">
              <div className="item-header">
                <h2 className="no-margin">{project.title}</h2>
                <a href={project.link} target="_blank" rel="noreferrer" style={{ color: "orange", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
                  <AiOutlineLink /> View Source
                </a>
              </div>
              <p className="no-margin">{project.description}</p>
              <ul className="points">
                {project.tech.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;