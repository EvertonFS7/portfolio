import React from "react";
import './style.css'
import CooffeTable from './CooffeTable'
import 'animate.css';

const About = () => {
    return (
        <section id="about" className="container">
            <div className="section-about">
                <div className="section-about-me animate__animated animate__slideInLeft">
                    <h2 className="section-about-title">Sobre mim</h2>
                    <p className="section-about-description">
                        Desenvolvedor full-stack, cursando 4º período de engenharia de software.
                        Amante de boas práticas de desenvolvimento, sempre deixando o ambiente mais limpo do que quando eu o encontrei. 
                    </p>
                </div>

                <div className="section-about-info animate__animated animate__slideInRight">
                    <CooffeTable />
                </div>

            </div>
        </section>
    )
}

export default About