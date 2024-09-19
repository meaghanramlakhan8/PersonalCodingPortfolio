import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Let's collaborate if you're committed to technology, education, and innovative problem-solving.</h1>
        <p>I believe in leveraging technology to make a positive impact on the world. My goal is to contribute to meaningful projects and learn continuously. If you feel the same, I'd love to connect.</p>
      </header>

      <section className="about-section">
        <div className="about-card">
          <h2>01</h2>
          <h3>My Journey</h3>
          <p>
            I am currently pursuing a BS in Computer Science with minors in Data Science and Statistics at Rice University, maintaining a GPA of 3.8 on a 4.0 scale. Originally from the vibrant and culturally rich Trinidad and Tobago, my academic journey has been fueled by a passion for technology and a commitment to excellence.
          </p>
          <p>
            During my time at Rice, I've actively engaged in leadership roles, including serving as the Brown College Associate Recording Justice and mentoring high school students through Rice Women in STEM (WiS). I'm a current Public Relations board member for Rice's largest annual hackathon HackRice14 and a student mentor for the Data Exploration and Experiential Projects (DEEP) program at Rice.
          </p>
        </div>
        <div className="about-card">
          <h2>02</h2>
          <h3>Collaborations and Impact</h3>
          <p>
            I served as a Live Instructor Technology Intern at the RCEL ELITE Tech Program, leading classroom sessions on machine learning and robotics. My role as a Teaching Assistant with the Computer Science department at Rice University further honed my skills in algorithms and computational thinking, where I facilitated office hours, responded to student inquiries, and graded assignments.
          </p>
          <p>
            Additionally, I collaborated on a project with NASA L’SPACE Program, where I worked as a Computer Hardware Engineer & Mission Assurance Specialist. This involved designing subsystems and developing software architecture for a cost-effective robotic mission to understand Ceres’ geological attributes.
          </p>
        </div>
        <div className="about-card">
          <h2>03</h2>
          <h3>Technical Proficiency</h3>
          <p>
            I have a strong technical background with proficiency in Python, Java, HTML/CSS, JavaScript, and C. My experience extends to frameworks like React and Node.js, and tools such as Git and AWS services.
          </p>
          <p>
            Some notable projects I've worked on include developing a concurrent web proxy using C, a ticketing platform for Rice Dance Theatre using Node.js and MongoDB, and analyzing FDA adverse event data with Python libraries.
          </p>
        </div>
        <div className="about-card">
          <h2>04</h2>
          <h3>Beyond Work</h3>
          <p>
            When I'm not diving into code, I love exploring new technologies and working on side projects that push the boundaries of innovation. I'm passionate about contributing to open-source communities and staying active in the tech scene.
          </p>
          <p>
            Outside of tech, you'll find me savoring a good cup of coffee, or embarking on adventures to explore Houston with my friends. Let's connect!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
