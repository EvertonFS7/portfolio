import React from "react";
import './App.css'
import About from "./components/About";
import Header from './components/Header'
import Section from './components/Section'
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import MethodsServices from "./components/MethodsServices";
import BackToTop from "./components/BackToTop";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Section />
            <About />
            <Technologies />
            <MethodsServices />
            <Portfolio />
            <Footer />
            <BackToTop />
        </div>
    )
}

export default App