import "./Experience.css";

const Experience = () => {
  const items = [
    {
      title: "AI Software Engineer & Ethical Hacker",
      company: "Tech With Junior",
      description: "Developing and auditing secure AI-driven software solutions, integrating machine learning models for automated threat detection and system performance optimization.",
      date: "Jan 2023 - Present",
      points: [],
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQXx-JXf1NsSUtVHcYhx4B4MaIYE0m7I_H0GHmu-w=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "AI Software Engineer",
      company: "Open Source Contributor",
      description: "Enhancing VSCode Python extension by implementing AI-powered code analysis features and machine learning workflows while maintaining secure coding practices.",
      date: "Jun 2022 - Dec 2022",
      points: [],
      image:
        "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_960_720.png",
    },
  ];

  return (
    <div className="experience">
      <h1 className="header">Work Experience</h1>
      <div className="work-items">
        {items.map((item) => (
          <div className="item" key={`${item.company}-${item.title}`}>
            <img src={item.image} alt="logo" className="logo" />
            <div className="item-content">
              <div className="item-header">
                <h2 className="no-margin">{item.title}</h2>
                <h4 className="no-margin">{item.company}</h4>
                <p className="no-margin text-muted">{item.date}</p>
              </div>
              <p className="no-margin">{item.description}</p>
              <ul className="points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;