import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scheduler from "../assets/scheduler.jpg";
import hims from "../assets/hims.png";
import graphMyHealth from '../assets/gmh.png';
import adeptwebui from '../assets/xinthesys.png';
import newsbean from '../assets/newsbean.png'

const projectsData = [
    {
        id: 1,
        title: 'GMH (Graph My Health)',
        image: graphMyHealth,
        description: 'A dynamic web application for tracking health metrics.',
        details: `
          GMH is a web application designed to help users monitor various health metrics over time. 
          I led the front-end development using ReactJS and Next.js, ensuring a responsive and user-friendly interface. 
          I focused on modular and scalable software components, memory leak checks, and performance profiling to enhance application speed and efficiency. 
          The application integrates third-party tools like MDB and Matcontrol, and I used Visual Studio Code and WebStorm for development.
        `,
      },
      {
        id: 2,
        title: 'HIMS (Hospital Information Management System)',
        image: hims,
        description: 'A scalable user interface for managing hospital data.',
        details: `
          HIMS is an enterprise-level application designed to streamline hospital operations. 
          My role involved designing and implementing scalable user interfaces for medical professionals using ReactJS. 
          I optimized CSS/SASS and conducted performance tuning for faster load times, 
          ensuring that the application was user-friendly and functional, improving application stability and user satisfaction.
        `,
      },
   
      {
        id: 4,
        title: 'NewsBeen (Online News Portal)',
        image: newsbean,
        description: 'An online platform for submitting and viewing news articles.',
        details: `
          Built interfaces for news article submission and viewing using ReactJS. 
          Developed APIs for article management and user accounts with Node.js and integrated AWS services for scalable storage of media and articles. 
          The application ensured responsive design and optimized backend services for efficient news delivery.
        `,
      },
      {
        id: 5,
        title: 'Adept Web UI',
        image: adeptwebui, 
        description: 'A web UI for visualizing real-time FIX messages for the US stock market.',
        details: `
          Developed a web UI for visualizing real-time FIX messages, enabling instant access to transaction data. 
          I implemented features for data download, sharing, and streamlined submission for review and approval. 
          The platform was built using a microservices architecture with Node.js, Express.js, and Docker, ensuring scalability and efficiency.
        `,
      },
      {
        id: 6,
        title: 'The Scheduler Service',
        image: scheduler,
        description: 'A Job-Scheduler application for scheduling financial data processing tasks.',
        details: `
          Created a Job-Scheduler application for scheduling, maintaining, and monitoring cron jobs for financial data processing. 
          Designed a cluster of services to manage schedules, execute jobs, capture logs, and notify users in real-time. 
          The application was built using Node.js, MongoDB, Redis, and other technologies, ensuring robustness and scalability.
        `,
      },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    rtl: true,
    pauseOnHover: true,
    arrows: true,
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <Slider {...settings}>
        {projectsData.map((project) => (
          <div key={project.id} className="p-4">
            <div
              className="project-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {selectedProject && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            <button
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
