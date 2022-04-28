import React from "react";
import Project from "./Project";
import "../styles/projects.css";

// import artJacent from "../Assets/project-images/artjacent.png"
import noteTaker from "../Assets/project-images/note-taker.png"

function Projects() {
    return (
        <div className="projects-container">
            {/* <Project image={artJacent} projectTitle="ArtJacent" projectDescription="This is a social media app that is directed at local artists and people who are interested in their work. Artists post their work, and the viewer sees them in their feed, sorted by distance to the creator." link="https://github.com/EvanCWoods/artJacent"/> */}
            <Project image={noteTaker} projectTitle="Note Taker" projectDescription="This is a note taker app that runs in the browser. It is designed to allow a user to create notes throughout the work day, change them as reuired and delete them upon completion." link="https://github.com/EvanCWoods/Note-Taker"/>
            <Project image="Assets/project-images/mushroom.jpeg" projectTitle="Mushroom Classifier" projectDescription="This is a machine learning project which uses TensoFlow to detirmine whether a mushroom is poisonous or eddible based on a set of features such as color, size, stock length etc." link="https://github.com/EvanCWoods/Mushroom-Classifier"/>
            <Project image="Assets/project-images/cocktails.png" projectTitle="Cocktail Translator" projectDescription="This app takes user input of a cocktail name, allows them to select the language to translate to, and provides information in both english and the selected language such as a description, ingredients and measurements." link="https://github.com/EvanCWoods/group-3-cocktails-in-any-language"/>
            <Project image="Assets/project-images/minesweeper.png" projectTitle="Mine Sweeper game" projectDescription="This is a recreation of the once popular game 'Mine Sweeper'. It is built using JavaScript and emulates the origin game mechanics." link="https://github.com/EvanCWoods/mineSweeper"/>
            <Project image="Assets/project-images/genetic-algo.png" projectTitle="Genetic Algorithm" projectDescription="This project uses raw python to simulate natural selection at its basic level. Essentially using numbers as genetic code to be passed on from generation to generation until the 'creatures' become very good at guessing a number." link="https://github.com/EvanCWoods/genetic-algorithm"/>
        </div>
    )
}

export default Projects;