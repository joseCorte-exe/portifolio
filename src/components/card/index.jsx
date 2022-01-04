import React from 'react'
import './style.css';

import ptPrw from "../../imgs/portifolio.png";

export default function Card() {
    return (
        <main className="prj-main" >
            <img src={ptPrw} alt="" width="200" className='card-img' />
            <section className="prj-section" >
                <h1>portifolio</h1>
                <p>portifolio para mostrar skills e projetos tanto na construção do proprio portifolio, quanto na construção de outros projetos</p>
            </section>
        </main>
    )
}
