import React from "react";
import "../styles/header.css"

function Header() {
    return (
        <div className="header-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="logo-container">
                <p className="logo">Ew.</p>
            </div>
            <ul className="header-list-container">
                <li className="header-list-item">
                    <i class="fa-solid fa-house"></i>
                    <a href="#home" className="header-link">Home</a>
                </li>
                <li className="header-list-item">
                    <i class="fa-light fa-user"></i>
                    <a href="#home" className="header-link">About</a>
                </li>
                <li className="header-list-item">
                    <i class="fa-thin fa-computer"></i>
                    <a href="#home" className="header-link">Projects</a>
                </li>
                <li className="header-list-item">
                    <i class="fa-thin fa-file-arrow-down"></i>
                    <a href="#home" className="header-link">Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;