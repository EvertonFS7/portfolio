import React from "react";
import 'animate.css';
import './style.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiNotion } from 'react-icons/si'
import { FaPaperclip } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

const Header = () => {

    const menuShow = () => {
        let menuMobile = document.querySelector('.mobile-menu')
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open')
        } else {
            menuMobile.classList.add('open')
        }
    }

    return (
        <header id="start">
            <div className="header-bar">

                <div className="header-container container animate__animated animate__fadeInLeft">

                    <div className="header-section-logo">
                        <a href="/" className="header-logo"> {'<EF />'} </a>
                    </div>

                    <nav className="header-nav">
                        <ul className="header-section-main">
                            <li className="header-section">
                                <a href="#about" className="header-section-links">Sobre mim</a>
                            </li>
                            <li className="header-section">
                                <a href="#skills" className="header-section-links">Habilidades</a>
                            </li>
                            <li className="header-section">
                                <a href="#methods-services" className="header-section-links">Serviços</a>
                            </li>
                            <li className="header-section">
                                <a href="#portfolio" className="header-section-links">Projetos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="container header-options-main">
                <input id="hamburguer" type='checkbox' style={{ display: 'none' }} />
                <label htmlFor="hamburguer">
                    <div className="header-options" onClick={menuShow}></div>
                </label>
            </div>

            <nav className='mobile-menu container'>
                <ul className="header-section-main animate__animated animate__fadeInDown">
                    <li className="header-section">
                        <a href="https://www.linkedin.com/in/evertonfernandesdev/" className="header-section-links">Linkedin <BsLinkedin className="i-linkedin i-header"/> </a>
                    </li>
                    <li className="header-section">
                        <a href="https://github.com/evertonFernandes7" className="header-section-links">GitHub <BsGithub className="i-header"/></a>
                    </li>
                    <li className="header-section">
                        <a href="https://www.notion.so/Getting-Started-c9b8c79f92824ecbb7de8d3a6ba60dae" className="header-section-links">Notion <SiNotion className="i-notion i-header"/></a>
                    </li>
                    <li className="header-section">
                        <a href="https://api.whatsapp.com/send?phone=5562993442774" className="header-section-links">WhatsApp <BsWhatsapp size={20} className="i-whatsapp i-header"/></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header