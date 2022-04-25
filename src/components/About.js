import React from "react";
import Technologies from "./technologies";
import "../styles/about.css";

function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">Here's A Little Bit About Me</h1>
            <p className="about-para">
                I am an Economics major with plenty of programming experience.
                <br></br>
                <br></br>
                Some of my fields of interest aside from Web Development are:
            </p>
            <ul className="interest-container">
                <li className="interest">Physics</li>
                <li className="interest">Technology</li>
                <li className="interest">Space Exploration</li>
                <li className="interest">Machine Learning</li>
            </ul>
            <Technologies />
        </div>
    )
}

export default About;