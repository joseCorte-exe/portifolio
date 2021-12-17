import React from "react";

import DevSvg from "../../imgs/dev.svg";
import githubSVG from "../../imgs/github.svg";
import instagramSVG from "../../imgs/instagram.svg";

import "./index.css";
import "../../index.css"

export default function Home() {
    return (
        <main className="home-main">
            <h1 className="topic primary">Home</h1>
            <section className="home-section">
                <h2 className="primary">olá, meu nome é <br></br> José Corte :)</h2>
                <span className='secondary' >Desenvolvedor web, front-end</span>

                <article className="home-article">
                    <img src={githubSVG} className="home-icons"/>
                    <img src={instagramSVG} className="home-icons"/>
                </article>
            </section>
            <img src={DevSvg} className="home-svg"></img>
            <footer></footer>
        </main>
    )
}
