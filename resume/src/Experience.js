import "./Experience.css";

const Experience = () => {
  const items = [
    {
      title: "AI Software Engineer & Ethical Hacker",
      company: "CyberTech Solutions",
      date: "2024 - 2025",
      description:
        "Developed and audited AI-driven software solutions, reducing security vulnerabilities by 35% through automated threat detection systems.",
      points: [
        "Performed vulnerability assessments and penetration tests, identifying security issues and reducing exposure.",
        "Implemented automated threat detection systems to improve security posture.",
      ],
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQXx-JXf1NsSUtVHcYhx4B4MaIYE0m7I_H0GHmu-w=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "AI Software Engineer",
      company: "VSCode AI Labs",
      date: "2022 - 2024",
      description:
        "Enhanced VSCode Python workflows by integrating AI-powered code analysis, improving debugging speed by 40% for developers.",
      points: [
        "Integrated AI-powered code analysis into Visual Studio Code workflows, improving debugging efficiency.",
        "Built ML workflows that reduced development time by 24%.",
      ],
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