import "./Profile.css";
import image from "./ham.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Profile = () => {
  return (
    <div className="section">
      <div className="bio">
        <p className="no-margin small-text">Hello</p>
        <p className="no-margin name-text">
          I'm <span className="highlight-text">Yiga Junior</span>
        </p>
        <p className="no-margin small-text">
          AI software engineer <span className="highlight-text">and</span> CyberSecurity Enthusiast
        </p>
        <div className="icons">
          <a href="https://www.instagram.com/">
            <AiFillInstagram color="orange" size={30} />
          </a>
          <a href="https://github.com/CLEMON-256">
            <AiFillGithub color="orange" size={30} />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <AiFillLinkedin color="orange" size={30} />
          </a>
        </div>
      </div>
      <div className="photo">
        <img src={image} className="profile-image" alt="me" />
      </div>
    </div>
  );
};

export default Profile;
