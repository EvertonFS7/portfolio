import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import prototyping from '../../assets/prototyping.svg'
import frontEnd from '../../assets/frontEnd.svg'
import backEnd from '../../assets/backEnd.svg'

export default class sliderServices extends Component {
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
            <div className="slider animate__animated animate__slideInRight">
                <h2 className="slider-title">SERVIÇOS</h2>
                <Slider {...settings}>
                    <div className="slider-main">
                        <div className="slider-content">
                            <div className="slider-content-info">
                                <img src={prototyping} alt="" className="slide-img" />
                                <div className="slider-info">
                                    <h4 className="slider-info-title">Prototipagem</h4>
                                    <p className="slider-info-description">
                                        Desenho da interface de forma que ela seja clara, objetiva e principalmente intuitiva atendendo a todos os requisitos, garantindo a satifação do usuário.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-main">
                        <div className="slider-content">
                            <div className="slider-content-info">
                                <img src={frontEnd} alt="" className="slide-img" />
                                <div className="slider-info">
                                    <h4 className="slider-info-title">Front-End</h4>
                                    <p className="slider-info-description">
                                        Desenvolvimento front-end utilizando react e tudo que essa grande biblioteca tem a oferecer, garantindo uma alta performace no projeto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-main">
                        <div className="slider-content">
                            <div className="slider-content-info">
                                <img src={backEnd} alt="" className="slide-img" />
                                <div className="slider-info">
                                    <h4 className="slider-info-title">Back-End</h4>
                                    <p className="slider-info-description">
                                        Desenvolvimento back-end utilizando node.js com express, mantendo sempre organização e estruturação no código para garantir que todos os requisitos sejam cumpridos.
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