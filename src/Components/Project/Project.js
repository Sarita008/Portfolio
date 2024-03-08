import React, { useState } from 'react'
import "./Project.css";
import Image from "../../assets/1.jpg";
import Income from "../../assets/income.png";
import Blog from "../../assets/blog.png";
import Weather from "../../assets/weather.png";
import Email from "../../assets/Email-sender.png";
import Todo from "../../assets/todo.png";
import Battery from "../../assets/batter-api.png";
import Calculator from "../../assets/calculator.png";

const Project = () => {
    const [category, setCategory]=useState("All");

    const onclickAll = function(){
        setCategory("All");
    };
    const onclickBasic = function(){
        setCategory("Basic");
    };
    const onclickIntermediate = function(){
        setCategory("Intermediate");
    };
    const onclickAdvance = function(){
        setCategory("Advance");
    };

    

    return (
    <div id='myProjects' className='project-container'>
        <div className='project-content'>
        <h1>My Projects</h1>
        </div>
        
        <div className="project-buttons">
            <button className="button mixitup-control-active" onClick={onclickAll}>All Project</button>
            <button className="button" onClick={onclickBasic}>Basic Project</button>
            <button className="button"onClick={onclickIntermediate}>Intermediate Project</button>
            <button className="button" onClick={onclickAdvance}>Advance Project</button>
        </div>
        
        <div className='projectClass'>
            {category=="All"&& 
                <div className='projectClass'>
                    <div className='project-card'>
                        <img 
                            src= {Income} 
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Income-Expenses Tracker</h2>
                            <p>Developed Income-Expenses Tracker Web application using Node.js, Express.js, and React.js, MongoDB showcasing my proficiency in full-stack development and database management. Implemented features for tracking financial transactions and generating insights.
                            <br />
                            In this project, I leveraged Node.js and Express.js to build the backend infrastructure, implementing RESTful APIs for handling data requests and interactions with the MongoDB database.I utilized React.js to create a dynamic and responsive user interface, allowing users to seamlessly input, track, and analyze their income and expenses. 
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Blog}
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Blog</h2>
                            <p>Designed and developed a dynamic Blog website using Node.js, Express.js, EJS, and MongoDB. Integrated CRUD operations to manage blog posts and user interactions effectively. Proficient in backend development, database management, and templating engines.This Blog Web Application reflects my dedication to excellence in web development and my ability to create impactful solutions that meet the needs of modern users.</p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Weather}
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Weather Web App</h2>
                            <p>As a proficient React.js developer, I have designed and developed a Weather web application utilizing the Weatherbit.io API to fetch real-time weather data. Leveraging my expertise in React.js, I created a dynamic and intuitive user interface that provides users with up-to-date weather information.
                            <br />
                            In this project, I utilized React.js to build a responsive and interactive front-end interface, allowing users to easily input their location and view detailed weather forecasts. I integrated the Weatherbit.io API to fetch weather data, enabling the application to display accurate and timely information on temperature, humidity, wind speed, and more.
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Todo}
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Todo List</h2>
                            <p>As a React.js developer, I have designed and developed a dynamic Todo list web application aimed at simplifying task management and enhancing productivity. In this project, I utilized React.js to create a user-friendly front-end interface, enabling users to seamlessly add task. Leveraging React components and react Hooks, I ensured that the Todo list web application provides a smooth and efficient user experience, allowing users to stay organized and focused on their goals.</p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Email} 
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>E-mail Sender</h2>
                            <p>As a FullStack web developer, I have designed and developed an Email-sender web application using Node.js, EJS and using NodeMailer Package. Leveraging my expertise in both front-end and back-end technologies, I created a seamless user experience for sending emails efficiently and effectively..
                            <br />
                            In this project, I utilized Node.js for server-side scripting, enabling asynchronous handling of email sending processes. EJS was employed for templating, allowing for dynamic content generation and personalized email templates.
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Battery}
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Battery API</h2>
                            <p>Designed and developed a Battery API project using HTML, CSS, and JavaScript, with the primary objective of providing users with real-time insights into their device's battery status.
                            <br />
                            I focused on creating a user-friendly interface that provides clear and concise information about the device's battery status.This project not only demonstrates my proficiency in HTML, CSS, and JavaScript but also showcases my ability to leverage web APIs to create practical and useful applications. 
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Calculator} 
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Calculator</h2>
                            <p>As a web developer, I've created a dynamic Calculator web application using HTML, CSS, and JavaScript, showcasing my proficiency in front-end development and user interface design.
                             <br />
                             In this project, I leveraged HTML to structure the calculator's layout, CSS was utilized to style the interface and user experience with modern design elements, JavaScript served as the backbone of the application, enabling interactive functionality such as addition, subtraction, multiplication, and division.  
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                </div>
            }
            {category=="Basic"&& 
                <div className='projectClass'>
                     <div className='project-card'>
                        <img 
                            src= {Email} 
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>E-mail Sender</h2>
                            <p>As a FullStack web developer, I have designed and developed an Email-sender web application using Node.js, EJS and using NodeMailer Package. Leveraging my expertise in both front-end and back-end technologies, I created a seamless user experience for sending emails efficiently and effectively..
                            <br />
                            In this project, I utilized Node.js for server-side scripting, enabling asynchronous handling of email sending processes. EJS was employed for templating, allowing for dynamic content generation and personalized email templates.
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Battery}
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Battery API</h2>
                            <p>Designed and developed a Battery API project using HTML, CSS, and JavaScript, with the primary objective of providing users with real-time insights into their device's battery status.
                            <br />
                            I focused on creating a user-friendly interface that provides clear and concise information about the device's battery status.This project not only demonstrates my proficiency in HTML, CSS, and JavaScript but also showcases my ability to leverage web APIs to create practical and useful applications. 
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Calculator} 
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Calculator</h2>
                            <p>As a web developer, I've created a dynamic Calculator web application using HTML, CSS, and JavaScript, showcasing my proficiency in front-end development and user interface design.
                             <br />
                             In this project, I leveraged HTML to structure the calculator's layout, CSS was utilized to style the interface and user experience with modern design elements, JavaScript served as the backbone of the application, enabling interactive functionality such as addition, subtraction, multiplication, and division.  
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                </div>
            }
            {category=="Intermediate"&& 
                <div className='projectClass'>
                  <div className='project-card'>
                        <img 
                            src= {Weather}
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Weather Web App</h2>
                            <p>As a proficient React.js developer, I have designed and developed a Weather web application utilizing the Weatherbit.io API to fetch real-time weather data. Leveraging my expertise in React.js, I created a dynamic and intuitive user interface that provides users with up-to-date weather information.
                            <br />
                            In this project, I utilized React.js to build a responsive and interactive front-end interface, allowing users to easily input their location and view detailed weather forecasts. I integrated the Weatherbit.io API to fetch weather data, enabling the application to display accurate and timely information on temperature, humidity, wind speed, and more.
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Todo}
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Todo List</h2>
                            <p>As a React.js developer, I have designed and developed a dynamic Todo list web application aimed at simplifying task management and enhancing productivity. In this project, I utilized React.js to create a user-friendly front-end interface, enabling users to seamlessly add task. Leveraging React components and react Hooks, I ensured that the Todo list web application provides a smooth and efficient user experience, allowing users to stay organized and focused on their goals.</p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                </div>
            }
            {category=="Advance"&& 
                <div className='projectClass'>
                   <div className='project-card'>
                        <img 
                            src= {Income} 
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Income-Expenses Tracker</h2>
                            <p>Developed Income-Expenses Tracker Web application using Node.js, Express.js, and React.js, MongoDB showcasing my proficiency in full-stack development and database management. Implemented features for tracking financial transactions and generating insights.
                            <br />
                            In this project, I leveraged Node.js and Express.js to build the backend infrastructure, implementing RESTful APIs for handling data requests and interactions with the MongoDB database.I utilized React.js to create a dynamic and responsive user interface, allowing users to seamlessly input, track, and analyze their income and expenses. 
                            </p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="#"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img 
                            src= {Blog}
                            alt='project image'
                        />
                        <div className='project-info'>
                            <h2>Blog</h2>
                            <p>Designed and developed a dynamic Blog website using Node.js, Express.js, EJS, and MongoDB. Integrated CRUD operations to manage blog posts and user interactions effectively. Proficient in backend development, database management, and templating engines.This Blog Web Application reflects my dedication to excellence in web development and my ability to create impactful solutions that meet the needs of modern users.</p>
                            <a href="https://github.com/Sarita008"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                </div>  
            }         
        </div>
    </div>
    )
}

export default Project;