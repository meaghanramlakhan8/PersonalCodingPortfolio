import React from 'react';
import './Projects.css'; 

function Projects() {
  const projects = [
    {
      title: "RDT Ticketing Application",
      description: "Developed an innovative ticketing platform for Rice Dance Theatre with Rice App Development Club RiceApps, leveraging advanced web technologies for a seamless user experience.",
      technologies: ["MongoDB", "HTML/CSS", "JavaScript", "Node.js"],
      images: ["/rdt-ticketing2.png"],
      codeLink: "https://github.com/rice-apps/rdt-ticketing/tree/main/client",
    },
    {
      title: "Analyzing Reported FDA Adverse Events",
      description: "Collaborated on a data science initiative to examine safety risks in consumer products using FDA's Adverse Event Reporting System data.",
      technologies: ["Python", "Numpy", "Pandas", "Sci-Kit Learn"],
      images: ["/fda-adverse-events3.png"],
      codeLink: "https://devpost.com/software/analysing-reported-fda-adverse-events-of-consumer-products?ref_content=user-portfolio&ref_feature=in_progress",
    },
    {
      title: "Concurrent Web Proxy",
      description: "Developed a concurrent web proxy using threads to handle multiple client requests and implemented logging to analyze traffic patterns.",
      technologies: ["C", "Networking", "Concurrency"],
      images: ["/proxy.png"],
      codeLink: "https://github.com/meaghanramlakhan8/concurrent-web-proxy",
    },
    {
      title: "Locality-Sensitive Hashing for Text Similarity",
      description: "Researched and implemented Locality-Sensitive Hashing (LSH) methods (Signed Random Projections and K-means LSH) to efficiently approximate nearest neighbor searches in high-dimensional text data.",
      technologies: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
      images: ["/compute_lsh_precisions.png"],
      codeLink: "https://github.com/meaghanramlakhan8/Locality-Sensitive-Hashing-Analysis-for-Text-Similarity-Search", // Replace with actual link
    },
    {
      title: "OwlDB and M3ssag1n8 Web Application",
      description: "Designed and implemented OwlDB, a network-accessible NoSQL document database using Go, serving as the backend for M3ssag1n8, a real-time messaging application. The system provides robust JSON document storage with features like atomic transactions and event-driven updates, integrated seamlessly with the TypeScript front-end client.",
      technologies: ["HTML", "CSS", "TypeScript", "OwlDB"],
      images: ["/messaging.png"],
      codeLink: "",
    },
    {
      title: "Hypertension-related Cardiovascular Disease Mortality Analysis",
      description: "Explored hypertension-related CVD mortality trends among US adults, focusing on demographic, geographic, and health insurance factors. Utilized advanced statistical methods and data visualization to uncover disparities and temporal trends.",
      technologies: ["R", "dplyr", "ggplot2", "SQL"],
      images: ["/image.png"],
      codeLink: "https://github.com/your-repo/hypertension-cvd-analysis", // Replace with actual link
    },
    {
    title: "BRAINCELL-AID Biomedical Annotation Platform",
    description: "Extended the BRAINCELL-AID web platform by designing Python/MySQL pipelines for automated data ingestion and processing of 5,000+ cell records, and building interactive data visualizations to support 100+ users.",
    technologies: ["Python", "MySQL", "Data Visualization", "Pipelines"],
    images: ["/braincell-aid.png"],
    codeLink: "https://biodataai.uth.edu/BRAINCELL-AID/BRAINCELL-AID.py",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-header">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-media">
              {project.images && Array.isArray(project.images) ? (
                <div className="image-gallery">
                  {project.images.map((image, imgIndex) => (
                    <img src={image} alt={`${project.title} screenshot ${imgIndex + 1}`} key={imgIndex} className="project-image" />
                  ))}
                </div>
              ) : (
                <iframe
                  className="project-video"
                  src={project.videoLink}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="tech-list">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">{tech}</span>
                ))}
              </div>
              <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
