import React from 'react';
import './resume.css';
import { Link } from 'react-scroll';
import js from '../../assets/logo-js.png';
import apollo from '../../assets/logo-apollo.png';
import react from '../../assets/logo-react.png';
import mysql from '../../assets/logo-mysql.png';
import mongo from '../../assets/logo-mongodb.png';
import html from '../../assets/logo-html.png';
import css from '../../assets/logo-css.png';
import jquery from '../../assets/logo-jquery.png';
import node from '../../assets/logo-node.png';
import express from '../../assets/logo-express.png';
import graphql from '../../assets/logo-graphql.png';
import jest from '../../assets/logo-jest.png';
import git from '../../assets/logo-git.png';
import heroku from '../../assets/logo-heroku.png';
import aws from '../../assets/logo-aws.png';
import bulma from '../../assets/logo-bulma.png';
import bootstrap from '../../assets/logo-bootstrap.png';

const Resume = () => {
    return (
        <section id='resume'>
            <span className='techTitle'>Tech Proficiencies</span>
            <div className='techBars'>
                <div className='techBar'>
                    <h3>Front End</h3>
                    <div className='techBarContent'>
                        <div className='tech'>
                            <img className='techBarImg' src={js} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={react} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>React</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={html} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>HTML</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={css} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>CSS</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={bootstrap} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>BootStrap</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImgB' src={bulma} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>Bulma</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={jquery} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>jQuery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='techBar'>
                    <h3>Back End</h3>
                    <div className='techBarContent'>
                        <div className='tech'>
                            <img className='techBarImg' src={mongo} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={express} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>Express.js</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={node} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>Node.js</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={graphql} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>GraphQL</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={apollo} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>Apollo</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={mysql} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>MySQL</p>
                            </div>
                        </div>

                        <div className='tech'>
                            <img className='techBarImg' src={jest} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>Jest</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='techBar'>
                    <h3>Tools & Methodologies</h3>
                    <div className='techBarContent'>
                        <div className='tech'>
                            <img className='techBarImg' src={git} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>Git</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={heroku} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>Heroku</p>
                            </div>
                        </div>
                        <div className='tech'>
                            <img className='techBarImg' src={aws} alt='UIDesign'></img>
                            <div className='techBarText'>
                                <p>AWS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Resume;