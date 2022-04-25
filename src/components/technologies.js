import React from "react";
import "../styles/technologies.css";

function Technologies() {
  return (
    <div className="tech-container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      ></link>
      <div className="tech-title">
        <h1>Take a look at my Tech Stack!</h1>
      </div>
      <div className="tech-items-container">
        <div className="tech-item">
          <i class="devicon-javascript-plain"></i>
        </div>
        <div className="tech-item">
          <i class="devicon-nodejs-plain-wordmark"></i>
        </div>
        <div className="tech-item">
            <i class="devicon-express-original-wordmark"></i>
        </div>
        <div className="tech-item">
        <i class="devicon-mongodb-plain-wordmark"></i>
        </div>
        <div className="tech-item">
        <i class="devicon-react-original-wordmark"></i>
        </div>
        <div className="tech-item">
        <i class="devicon-webpack-plain-wordmark"></i>
        </div>
        <div className="tech-item">
        <i class="devicon-python-plain-wordmark"></i>
        </div>
        <div className="tech-item">
        <i class="devicon-tensorflow-line-wordmark"></i>
        </div>
        <div className="tech-item">
        <i class="devicon-pandas-original-wordmark"></i>
        </div>
        <div className="tech-item">
        <i class="devicon-mysql-plain-wordmark"></i>
        </div>
        <div className="tech-item">
        <i class="devicon-git-plain-wordmark"></i>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
