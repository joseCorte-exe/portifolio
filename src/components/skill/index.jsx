import React from "react";

import Line from "../line";

import jsSVG from "../../imgs/javascript.svg";
import nodeSVG from "../../imgs/nodejs.svg";
import reactSVG from "../../imgs/react.svg";
import figmaSVG from "../../imgs/figma.svg";
import htmlSVG from "../../imgs/html.svg";
import cssSVG from "../../imgs/css.svg";

import mediapipePNG from "../../imgs/mediapipe.png";
import pythonSVG from "../../imgs/python.svg";
import opencvSVG from "../../imgs/opencv.svg";

import "./index.css";

export default function Skills() {
    return (
        <div className="skills-container">
            <div className="skills-content">
                <h1 className="white-f9 skills-topic">My skills</h1>
                <div className="skills-subcontent">
                    <div className="skills-web">  
                        <img src={cssSVG}/>
                        <img src={htmlSVG}/>
                        <img src={jsSVG}/>
                        <img src={nodeSVG}/>
                        <img src={reactSVG}/>
                        <img src={figmaSVG}/>
                    </div>
                    <Line />
                    <div className="skills-dataScience">
                        <img src={pythonSVG}/>
                        <img src={opencvSVG}/>
                        <img src={mediapipePNG}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
