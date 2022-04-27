import React from "react";
import Project from "./Project";
import "../styles/projects.css";

function Projects() {
    return (
        <div className="projects-container">
            <Project image="/" projectTitle="Project" projectDescription="description" />
        </div>
    )
}

export default Projects;