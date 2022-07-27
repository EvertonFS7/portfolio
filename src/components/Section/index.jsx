import React from "react";
import './style.css'
import 'animate.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Section = () => {
    return (
        <section className="container animate__animated animate__fadeInDown">
            <div className="section-content">

                <div className="section-area">
                    <h1 className="section-name section-name-animation">Everton <span className="last-name">Fernandes</span></h1>
                    <p className="section-function">
                        <span className="work">Desenvolvedor</span>
                        <strong className="function-work">
                            <span className="work-react"> React</span>
                            <span className="work"> | </span>
                            <span className="work-node"> NodeJs</span>
                        </strong>
                    </p>

                    <div className="section-btn-links">
                        <div className="btn-links-linkedin">
                            <a href="https://www.linkedin.com/in/evertonfernandesdev/" className="btn-linkedin">Linkedin<BsLinkedin className="section-i-linkedin"/></a>
                        </div>

                        <div className="btn-links-github">
                            <a href="https://github.com/evertonFernandes7" className="btn-github">GitHub<BsGithub className="section-i-github"/></a>
                        </div>
                    </div>
                    
                </div>

                <div className="section-photo-main">
                    <div className="section-photo-content">
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Section