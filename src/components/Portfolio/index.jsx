import React from "react";
import './style.css'

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio" >

            <div className="section-portfolio-title container">
                <h2 className="portfolio-title">Portfólio</h2>
            </div>

            <div className="section-portfolio">

                <div className="section-portfolio-card">
                    <div className="portfolio-card-content">
                        <img className="card-img" src="https://t2.tudocdn.net/178296?w=660&h=660" alt="" />
                        <h3 className="card-title"> Netflix </h3>
                        <p className="card-description">Refiz a tela principal da Netflix, utilizando a API do The Movie DB para buscar e exibir os filmes! </p>
                        <a href="https://clonenetflix-react.vercel.app" className="card-button-link"><button className="card-button">ver</button></a>
                    </div>
                </div>
                <div className="section-portfolio-card">
                    <div className="portfolio-card-content">
                        <img className="card-img" src="http://conteudo.imguol.com.br/c/noticias/9b/2021/01/11/planilha-gastos-economia-financas-pessoais-contas-dinheiro-1610385192120_v2_1732x1732.jpg" alt="" />
                        <h3 className="card-title"> Controle financeiro </h3>
                        <p className="card-description">Nesse sistema você pode adicionar os seus lucros e despesas, no que resultará em um balanço financeiro mensal.</p>
                        <a href="https://yourfinances.vercel.app" className="card-button-link"><button className="card-button">ver</button></a>
                    </div>
                </div>
                <div className="section-portfolio-card">
                    <div className="portfolio-card-content">
                        <img className="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dkeL5sb2kWl1ainJx6xO7ROPyI3ZAPG2vgEIWRey1Y54rxlZwE64lfDWAQ-bbk5JHso&usqp=CAU" alt="" />
                        <h3 className="card-title"> Spotify </h3>
                        <p className="card-description">Página inicial do spotify e um dos meus primeiros projetos em que utilizei o Bootstrap.</p>
                        <a href="https://clonespotify.vercel.app" className="card-button-link"><button className="card-button"> ver</button></a>
                    </div>
                </div>
                <div className="section-portfolio-card">
                    <div className="portfolio-card-content">
                        <img className="card-img" src="https://play-lh.googleusercontent.com/43tDnE4qWM9GvkfozMlcqyymSQBBzM4P3zo689dhvePNLPK2Ncxa2TM11yG_vrsKJQ" alt="" />
                        <h3 className="card-title"> Galeria de fotos </h3>
                        <p className="card-description">Nesse app você pode fazer o upload e exclusão de imagens, tendo uma galeria de fotos pessoais.</p>
                        <a href="https://github.com/evertonFernandes7/galeria-fotos" className="card-button-link"><button className="card-button"> ver</button></a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio