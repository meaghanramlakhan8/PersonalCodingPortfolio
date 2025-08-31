import React from 'react';
import './Work.css';

const workExperiences = [
  {
    role: "Teaching Assistant",
    company: "Rice University",
    location: "Houston, TX",
    duration: "August 2023 – Present",
    responsibilities: [
      "Served as a Teaching Assistant for four Computer Science courses, supporting 800+ students through office hours, Piazza responses, and grading.",
      "Currently TA for Concurrent Program Design (COMP 318), managing five groups of three students on two major full-stack projects.",
      "Guided teams with technical direction and milestone tracking in algorithms, concurrency, and Python 3."
    ]
  },
  {
    role: "Cancer & AI Summer Intern",
    company: "CPRIT BIG-TCR Program, McWilliams School of Biomedical Informatics at UTHealth Houston",
    location: "Houston, TX",
    duration: "June 2025 – August 2025",
    responsibilities: [
      "Engineered a 5-layer MLP neural network in Python/TensorFlow for antibody–protein binding prediction, achieving 85%+ accuracy with cross-validation and L2 regularization.",
      "Extended BRAINCELL-AID, a biomedical brain annotation platform, by designing Python/MySQL pipelines for automated ingestion of 5,000+ cell records.",
      "Built interactive data visualizations to support 100+ users."
    ]
  },
  {
    role: "Live Instructor Technology Intern",
    company: "RCEL ELITE Tech Program",
    location: "Rice University, Houston, TX",
    duration: "May 2024 – July 2024",
    responsibilities: [
      "Selected as one of 20 instructors to design and refine course materials on machine learning and robotics.",
      "Led 40+ classroom sessions, delivering interactive lessons and detailed feedback.",
      "Managed grading, attendance, and student engagement with precision."
    ]
  },
  {
    role: "Software Developer",
    company: "RiceApps",
    location: "Rice University, Houston, TX",
    duration: "January 2024 – April 2024",
    responsibilities: [
      "Developed and deployed a full-stack ticketing platform for Rice Dance Theatre.",
      "Built show listings, seat availability, and ticket sales management features with MongoDB, Node.js, and modern frontend technologies."
    ]
  },
  {
    role: "Computer Hardware Engineer & Mission Assurance Specialist",
    company: "NASA L’SPACE Program - ASU",
    location: "Remote (Headquartered in Arizona)",
    duration: "May 2023 – August 2023",
    responsibilities: [
      "Collaborated with 11 undergraduate students nationwide to conceptualize a cost-effective robotic mission to study Ceres’ geology and habitability.",
      "Designed Command and Data Handling subsystems and developed risk management strategies.",
      "Delivered detailed documentation and analysis triweekly in line with NASA standards."
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
