import React from "react";
import "../styles/home.css"

function Home() {
    return (
        <div className="home-container">
            <div className="home-top"><div className="home-intro-container">
                <h1 className="text">Hi There!</h1>
                <h1 className="text">I'm <span className="colorful text">Evan Woods</span></h1>
                <br></br>
                <br></br>
                <h2 className="colorful text">Full Stack & <br></br> Machine Learning Engineer</h2>
            </div>
            <div className="headshot">
                <img src="Assets/headshot.jpg" alt="headshot"></img>
            </div></div>

            <div className="brief-intro-container">
                <h1 className="brief-intro-title">Let Me <span className="colorful">Introduce</span> Myself</h1>
                <div className="brief-intro-content">
                    <p className="intro-para">I have been coding for over two and a half years, and have learned a great deal about programming in that time.</p>
                    <br></br>
                    <p className="intro-para">I am passionate about learning new things and am driven by a need to understand new things.</p>
                    <br></br>
                    <p className="intro-para">I am fluent in <span className="colorful">JavaScript,</span> <span className="colorful"> Python</span> <span className="colorful">and C#</span></p>
                    <br></br>
                    <p className="intro-para">I am always trying to improve my skills, create better products and integrate exciting, new technologies into my day to day knowledge base.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;