import React from "react";

import aboutSVG from "../../imgs/about.svg"

import "./index.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="white-f9 about-topic">About-me</h1>
                <div className="about-subcontent">
                    <img src={aboutSVG} className="about-img"/>
                    <p className="white-f9 about-pg">
                    Hi, my name is josé, I'm 18 years old and I'm studying IT technician,
                    I have knowledge in JavaScript, HTML, CSS, Python, C++, C#, Java, MySQL.
                    I've also had experience with some frameworks and libraries, including:
                    reactjs, react-native and among other front-end ones, I also study some
                    python libraries for the AI ​​area, such as TensorFlow, Keras, Opencv, MediaPipe
                    among others.
                    <br/>
                    I'm currently looking for a job in the web area, as a front-end or back-end
                    </p>
                </div>
            </div>
        </div>
    )
}
