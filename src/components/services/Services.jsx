import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const services = () => {
    return (
        <section id="services">
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Design user interractions with frontend code</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Ensure webpages are mobile-optimized</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Receive design handoffs from UX and UI designers and coding them</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Server-side development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Design and develop functionning APIs</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create and maintain dabatases and servers</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Test and debug on both front and backend</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Search Engine Optimisation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Implement structured data</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Keep the code clean and the load times fast</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Make sure the site work on mobile</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Ensure follow/no follow links are used appropriately</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default services
