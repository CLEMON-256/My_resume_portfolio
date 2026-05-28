import "./Experience.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  const projectList = [
    {
      title: "Network Vulnerability Scanner",
      description: "Built a Python + Nmap security scanner that automated audits and reduced testing time by  60% .",
      tech: ["Python", "Nmap", "Linux"],
      link: "https://github.com/CLEMON-256",
    },
    {
      title: "Portfolio Website",
      description: "Built and deployed a React portfolio website achieving  performance score and  mobile responsiveness 100%.",
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
          <AiFillGithub size={25} /> Browse my GitHub https://github.com/CLEMON-256 for more
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