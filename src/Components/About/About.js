import React, { useState } from 'react'
import img from "../../assets/profile-pic.png";
import "./About.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import nodejs from "../../assets/nodejs.webp";
import expressjs from "../../assets/express-js.png";
import mongodb from "../../assets/mongodb.jpg";
import reatcjs from "../../assets/reactjs.jpg";
import ejs from "../../assets/ejs.gif";
import tailwindcss from "../../assets/tailwindCss.jpg";
import java from "../../assets/java.png";
import certificate from "../../assets/certificate.jpg";


const About = () => {

const [category, setCategory]=useState("Skill");

const onclickSkill = function(){
    setCategory("Skill");
};
const onclickEducation = function(){
    setCategory("Education");
};
const onclickCertificate = function(){
    setCategory("Certificate");
};


  return (
    <div id='aboutMe' className='About-container'>
      <div className='About-content'>
        <h1>About Me</h1>
      </div>
      <div className='ContainerAbt'>
      <div className='ImageAb'>
      <div className="about-img">
        <img src={img} alt="" className='img'/>
        <div className="intro">
          <p><span className="title-s">Name : </span> <span className='title-p'>Sarita Sharma</span></p>
          <p><span className="title-s">Job Role : </span> <span className='title-p'>MERN Stack Web Developer</span></p>
          <p><span className="title-s">Address : </span> <span className='title-p'>Jewar, UP</span></p>
        </div>
      </div>

      <div className="skill-mf">
        <p className="title-ss">Skills</p>
        <span className='pull'>HTML </span> <span className="pull-right">100%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"100%"}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        
        <span className='pull'>CSS</span> <span className="pull-right">100%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"100%"}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </div>

        <span className='pull'>JavaScript</span> <span className="pull-right">85%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"85%"}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        
        <span className='pull'>Node.js</span> <span className="pull-right">90%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        
        <span className='pull'>Express.js</span> <span className="pull-right">90%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>

        <span className='pull'>Ejs</span> <span className="pull-right">90%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        
        <span className='pull'>React.js</span> <span className="pull-right">90%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>

        <span className='pull'>MongoDB</span> <span className="pull-right">95%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"95%"}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <span className='pull'>tailwindCss</span> <span className="pull-right">90%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <span className='pull'>Java</span> <span className="pull-right">85%</span>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width:"85%"}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
      </div>
      </div>

       {/* About Me */}
      <div  className='about-me-container'>
        <div className='about-me'>
          <h3>Greetings! I'm thrilled to introduce myself as a dedicated MERN Stack Developer, specializing in the creation of dynamic and interactive web applications that captivate users and drive engagement. <br />
          I possess practical expertise in HTML5, CSS, JavaScript, Node.js, Express.js, React.js, Tailwind CSS, MongoDB, and Java, cultivated through hands-on projects and professional engagements. My skill set encompasses frontend and backend technologies, database management, and server-side development.
          </h3>
          <div className="about-btn">
                <button className="active" onClick={onclickSkill}>Main Skills</button>
                <button onClick={onclickEducation}>Education</button>
                <button onClick={onclickCertificate}>Certificate</button>
            </div>
            {category == "Skill" && 
              <div className="content-btn">
                  <img src={html} alt="html" />
                  <img src={css} alt="css" />
                  <img src={js} alt="js" />
                  <img src={nodejs} alt="nodejs" />
                  <img src={expressjs} alt="expressjs" />
                  <img src={ejs} alt="ejs" />
                  <img src={mongodb} alt="mongodb" />
                  <img src={reatcjs} alt="reatcjs" />
                  <img src={tailwindcss} alt="tailwindcss" />
                  <img src={java} alt="java" />
              </div> 
            }
            {category == "Education" && 
              <div className="content-btn" style={{display:"block"}}>
                <h3>B.Tech, CSE</h3>
                <p>-&gt;Gautam Buddha University, Greater Noida
                  <br />
                  -&gt;2021-2025
                </p>
                <h3>12th:</h3>
                <p>-&gt;Pragyan Public School, Jewar, G:B Nagar
                  <br />
                  -&gt;2020-2021
                </p>
                <h3>10th:</h3>
                <p>-&gt;Pragyan Public School, Jewar, G:B Nagar
                  <br />
                  -&gt;2018-2019
                </p>
              </div>
            }
            {category == "Certificate" && 
              <div className='content-btn'>
                <img src={certificate} style={{width:"100%"}} />
              </div>
            }

        </div>
      </div>
      </div>

    </div>
  )
}

export default About;



