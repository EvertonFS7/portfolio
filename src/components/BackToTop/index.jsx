import React from "react";
import './style.css'

import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const BackToTop = () => {

    window.addEventListener('scroll', function () {
        let scroll = document.querySelector('.scroll-top')
        scroll.classList.toggle('active', window.scrollY > 150)
    })

    function backTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <article className="back-to-top">
            <BsFillArrowUpCircleFill className="scroll-top" onClick={backTop} />
        </article>
    )
}

export default BackToTop