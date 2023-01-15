import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
        </div>
    )
}

export default HeaderSocials
