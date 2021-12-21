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
                    <img src={cssSVG}/>
                    <img src={htmlSVG}/>
                    <img src={jsSVG}/>
                    <img src={nodeSVG}/>
                    <img src={reactSVG}/>
                    <img src={figmaSVG}/>
                    <img src={next}/>
                </article>
            </section>
        </main>
    )
}
