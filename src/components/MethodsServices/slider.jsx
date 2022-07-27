import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import cleanCode from '../../assets/code.svg'
import quality from '../../assets/interface.svg'
import softSkills from '../../assets/softSkills.svg'
import agile from '../../assets/agile.svg'

export default class slider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        arrows: false
                    }
                },
            ]
        };
        return (
            <div className="slider  animate__animated animate__slideInLeft">
                <h2 className="slider-title">DIFERENCIAIS</h2>
                <Slider {...settings}>
                    <div className="slider-main">
                        <div className="slider-content">
                            <div className="slider-content-info">
                                <div className="slide-img-main">
                                    <img src={agile} alt="" className="slide-img" />
                                </div>
                                <div className="slider-info">
                                    <h4 className="slider-info-title">Metodologias Ágeis</h4>
                                    <p className="slider-info-description">
                                        Simplificando processos tornando-os mais simples e dinâmicos através de feedbacks e interações. Garantindo uma alta agilidade,  qualidade e eficiência no projeto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-main">
                        <div className="slider-content">
                            <div className="slider-content-info">
                                <div className="slide-img-main">
                                    <img src={cleanCode} alt="" className="slide-img" />
                                </div>
                                <div className="slider-info">
                                    <h4 className="slider-info-title">Clean Code</h4>
                                    <p className="slider-info-description">
                                        Utilizando as melhores práticas de programação e sempre deixando o ambiente de desenvolvimento mais limpo que quando eu encontrei.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-main">
                        <div className="slider-content">
                            <div className="slider-content-info">
                                <img src={quality} alt="" className="slide-img" />
                                <div className="slider-info">
                                    <h4 className="slider-info-title">Alta qualidade</h4>
                                    <p className="slider-info-description">
                                        Sempre reproduzindo com alta qualidade cada detalhe das interfaces e regras de negócio do projeto para uma alta satisfação do cliente final.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-main">
                        <div className="slider-content">
                            <div className="slider-content-info">
                                <img src={softSkills} alt="" className="slide-img" />
                                <div className="slider-info">
                                    <h4 className="slider-info-title">Soft skills</h4>
                                    <p className="slider-info-description">
                                        Calma para resolver problemas complexos, agilidade, rápida adaptação, sempre aberto a feedbacks, comunicação e liderança.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}