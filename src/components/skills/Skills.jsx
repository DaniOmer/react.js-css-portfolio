import React from 'react'
import './skills.css'

import Php from '../../assets/skills/php.png'
import JavaScript from '../../assets/skills/javascript.png'
import ReactImg from '../../assets/skills/react.png'
import Node from '../../assets/skills/node.png'
import Mongo from '../../assets/skills/mongo.png'
import HTML from '../../assets/skills/html.png'
import CSS from '../../assets/skills/css.png'
import Tailwind from '../../assets/skills/tailwind.png'
import Sass from '../../assets/skills/sass.png'
import GitHub from '../../assets/skills/github1.png'
import Shopify from '../../assets/skills/shopify.png'
import Aws from '../../assets/skills/aws.png'

const Skills = () => {
  return (
    <section id="skills">
        <h5>What skills I have</h5>
        <h2>My skills</h2>

        <div className="container skills__container">
            <div className="skills__bloc frontend__skills">
                <h4>Frontend</h4>
                <div className="skills">
                    <div className='skill'>
                        <img src={HTML} alt="HTML icon"/>
                        <p>HTML</p>
                    </div>
                    <div className='skill'>
                        <img src={CSS} alt="CSS icon"/>
                        <p>CSS</p>
                    </div>
                    <div className='skill'>
                        <img  src={Sass} alt="Sass icon"/>
                        <p>SASS</p>
                    </div>
                    <div className='skill'>
                        <img src={Tailwind} alt="Tailwind icon"/>
                        <p>TAILWIND</p>
                    </div>
                    <div className='skill'>
                        <img src={JavaScript} className='w-20 mx-auto' alt="JavaScript icon"/>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className='skill'>
                        <img src={ReactImg} alt="ReactImg icon"/>
                        <p>REACT</p>
                    </div>
                </div>
            </div>

            <div className="skills__bloc backend__skills">
                <h4>Backend</h4>
                <div className="skills">
                    <div className='skill'>
                        <img src={Node} alt="Node icon"/>
                        <p>NODE JS</p>
                    </div>
                    <div className='skill'>
                        <img src={Mongo} alt="Mongo icon"/>
                        <p>MongoDB</p>
                    </div>
                    <div className='skill'>
                        <img src={Mongo} alt="Mongo icon"/>
                        <p>EXPRESS</p>
                    </div>
                    <div className='skill'>
                        <img src={Php} className='w-20 mx-auto' alt="PHP icon"/>
                        <p>PHP</p>
                    </div>
                    <div className='skill'>
                        <img src={Php} className='w-20 mx-auto' alt="PHP icon"/>
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
                
            <div className="skills__bloc others__skills">
            <h4>Others skills</h4>
                <div className="skills">
                    <div className='skill'>
                        <img c src={GitHub} alt="GitHub icon"/>
                        <p>GitHub</p>
                    </div>
                    <div className='skill'>
                        <img  src={Shopify} alt="Shopify icon"/>
                        <p>Shopify</p>
                    </div>
                    <div className='skill hover:scale-110 duration-500'>
                        <img  src={Aws} alt="Aws icon"/>
                        <p>AWS</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills