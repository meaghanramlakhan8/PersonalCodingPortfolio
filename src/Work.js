import React from 'react';
import './Work.css';

const workExperiences = [
  {
    role: "Teaching Assistant",
    company: "Rice University",
    location: "Houston, TX",
    duration: "August 2023 – Present",
    responsibilities: [
      "Conducted and facilitated weekly office hours for 500+ students across three courses (COMP 140, COMP 182, COMP 382).",
      "Provided detailed support and guidance in algorithms, data structures, and Python3.",
      "Responded promptly to 200+ inquiries on the class Piazza forum.",
      "Evaluated and graded 500+ assignments, quizzes, and exams."
    ]
  },
  {
    role: "Live Instructor Technology Intern",
    company: "RCEL ELITE Tech Program",
    location: "Rice University, Houston, TX",
    duration: "May 2024 – July 2024",
    responsibilities: [
      "Designed and refined canvas and course materials on machine learning and robotics.",
      "Led 20+ classroom sessions on cutting-edge machine learning and robotics topics.",
      "Provided detailed feedback and managed attendance and grading with accuracy."
    ]
  },
  {
    role: "Software Developer",
    company: "RiceApps",
    location: "Rice University, Houston, TX",
    duration: "January 2024 – April 2024",
    responsibilities: [
      "Developed an innovative ticketing platform for Rice Dance Theatre.",
      "Leveraged advanced web technologies for a seamless user experience."
    ]
  },
  {
    role: "Computer Hardware Engineer & Mission Assurance Specialist",
    company: "NASA L’SPACE Program - ASU",
    location: "Remote (Headquartered in Arizona)",
    duration: "May 2023 – August 2023",
    responsibilities: [
      "Collaborated with 11 undergraduate students to conceptualize a cost-effective robotic mission.",
      "Designed intricate Command and Data Handling subsystems.",
      "Developed comprehensive software architecture and risk management strategies."
    ]
  }
];

const WorkExperience = () => {
  return (
    <div className="work-container">
      <header>
        <h1>Professional Experience</h1>
        <p>Here is a summary of my professional journey and the roles I've undertaken. Scroll through the timeline to learn more about my responsibilities and achievements.</p>
      </header>

      <section className="timeline">
        {workExperiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2>{experience.role}</h2>
              <h3>{experience.company}</h3>
              <p className="location">{experience.location}</p>
              <p className="duration">{experience.duration}</p>
              <ul>
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Resume Download Section */}
      <div className="resume-section">
        <h2>Want to Learn More?</h2>
        <p>For a more detailed overview of my experience, feel free to download my resume below.</p>
        <a href="/MRResume.pdf" className="resume-button" download>
          <i className="fas fa-file-download"></i> Download My Resume
        </a>
      </div>
    </div>
  );
}

export default WorkExperience;
