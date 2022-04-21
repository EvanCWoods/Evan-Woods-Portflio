import React from "react";
import "../styles/header.css"

function Header() {
    return (
        <div className="header-container">
            <ul className="header-list-container">
                <li className="header-list-item">
                    <a href="#home" className="header-link">Home</a>
                </li>
                <li className="header-list-item">
                    <a href="#home" className="header-link">Projects</a>
                </li>
                <li className="header-list-item">
                    <a href="#home" className="header-link">Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;