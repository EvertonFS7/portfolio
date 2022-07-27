import React from "react";
import './style.css'
import Slider from "./slider";
import SliderServices from './sliderServices'

const MethodsServices = () => {

    return (
        <section id="methods-services">
            <div className="methods-services-main">
                <div className="methods-services-title-main container">
                    <h2 className="methods-services-title">Diferenciais e Serviços</h2>
                </div>
                <div className="methods-services container">
                    <div className="slider-diferences">
                        <Slider />
                    </div>
                    <div className="slider-services">
                        <SliderServices />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MethodsServices