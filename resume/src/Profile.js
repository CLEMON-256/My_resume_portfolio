import "./Profile.css";
import image from "./ham.png";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
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
           AI software engineer <span className="highlight-text">and</span> hacker
        </p>
        <div className="icons">
          <a href="https://youtube.com/techwithjunior">
            <AiFillYoutube color="orange" size={30} />
          </a>
          <a href="https://github.com/CLEMON-256">
            <AiFillGithub color="orange" size={30} />
          </a>
          <a href="https://linkedin.com/in/techwithjunior">
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
