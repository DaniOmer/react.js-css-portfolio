import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/meW.png'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello, I'm</h5>
                <h1>Omer DOTCHAMOU</h1>
                <h5 className="text-light">Fullstack Developper</h5>
                <CallToAction />
                <HeaderSocials />

                <div className="me">
                    <img src={Me} alt="me" />
                </div>

                <div>
                    <a href="contact" className="scroll-down"> Scroll Down</a>
                </div>
            </div>
        </header>
    )
}

export default Header
