import React from 'react'
import './style.css';

import ptPrw from "../../imgs/portifolio.png";

export default function Card() {
    return (
        <main className="prj-main" >
            <img src={ptPrw} alt="" width="200" className='card-img' />
            <section className="prj-section" >
                <h1>Card Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </section>
        </main>
    )
}
