import "./Experience.css";
import { 
  AiOutlineRobot, 
  AiOutlineCode, 
  AiOutlineSecurityScan, 
  AiOutlineSetting 
} from "react-icons/ai";

const Skills = () => {
  const skillCategories = [
    {
      category: "AI Software Engineering",
      icon: <AiOutlineRobot color="orange" size={25} />,
      skills: [
        "Machine Learning & computer Vision",
        "Natural Language Processing (NLP)",
        "TensorFlow & PyTorch",
        "OpenAI API & LLM Integration",
        "React.js",
        "React Native",
        "Django",
        "CloudComputing"
      ],
    },
    {
      category: "Programming Languages",
      icon: <AiOutlineCode color="orange" size={25} />,
      skills: [
        "Python",
        "JavaScript (ES6+)",
        "TypeScript",
        "Kotlin",
        "C#",
        "HTML5 & CSS3",
        "SQL"
        
      ],
    },
    {
      category: "Ethical Hacking",
      icon: <AiOutlineSecurityScan color="orange" size={25} />,
      skills: ["Penetration Testing", "Network Security", "Vulnerability Assessment", "Nmap", "Linux (Kali/Ubuntu)", "Bug Bounty"],
    },
    {
      category: "Tools & DevOps",
      icon: <AiOutlineSetting color="orange" size={25} />,
      skills: ["Git & GitHub", "Google Colab", "VS Code ", "Data Wrangler", "windsurf",
        "Antigravity","Gitlab","Godot Game Engine","Android Studio","Ethical Hacking Tools","AWS&RENDER"
        
      ],
    },
  ];

  return (
    <div className="experience">
      <h1 className="header">Technical Skills</h1>
      <div className="work-items" style={{ width: "100%", maxWidth: "800px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px" }}>
          {skillCategories.map((cat) => (
            <div key={cat.category} style={{ flex: "1 1 250px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                {cat.icon}
                <h3 style={{ color: "orange", margin: 0 }}>{cat.category}</h3>
              </div>
              <ul className="points">
                {cat.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;