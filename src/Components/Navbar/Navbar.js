import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";



const Navbar = () => {
  return (
   <nav>
    <div className="nav-logo">
    <img src={logo} alt="logo"/>
    </div>

    <div className="nav-links">
        <ul>
          <li>
            <a href="#">Introduction</a>
          </li>

          <li>
            <a href="#aboutMe">About</a>
          </li>

          <li>
            <a href="#myProjects">Projects</a>
          </li>

          <li>
            <a href="#contactMe">Contact</a>
          </li>
        </ul>
        

    </div>
   </nav>
  )
}

export default Navbar;