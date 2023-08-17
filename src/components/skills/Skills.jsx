import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return(
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>As a seasoned Full Stack MERN developer, I possess a comprehensive proficiency in developing scalable, responsive, and efficient web applications. My development approach emphasizes clean, modular code, ensuring that the applications I produce are maintainable and performant. With a deep understanding of both front-end and back-end paradigms, I am equipped to transform conceptual visions into fully-realized web solutions.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img className='skillBarImg' src={UIDesign} alt='UIDesign'></img>
                    <div className='skillBarText'>
                        <h2>Server and API Development</h2>
                        <p>I excel at creating reliable and efficient server environments and designing user-friendly APIs. My experience ensures fast response times, top-notch security, and seamless integrations, making digital solutions both robust and easy to use.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img className='skillBarImg' src={WebDesign} alt='WebDesign'></img>
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>Drawing on a deep well of passion for UX/UI design, I specialize in creating visually striking and user-friendly interfaces. My designs prioritize both aesthetics and functionality, ensuring intuitive and engaging user experiences.</p>
                    </div>
                </div>         
                <div className='skillBar'>
                    <img className='skillBarImg' src={AppDesign} alt='AppDesign'></img>
                    <div className='skillBarText'>
                        <h2>App Development</h2>
                        <p>Rooted in a rich foundation of app design principles, my goal is to craft intuitive and visually appealing applications that prioritize user engagement and functionality.</p>
                    </div>
                </div>                         
            </div>
        </section>
    );
}

export default Skills;
