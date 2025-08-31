import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Building usable tech at the intersection of software, data, and education.</h1>
        <p>
          I’m a Computer Science major (B.S.) at Rice University with minors in Data Science and Statistics (GPA 3.8/4.0). 
          Originally from Trinidad and Tobago, I care about translating complex problems into clear, reliable software that helps people.
        </p>
      </header>

      <section className="about-section">
        <div className="about-card">
          <h2>01</h2>
          <h3>My Journey</h3>
          <p>
            At Rice, I’ve balanced coursework with hands-on roles and mentoring. I currently serve as a 
            <strong> Teaching Assistant for COMP 318 (Concurrent Program Design)</strong>, and I’ve held leadership and community roles including 
            Orientation Week Co-Advisor, Women in STEM mentor, HackRice PR Board, CSters, Rice Caribbean Students Society, and DEEP student mentor.
          </p>
          <p>
            Recent experiences include the <strong>CPRIT BIG-TCR Cancer & AI Internship</strong> at UTHealth Houston and software development with <strong>RiceApps</strong>.
          </p>
        </div>

        <div className="about-card">
          <h2>02</h2>
          <h3>Impact & Collaboration</h3>
          <p>
            In the CPRIT internship, I engineered a 5-layer TensorFlow MLP for antibody–protein binding prediction (85%+ accuracy with cross-validation and L2) and 
            extended the BRAINCELL-AID platform with Python/MySQL pipelines for 5,000+ records and interactive visualizations.
          </p>
          <p>
            As a current TA for COMP 318, I guide five teams (three students each) through two full-stack concurrent projects per semester—setting milestones, 
            unblocking technical issues, and reinforcing clean, thread-safe design.
          </p>
          <p>
            Previously, I was a Live Instructor Technology Intern with RCEL’s ELITE Tech Program, leading 40+ sessions in ML and robotics.
          </p>
        </div>

        <div className="about-card">
          <h2>03</h2>
          <h3>Technical Focus</h3>
          <p>
            Languages: Python, Java, JavaScript/TypeScript, Go, SQL, C, R • Frontend: React • Backend: Node.js • 
            ML: TensorFlow, PyTorch • Data: Pandas, NumPy, Matplotlib • Cloud/Tools: AWS (Lambda, API Gateway, S3, RDS, DynamoDB), Git, Linux.
          </p>
          <p>
            Selected projects: <strong>OwlDB</strong> (concurrent NoSQL document DB with REST, skip-list indexing, server-sent events), 
            <strong> LSH Analysis</strong> (benchmarked variants for text similarity), 
            <strong> RDT Ticketing</strong> (full-stack ticketing for Rice Dance Theatre), and 
            <strong> FDA Adverse Events</strong> (risk modeling; Best Underclassmen award).
          </p>
        </div>

    <div className="about-card">
    <h2>04</h2>
    <h3>Beyond the Screen</h3>
    <p>
      Outside of academics and projects, I enjoy exploring design, mentoring peers, and staying engaged with the broader tech community. 
      I also like discovering Houston’s culture and food scene, and experimenting with new hobbies that keep me creative and balanced.
    </p>
    <p>
      I thrive in collaborative environments where curiosity and innovation drive meaningful work—and I’m always looking for opportunities to grow alongside others.
    </p>
  </div>
      </section>
    </div>
  );
};

export default About;
