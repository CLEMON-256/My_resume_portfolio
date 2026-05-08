import React from "react";
import { AiOutlineArrowUp, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="header">Get In Touch</h1>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a href="mailto:jnyxmacon@gmail.com" className="email-link">
          <AiOutlineMail size={24} /> jnyxmacon@gmail.com
        </a>
      </div>
      <div className="back-to-top" onClick={scrollToTop}>
        <AiOutlineArrowUp size={30} color="orange" />
        <span>SCROLL TO TOP</span>
      </div>
      <p className="no-margin text-muted" style={{ fontSize: "0.8rem", marginTop: "20px" }}>
        © {new Date().getFullYear()} Yiga Junior. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;