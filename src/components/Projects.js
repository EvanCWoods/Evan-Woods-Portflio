import React from "react";
import Project from "./Project";
import "../styles/projects.css";

function Projects() {
    return (
        <div className="projects-container">
            <Project image="Assets/project-images/artjacent.png" projectTitle="ArtJacent" projectDescription="This is a social media app that is directed at local artists and people who are interested in their work. Artists post their work, and the viewer sees them in their feed, sorted by distance to the creator." />
            <Project image="Assets/project-images/note-taker.png" projectTitle="Note Taker" projectDescription="This is a note taker app that runs in the browser. It is designed to allow a user to create notes throughout the work day, change them as reuired and delete them upon completion." />
            <Project image="Assets/project-images/mushroom.jpeg" projectTitle="Mushroom Classifier" projectDescription="This is a machine learning project which uses TensoFlow to detirmine whether a mushroom is poisonous or eddible based on a set of features such as color, size, stock length etc." />
            <Project image="Assets/project-images/cocktails.png" projectTitle="Cocktail Translator" projectDescription="This app takes user input of a cocktail name, allows them to select the language to translate to, and provides information in both english and the selected language such as a description, ingredients and measurements." />
            <Project image="Assets/project-images/minesweeper.png" projectTitle="Mine Sweeper game" projectDescription="This is a recreation of the once popular game 'Mine Sweeper'. It is built using JavaScript and emulates the origin game mechanics." />
        </div>
    )
}

export default Projects;