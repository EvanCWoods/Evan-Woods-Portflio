import React from "react";
import "../styles/header.css"

function Navigation() {

    function activateMenu() {
        const dropdownList = document.querySelector(".dropdown-list-container");
        dropdownList.classList.add("show-dropdown");
    }
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
            <div className="menu-container">
                <button className="button-container" onClick={activateMenu}>
                    <i class="fa-solid fa-bars"></i> 
                </button>
                <ul className="dropdown-list-container">
                    <li className="dropdown-list-item">
                        <i class="fa-solid fa-house"></i>
                        <a href="/" className="dropdown-link">Home</a>
                    </li>
                    <li className="dropdown-list-item">
                    <i class="fa-solid fa-user"></i>
                        <a href="/about" className="dropdown-link">About</a>
                    </li>
                    <li className="dropdown-list-item">
                    <i class="fa-solid fa-computer"></i>

                        <a href="/projects" className="dropdown-link">Projects</a>
                    </li>
                    <li className="dropdown-list-item">
                        <i class="fa-solid fa-file-arrow-down"></i>
                        <a href="Assets/Evan-Woods-Coding-Resume.pdf" download="Evan-Woods-Coding-Resume.pdf" className="header-link">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;