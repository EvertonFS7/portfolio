import React from "react";
import './style.css'
import 'animate.css';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { FaGitAlt } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { FaNodeJs } from 'react-icons/fa'

const Technologies = () => {
    return (
        <section id="skills" className="container" >
            <div className="section-technologies">

                <div className="section-technologies-info animate__animated animate__slideInLeft">
                    <h2 className="section-technologies-title">Tecnologias</h2>
                    <p className="section-technologies-description">
                        Sempre aprendendo algo novo todos os dias!
                        <br />
                        <br />
                        Front-End: <strong>HTML5, CSS3, Sass, Scss, Tailwind Css, Bootstrap, Js, React (React-Router, Hooks, Redux, Styled-components, Next.Js)</strong>
                        <br />
                        <br />
                        Back-End: <strong>Node.Js</strong> junto ao <strong>Express</strong>.
                        <br />
                        <br />
                        Tenho experiência com <strong>Docker</strong> e <strong>GraphQL</strong>, junto aos bancos <strong>PostgreSQL</strong> e <strong>MongoDb</strong>.

                    </p>
                </div>

                <div className="section-technologies-main">
                    <div className="section-technologies-techs animate__animated animate__slideInRight">

                        <div className="section-technologies-content">
                            <i className="section-i i-html"><AiFillHtml5 /></i>
                        </div>
                        <div className="section-technologies-content">
                            <i className="section-i i-css"><DiCss3 /></i>
                        </div>
                        <div className="section-technologies-content">
                            <i className="section-i i-js"><TbBrandJavascript /></i>
                        </div>
                        <div className="section-technologies-content">
                            <i className="section-i i-react"><FaReact /></i>
                        </div>
                        <div className="section-technologies-content">
                            <i className="section-i i-node"><FaNodeJs /></i>
                        </div>
                        <div className="section-technologies-content">
                            <i className="section-i i-mongo"><DiMongodb /></i>
                        </div>
                        <div className="section-technologies-content">
                            <i className="section-i i-git"><FaGitAlt /></i>
                        </div>
                        <div className="section-technologies-content">
                            <i className="section-i i-git-hub"><AiFillGithub /></i>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Technologies