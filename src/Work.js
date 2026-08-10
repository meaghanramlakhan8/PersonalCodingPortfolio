import React from 'react';
import './Work.css';

const workExperiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Omniscience',
    location: 'Houston, TX',
    duration: 'Present',
    responsibilities: [
      'Build software that ingests and processes complex clinical data for downstream platform use.',
      'Collaborate with engineers across the data platform to improve system reliability, code clarity, and long-term maintainability.',
    ],
  },
  {
    role: 'Data Science & Bioinformatics Intern',
    company: 'UTHealth Houston',
    location: 'Houston, TX',
    duration: 'January 2026 – May 2026',
    responsibilities: [
      'Contributed data science and bioinformatics support to a research project investigating forced vital capacity.',
      'Worked under Dr. Wenjin (Jim) Zheng to analyze research data and support the development of the study.',
      'Contributed technical analyses and research findings to a manuscript developed from the project.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Rice University',
    location: 'Houston, TX',
    duration: 'August 2023 – December 2025',
    responsibilities: [
      'Supported 800+ students across four computer science courses through office hours, online discussions, grading, and technical guidance.',
      'Mentored five teams of three students through two major full-stack projects for Concurrent Program Design (COMP 318).',
      'Provided technical direction, milestone planning, and feedback on algorithms, concurrency, software design, and Python development.',
    ],
  },
  {
    role: 'Cancer & AI Summer Intern',
    company:
      'CPRIT BIG-TCR Program, McWilliams School of Biomedical Informatics at UTHealth Houston',
    location: 'Houston, TX',
    duration: 'June 2025 – August 2025',
    responsibilities: [
      'Built and evaluated a five-layer multilayer perceptron in Python and TensorFlow for antibody–protein binding prediction, achieving 85%+ accuracy with cross-validation and L2 regularization.',
      'Expanded BRAINCELL-AID, a biomedical brain-annotation platform, by developing Python and MySQL pipelines that automated the ingestion of 5,000+ cell records.',
      'Created interactive data visualizations that helped more than 100 users explore and interpret biomedical data.',
    ],
  },
  {
    role: 'Live Instructor Technology Intern',
    company: 'RCEL ELITE Tech Program',
    location: 'Rice University, Houston, TX',
    duration: 'May 2024 – July 2024',
    responsibilities: [
      'Selected as one of 20 instructors to develop and refine educational content in machine learning and robotics.',
      'Led 40+ interactive classroom sessions and translated technical concepts into approachable, hands-on lessons.',
      'Tracked student progress, evaluated assignments, and provided detailed feedback to support learning and engagement.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'RiceApps',
    location: 'Rice University, Houston, TX',
    duration: 'January 2024 – April 2024',
    responsibilities: [
      'Developed and deployed a full-stack ticketing platform for Rice Dance Theatre.',
      'Built features for show listings, seat availability, and ticket-sales management using MongoDB, Node.js, and modern frontend technologies.',
      'Collaborated with a student engineering team to translate organizational needs into a practical, user-friendly product.',
    ],
  },
  {
    role: 'Computer Hardware Engineer & Mission Assurance Specialist',
    company: 'NASA L’SPACE Program — Arizona State University',
    location: 'Remote',
    duration: 'May 2023 – August 2023',
    responsibilities: [
      'Collaborated with an 11-person undergraduate team to design a cost-conscious robotic mission for studying the geology and habitability of Ceres.',
      'Designed elements of the Command and Data Handling subsystem and developed mission-assurance and risk-management strategies.',
      'Produced recurring technical analyses and documentation aligned with NASA-style engineering and review standards.',
    ],
  },
];

export default function WorkExperience() {
  return (
    <main className="work-container page-shell">
      <header className="page-header">
        <p className="eyebrow">ENGINEERING LOG // 02</p>

        <h1>Building reliable software for complex, real-world systems.</h1>

        <p>
          Experience spanning clinical-data infrastructure, biomedical
          research, machine learning, full-stack engineering, systems design,
          and computer science education.
        </p>
      </header>

      <section className="timeline" aria-label="Professional experience">
        {workExperiences.map((experience) => (
          <article
            className="timeline-item"
            key={`${experience.role}-${experience.company}`}
          >
            <div className="timeline-dot" aria-hidden="true" />

            <div className="timeline-content">
              <h2>{experience.role}</h2>
              <h3>{experience.company}</h3>

              <div className="experience-meta">
                <p className="location">{experience.location}</p>
                <p className="duration">{experience.duration}</p>
              </div>

              <ul>
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="resume-section">
        <h2>Looking for the full details?</h2>

        <p>
          Download my résumé for a concise overview of my experience,
          education, projects, and technical skills.
        </p>

        <a
          href="/MRResume.pdf"
          className="resume-button"
          download
          aria-label="Download Meaghan Ramlakhan’s résumé"
        >
          <span>Download my résumé</span>
          <b aria-hidden="true">↓</b>
        </a>
      </section>
    </main>
  );
}