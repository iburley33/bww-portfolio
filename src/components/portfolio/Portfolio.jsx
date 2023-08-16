import React from "react";
import './portfolio.css';
import portfolio1 from '../../assets/BH SS.png';
import portfolio2 from '../../assets/eatball.png';
import portfolio3 from '../../assets/velocity2.png';

const Portfolio = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="workDesc">Here is a glimpse into the projects I've had the privilege to work on. My portfolio reflects my efforts to merge thoughtful design with usability. While I always strive for improvement, I hope these pieces convey my dedication to crafting meaningful user experiences and my journey in the design field.</span>
            <div className="worksImgs">
                <a href='https://main.d1nlbx8b203g2u.amplifyapp.com/'>
                    <div className="work">
                        <h3>Burley Home</h3>
                        <img src={portfolio1} alt="BH screenshot" className="worksImg" />
                        <p>(Current Project) <br />A full service E-commerce app for home design and high end furniture shopping.</p>
                    </div>
                </a>
                <a href='https://lit-brushlands-86158.herokuapp.com/'>
                    <div className="work">
                        <h3>The Magic Eat Ball</h3>
                        <img src={portfolio2} alt="eatball screenshot" className="worksImg" />
                        <p>A conversation starter and a conversation ender. Let The Magic Eatball decide your next meal for you and your family.</p>
                    </div>
                </a>
                <a href='https://young-river-94596.herokuapp.com/'>
                    <div className="work">
                        <h3>Velocity</h3>
                        <img src={portfolio3} alt="velocity screenshot" className="worksImg" />
                        <p>Your one stop shop for all things cycling. Find your nearest cycling route and current weather conditions in one quick search.</p>
                    </div>
                </a>

            </div>
        </section>
    )
}

export default Portfolio;