import React from 'react';
import { Link } from 'react-router-dom'

import "./index.css"
import "../../index.css"

export default function Header() {
    return (
        <header className="header-container white-opc">
            <h2 className="header-h2 primary">Portifólio</h2>
            <ul>
                <Link to="/" className="link primary">
                    Home
                </Link>

                <Link to="/about" className="link primary">
                    About-me
                </Link>

                <Link to="/projects" className="link primary">
                    Projects
                </Link>

                <Link to="/skills" className="link primary">
                    Skils
                </Link>
{/* 
                <Link to="/contact" className="link white-f0">
                    Contact
                </Link> */}
            </ul>
        </header>
    )
}
