import React from 'react'
import './portfolio.css'
import Chouette from '../../assets/project/chouette_agence.jpg'
import OhMyFood from '../../assets/project/ohmyfood.jpg'
import HotTakes from '../../assets/project/hot_takes.jpg'
import Kanap from '../../assets/project/kanap.jpg'
import ModernPortfolio from '../../assets/project/modern-portofolio.jpg'
import Reservia from '../../assets/project/reservia.jpg'


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={ModernPortfolio} alt="React and tailwind" />
                    </div>
                    <h3>#React #TailwindCSS</h3>
                    <a href="https://github.com/DaniOmer/react-tailwind-portfolio" target="_blank" rel="noreferrer" className="btn">Github</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={HotTakes} alt="Node and MongoDB" />
                    </div>
                    <h3>#Nodejs #Express #MongoDB</h3>
                    <a href="https://github.com/DaniOmer/API-NodeJS-Express-MongoDB" target="_blank" rel="noreferrer" className="btn">Github</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Kanap} alt="Javascript" />
                    </div>
                    <h3>#Vanilla JavaScript</h3>
                    <a href="https://github.com/DaniOmer/ecommerce-js" target="_blank" rel="noreferrer" className="btn">Github</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={OhMyFood} alt="HTML and SASS" />
                    </div>
                    <h3>#HTML #SASS</h3>
                    <a href="https://github.com/DaniOmer/ohmyfood" target="_blank" rel="noreferrer" className="btn">Github</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Reservia} alt="HTML and CSS" />
                    </div>
                    <h3>#HTML #CSS</h3>
                    <a href="https://github.com/DaniOmer/Booki" target="_blank" rel="noreferrer" className="btn">Github</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Chouette} alt="SEO" />
                    </div>
                    <h3>#SE0 #HTML #CSS</h3>
                    <a href="https://github.com/DaniOmer/seo-project" target="_blank" rel="noreferrer" className="btn">Github</a>
                </article>
            </div>
            
        </section>
    )
}

export default Portfolio
