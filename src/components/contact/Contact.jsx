import React from 'react';
import './contact.css';
import linkedin from '../../assets/logo-linkedin.png';
import github from '../../assets/logo-github.png';


const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='contact'>            
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                </form>
                <div id="socials">
                <p className='socialDesc'>
                    I am always intersted in new collaborations. <br />Connect with me and we can build something beautiful together.
                </p>
                <div className='socialImgs'>
                    <a href='https://www.linkedin.com/in/ian-burley/'>
                    <img src={linkedin} alt='linkedin logo' className='socialImg1' />
                    </a>
                    <a href='https://github.com/iburley33'>
                    <img src={github} alt='github logo' className='socialImg2' />
                    </a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact;