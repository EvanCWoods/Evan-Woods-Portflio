import React from "react";
import "../styles/project.css";

function Project(props) {
    return (
        <div className="project-container">
            <img src={props.image} alt="Projects" className="project-image"></img>
            <h2 className="project-title">{props.projectTitle}</h2>
            <p className="project-description">{props.projectDescription}</p>
            <button className="project-button">See project</button>
        </div>
    )
}

export default Project;