import React from "react";

import jsSVG from "../../imgs/javascript.svg";
import nodeSVG from "../../imgs/nodejs.svg";
import reactSVG from "../../imgs/react.svg";
import figmaSVG from "../../imgs/figma.svg";
import htmlSVG from "../../imgs/html.svg";
import cssSVG from "../../imgs/css.svg";
import next from "../../imgs/next.png";

import "./index.css";

export default function Skills() {
    return (
        <main className='skills-main' >
            <section className='skills-section'>
                <h1 className="primary topic skills">My skills</h1>
                <article className="skills-article">
                    <img className='svg' src={cssSVG}/>
                    <img className='svg' src={htmlSVG}/>
                    <img className='svg' src={jsSVG}/>
                    <img className='svg' src={nodeSVG}/>
                    <img className='svg' src={reactSVG}/>
                    <img className='svg' src={figmaSVG}/>
                    <img className='svg' src={next}/>
                </article>
            </section>
        </main>
    )
}
