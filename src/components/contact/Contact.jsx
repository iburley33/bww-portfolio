import React, { useRef } from 'react';
import './contact.css';
import linkedin from '../../assets/logo-linkedin.png';
import github from '../../assets/logo-github.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r0g5oay', 'contact_form', form.current, 'QgWiNyqodhjyAAAOe')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Your message has been sent. I look forward to speaking with you soon!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form ref={form} onSubmit={sendEmail} className='contactForm'>
                    <input type='text' name="user_name" className='name' placeholder='Your Name' />
                    <input type="email" name="user_email" className="email" placeholder='Your Email' />
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