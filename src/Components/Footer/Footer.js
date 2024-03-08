import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
import github from "../../assets/github.png";
import linekdin from "../../assets/linkedin.png";
import email from "../../assets/email.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2024 Sarita Sharma. All Right reserved</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
        <a href="https://github.com/Sarita008">  <img src={github} alt="" /> </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/sarita-sharma-94a929233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">     <img src={linekdin} alt="" /> </a>
        </li>
        <li>
        <a href=" mailto: saritasharma8201@gmail.com">    <img src={email} alt="" /> </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
