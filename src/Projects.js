// Projects.js
import React from 'react';
import './Projects.css'; // Import the custom CSS for styling

function Projects() {
  // Updated project data from your resume with multiple images and a YouTube video
  const projects = [
    {
      title: "RDT Ticketing Application",
      description: "Developed an innovative ticketing platform for Rice Dance Theatre with Rice App Development Club RiceApps, leveraging advanced web technologies for a seamless user experience.",
      technologies: ["MongoDB", "HTML/CSS", "JavaScript", "Node.js"],
      images: ["/rdt-ticketing3.png","/rdt-ticketing1.png", "/rdt-ticketing2.png"], // Replace with your actual image paths
      codeLink: "https://github.com/rice-apps/rdt-ticketing/tree/main/client",
    },
    {
      title: "Analyzing Reported FDA Adverse Events",
      description: "Collaborated on a data science initiative to examine safety risks in consumer products using FDA's Adverse Event Reporting System data.",
      technologies: ["Python", "Numpy", "Pandas", "Sci-Kit Learn"],
      images: ["fda-adverse-events1.png", "fda-adverse-events2.png","fda-adverse-events3.png"], // Replace with your actual image paths
      codeLink: "https://devpost.com/software/analysing-reported-fda-adverse-events-of-consumer-products?ref_content=user-portfolio&ref_feature=in_progress",
    },
    {
      title: "Concurrent Web Proxy",
      description: "Developed a concurrent web proxy using threads to handle multiple client requests and implemented logging to analyze traffic patterns.",
      technologies: ["C", "Networking", "Concurrency"],
      images: ["proxy.png"], // Changed to an array with a single image
      codeLink: "https://github.com/meaghanramlakhan8/concurrent-web-proxy",
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
                  frameBorder="0"
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
