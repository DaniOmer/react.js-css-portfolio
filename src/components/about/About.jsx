import React from 'react'
import './about.css'
import Me from '../../assets/me.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="Me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__card-icon"/>
                            <h5>Learning</h5>
                            <small>3+ years</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__card-icon"/>
                            <h5>Clients</h5>
                            <small>11+ Worldwhile</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__card-icon"/>
                            <h5>Projects</h5>
                            <small>21+ completed</small>
                        </article>
                    </div>

                    <p>Junior fullstack developer with good knowleges in frond-end and backend, I'm looking for an
                        apprentishep for 1 year at least, to achieve my bachelor's degreee. I'm open to work !
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default about
