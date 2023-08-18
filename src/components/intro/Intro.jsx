import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import bg from '../../assets/self.jpg';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Ian Burley</span><br />Full Stack Developer</span>
                <p className='introPara'>
                    I’m a seasoned web developer and a proud family man passionate about the confluence of technology and life's adventures. With my wife, two delightful daughters, and our exuberant golden-doodle, Jake, we're on a continuous quest for fresh experiences.
                </p>
                <a href='/resume.pdf' download>
                <button className='hireBtn'><img src={btnImg} alt='hire me' className='btnImg' /> Hire Me</button>
                </a>
            </div>
            <img src={bg} alt='profile' className='bg' />
        </section>
    )
}

export default Intro;