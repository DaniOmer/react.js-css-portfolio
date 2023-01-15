import React from 'react'
import CV from '../../assets/resumeOmer.pdf'

const CallToAction = () => {
    return (
        <div className="callToAction">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
    )
}

export default CallToAction
