import React from 'react';
import { Link } from 'react-router-dom'

import "./index.css"
import "../../index.css"

export default function Header() {
    return (
        <div className="header-container white-opc">
            <div className="header-content white-f0">
                <h2 className="header-h2">Portifólio</h2>
                <ul>
                    <Link to="/" className="link white-f0">
                        <li>Home</li>
                    </Link>

                    <Link to="/about" className="link white-f0">
                        <li>About-me</li>
                    </Link>

                    <Link to="/projects" className="link white-f0">
                        <li>Projects</li>
                    </Link>

                    <Link to="/skills" className="link white-f0">
                        <li>Skils</li>
                    </Link>

                    <Link to="/contact" className="link white-f0">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
