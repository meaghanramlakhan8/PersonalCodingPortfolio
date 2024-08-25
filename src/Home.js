import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <div className="header">
                <div className="introduction">
                    <span className="loader-text">Hi, I'm Meaghan Ramlakhan</span>
                </div>
            </div>
            <div className='OtherHeader'>
                <img src="photo.png" alt="Meaghan Ramlakhan" className="avatar" />
                <p className="intro"><span className="rotating-text">
                    <span>Computer Science Major</span>
                    <span>Data Science Enthusiast</span>
                    <span>Technology Advocate</span>
                    <span>Passionate about Teaching</span>
                    <span>Innovator</span>
                    <span>Problem Solver</span>
                </span></p>
            </div>
            <div className="work-experience">
                <h2>Welcome to my Portfolio!</h2>
                <div className="flip-card-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Brief Bio</h3>
                            </div>
                            <div className="flip-card-back">
                            <p> I am a rising junior at Rice University pursuing a Bachelor's degree with an intent to minor in Data Science & Statistics.<span class="link-span"><a href="/about">Click here to learn more</a></span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Work Experience</h3>
                            </div>
                            <div className="flip-card-back">
                                <p>I have served various teaching positions within my career, with my current position being a Reasoning About Algorithms (COMP 382) Teaching Assistant.<span class="link-span"><a href="/work">Click here to learn more about my experience and Skills</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>Projects</h3>
                            </div>
                            <div className="flip-card-back">
                                <p> I have completed numerous projects related to my field of study. <span class="link-span"><a href="/projects">Click here to learn more about my projects</a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
