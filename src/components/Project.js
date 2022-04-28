import React from "react";
import "../styles/project.css";

function Project(props) {
    return (
        <div className="project-container">
            <img src={props.image} alt="Projects" className="project-image"></img>
            <h2 className="project-title">{props.projectTitle}</h2>
            <p className="project-description">{props.projectDescription}</p>
            <a href={props.link}><button className="project-button">See project</button></a>
        </div>
    )
}

export default Project;