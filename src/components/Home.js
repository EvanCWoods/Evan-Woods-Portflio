import React from "react";
import "../styles/home.css"

function Home() {
    return (
        <div className="home-container">
            <div className="home-intro-container">
                <h1 className="text">Hi There!</h1>
                <h1 className="text">I'm <span className="colorful text">Evan Woods</span></h1>
                <br></br>
                <br></br>
                <h2 className="colorful text">Full Stack & Machine Learning Engineer</h2>
            </div>

            <div className="brief-intro-container">
                <h1 className="brief-intro-title">Let Me Introduce Myself</h1>
                <div className="brief-intro-content">
                    <p className="intro-para">I have been coding for over two and a half years, starting by teaching myself python using online resources, gaining a deep understanding of Machine Learning using TensorFlow, and have recently made the switch to Full Stack Development using the MERN stack.</p>
                    <br></br>
                    <p className="intro-para">I am passionate about learning new things and am driven by a need to understand enw things.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;