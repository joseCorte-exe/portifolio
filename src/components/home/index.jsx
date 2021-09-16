import React from "react";

import DevSvg from "../../imgs/dev.svg";
import githubSVG from "../../imgs/github.svg";
import instagramSVG from "../../imgs/instagram.svg";

import "./index.css";
import "../../index.css"

export default function Home(props) {
    const text = `Olá, eu sou o
                José Corte :)`
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-topic white-f0">Home</h1>
                <div className="home-subcontent">
                    <div className="home-pg">
                        <div>
                            <h2 className='home-h2 white-f9'>{"Olá, eu sou o"} <br/> {"José Corte :)"}</h2>
                            <span className='white-f9'>Desenvolvedor de nada, mas sabe algumas coisas</span>
                        </div>
                        <div>
                            <img src={githubSVG} className="home-icons"/>
                            <img src={instagramSVG} className="home-icons"/>
                        </div>
                    </div>
                    {/* <h2 className='home-h2 white-f9'>{text}</h2> */}
                    <img src={DevSvg} className="home-svg"></img>
                </div>
            </div>
        </div>
    )
}
