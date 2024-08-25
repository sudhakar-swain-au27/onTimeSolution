import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Resume = () => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Sudhakar_Swain_Resume',
    onBeforePrint: () => {
      // You can include additional print styles or functionality here if needed
    },
  });

  return (
    <section className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Header Section */}
      <button
        onClick={handlePrint}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
      >
        Download PDF
      </button>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Sudhakar Swain</h1>
        <p className="text-xl text-gray-700 mb-1">Bhubaneswar, Odisha, India</p>
        <p className="text-xl text-gray-700 mb-2">+91-8093575198 | sudhakar.swain27@gmail.com</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            GitHub
          </a>
          <a
            href="https://your-portfolio-url.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Portfolio
          </a>
        </div>
      </div>

      {/* Resume Content */}
      <div ref={resumeRef}>
        {/* Professional Summary */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
            Professional Summary
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>4+ years of experience in developing full-stack web applications using the MERN stack with hands-on expertise in designing scalable and high-performance applications.</li>
            <li>Developed and optimized RESTful APIs and microservices using Node.js and Express, while integrating MongoDB for efficient data storage and retrieval.</li>
            <li>Proficient in designing responsive and intuitive user interfaces using React.js with extensive knowledge of state management libraries like Redux and Context API.</li>
            <li>Worked with AWS services (EC2, S3, Lambda, RDS) to deploy, scale, and monitor applications.</li>
            <li>Containerized applications using Docker, and created Docker images for streamlined development and deployment.</li>
            <li>Experienced in implementing authentication and authorization using JWT and OAuth, and securing applications with best practices.</li>
            <li>Skilled in integrating third-party APIs and services including payment gateways, email services, and social login integrations.</li>
            <li>Basic understanding of DevOps practices with tools like Docker, Kubernetes, Jenkins, and Terraform.</li>
            <li>Strong understanding of database management and optimization with MongoDB.</li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
            Professional Experience
          </h2>
          
          {/* Job 1 */}
          <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">Associate Software Engineer at C R INFOTECH</h3>
            <p className="text-lg text-gray-600 mb-2">Delhi, India | Jan 2020 - Mar 2023</p>

            {/* Project 1 */}
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Project 1: GMH (Graph My Health)</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Technologies: JavaScript, TypeScript, Next.js, HTML, SCSS, Bootstrap, ReactJS, MDBootstrap</li>
              <li>Developed dynamic web applications and enhanced performance.</li>
              <li>Tracked and resolved application defects.</li>
            </ul>

            {/* Project 2 */}
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Project 2: HIMS (Hospital Information Management System)</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Technologies: JavaScript, TypeScript, ReactJS, HTML, SCSS, Bootstrap</li>
              <li>Designed and implemented scalable user interfaces.</li>
              <li>Optimized CSS/SASS for performance improvements.</li>
            </ul>

            {/* Additional Projects */}
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Additional Projects:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Wedding Venue Platform: Developed a venue booking platform with ReactJS and Node.js.</li>
              <li>NewsBeen: Built an online news portal using ReactJS, Node.js, and AWS services.</li>
            </ul>
          </div>
          
          {/* Job 2 */}
          <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">Associate Software Developer at Xinthesys LLC</h3>
            <p className="text-lg text-gray-600 mb-2">New York, USA | April 2023 - April 2024</p>

            {/* Project 1 */}
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Project 1: Adept Web UI</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Technologies: JavaScript, Gulp, ReactJS, AgGrid, jQuery, Node.js, Docker, AWS, Jenkins</li>
              <li>Developed a web UI for visualizing real-time FIX messages.</li>
              <li>Implemented error detection mechanisms and email notifications.</li>
            </ul>

            {/* Project 2 */}
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Project 2: The Scheduler Service</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Technologies: JavaScript, Node.js, MongoDB, Redis, MQTT Protocol</li>
              <li>Created a job-scheduler application for financial data processing.</li>
              <li>Designed clusters for scheduling, executing jobs, and capturing logs.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>JavaScript Frameworks and Libraries:</strong> Node.js, Express.js, React.js, Redux, Axios, GraphQL, Material-UI, Next.js</li>
            <li><strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS, Python</li>
            <li><strong>AWS Services:</strong> Lambda, S3, IAM, SQS, DynamoDB, EC2, CloudWatch</li>
            <li><strong>CSS Preprocessors:</strong> SASS</li>
            <li><strong>Databases:</strong> MongoDB, MySQL</li>
            <li><strong>Containerization and Deployment:</strong> Docker, Kubernetes, Jenkins, Terraform</li>
            <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">Bachelor of Technology (B.Tech) in Computer Science and Engineering</h3>
            <p className="text-lg text-gray-600 mb-2">Gandhi Institute of Engineering and Technology (GIET), Gunupur, Odisha, India</p>
            <p className="text-lg text-gray-600">2014 - 2018</p>
          </div>
        </div>

        {/* Declaration */}
        <div className="mb-8 text-gray-600">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
            Declaration
          </h2>
          <p>
            I hereby declare that the information furnished above is true to the best of my knowledge and belief. I bear the responsibility for any discrepancies found in the information provided.
          </p>
          <p className="mt-4">
            <span className="font-semibold">Place:</span> Bhubaneswar, Odisha, India
          </p>
          <p className="mt-4">
            <span className="font-semibold">Date:</span> {new Date().toLocaleDateString()}
          </p>
          <p className="mt-4">
            <span className="font-semibold">Signature:</span> Sudhakar Swain
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
