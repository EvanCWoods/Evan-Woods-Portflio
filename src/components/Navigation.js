import React from "react";
import "../styles/header.css"

function Navigation() {
    return (
        <div className="header-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="logo-container">
                <p className="logo">Ew.</p>
            </div>
            <ul className="header-list-container">
                <li className="header-list-item">
                    <i class="fa-solid fa-house"></i>
                    <a href="/" className="header-link">Home</a>
                </li>
                <li className="header-list-item">
                <i class="fa-solid fa-user"></i>
                    <a href="/about" className="header-link">About</a>
                </li>
                <li className="header-list-item">
                <i class="fa-solid fa-computer"></i>
                    <a href="/projects" className="header-link">Projects</a>
                </li>
                <li className="header-list-item">
                <i class="fa-solid fa-file-arrow-down"></i>
                    <a href="Assets/Evan-Woods-Coding-Resume.pdf" download="Evan-Woods-Coding-Resume.pdf" className="header-link">Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;