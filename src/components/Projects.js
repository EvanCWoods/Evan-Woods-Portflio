import React from "react";

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-title">
                <h1>My Recent Projects</h1>
                <p>Here are a few of my new projects</p>
            </div>
            <div className="project-card">
                <div className="project-image">
                    <img alt="project"></img>
                </div>
                <div className="project-title-container">
                    <h3 className="project-title">Project 1</h3>
                </div>
                <div className="project-description-container">
                    <p className="project-description">This is a super cool project that uses new technologies</p>
                </div>
                <button className="project-button">See Code</button>
                <button className="project-button">See Project</button>
            </div>
        </div>
    )
}

export default Projects;