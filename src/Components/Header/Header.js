import React from "react";
import Typical from "react-typical";
import profile from "../../assets/profile.png";
import "./Header.css";
import github from "../../assets/github.png";
import linekdin from "../../assets/linkedin.png";
import email from "../../assets/email.png";


const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h2>Welcome To My World!</h2>
        <h1>Hy! I am</h1>
        <h2 className="fullname">Sarita Sharma.....</h2>
        <h2 className="developer">
         <span>I'm a {""} </span> 
          <Typical
            steps={[
              "Full Stack Web Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,
              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        
        <p>
        Explore my portfolio today and let's build something extraordinary together!
        <br />
        Ready to see what I've been crafting?
        </p>
        
        <div className="header-payment-container">
          <a href="#contactMe"> <button>Hire Me</button> </a>
          <a href="https://drive.google.com/file/d/1anNxIVBP3qytsCoGicZ5fh9tdytgpuVf/view?usp=sharing"> <button>Download CV</button> </a>
        </div>

         {/* Social Icons */}
         <div className="with-me">
            <h2>Find Me</h2>
            <div className="social-media">
                <div className="bg-icon">
                    <a href="https://github.com/Sarita008">  <img src={github} alt="" /> </a>
                    <span></span>
                </div>

                <div className="bg-icon">
                <a href="https://www.linkedin.com/in/sarita-sharma-94a929233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">   <img src={linekdin} alt="" /> </a>
                    <span></span>
                </div>

                <div className="bg-icon">
                <a href=" mailto: saritasharma8201@gmail.com">   <img src={email} alt="" /> </a>
                    <span></span>
                </div>
            </div>
            </div>
      </div>

           

      {/* Image container */}
      <div className="profile-img-container">
        <img src={profile} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;

