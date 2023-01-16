import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'

const contact = () => {
    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>ddaniomer@gmail.com</h5>
                        <a href="mailto:ddaniomer@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <CiLinkedin className="contact__option-icon"/>
                        <h4>LinkedIn</h4>
                        <h5>Omer DOTCHAMOU</h5>
                        <a href="https://www.linkedin.com/in/omerdotchamou/" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+336 52-72-07-22</h5>
                        <a href="https://api.whatsapp.com/send?phone=+33652720722" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>

                <form action="https://getform.io/f/6ee77c86-f4e5-45ce-82a0-8337a719acff">
                    <input type="text" name="name" placeholder="Your full name" required />
                    <input type="email" name="email" placeholder="Your email" required />
                    <textarea name="message" cols="30" rows="10" placeholder="Your message"></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default contact
