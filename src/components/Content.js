import React from "react";
import profile from "../assets/profile.jpg";
import frontend from "../assets/frontend.webp";
import backend from "../assets/backend.webp";

const Content = () => {
  return (
    <div className="font-sans">

      {/* Header Section */}
      <div className="bg-orange-500 text-white text-center py-16">
        <img 
          src={profile} 
          alt="Person Image" 
          className="mx-auto rounded-full mb-6 w-24 h-24 object-cover"
        />
        <h1 className="text-xl font-bold mb-4">
        Full-Stack Developer with 4 years of experience in MERN stack (MongoDB, Express.js, ReactJS, Node.js) and Python. Skilled in building scalable applications, optimizing performance, and integrating cloud services (AWS).
        </h1>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Transforming Businesses Through Scalable IT Solutions</h2>
        <div className="flex justify-around">
          <div className="text-center max-w-xs">
            <div className="text-6xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="text-gray-600">Full-stack developer with 4+ years of experience in the MERN stack. Skilled in building scalable apps, from responsive UIs with React.js to efficient backends using Node.js and MongoDB. Committed to delivering clean code and seamless user experiences.</p>
          </div>
          <div className="text-center max-w-xs">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold">Create It</h3>
            <p className="text-gray-600">I create dynamic applications with a focus on performance and design. Whether it’s intuitive interfaces with React or optimized backend services, I aim to deliver solutions that are both efficient and visually appealing</p>
          </div>
          <div className="text-center max-w-xs">
            <div className="text-6xl mb-4">📈</div>
            <h3 className="text-xl font-semibold">What we do</h3>
            <p className="text-gray-600">I build full-stack web solutions, focusing on responsive UIs, scalable backends, and seamless deployment using AWS and Docker. My goal is to help businesses boost productivity and streamline operations.</p>
          </div>
        </div>
      </div>

      {/* Marketing Section */}
      <div className="py-16 bg-gray-100 text-center">
  <h2 className="text-xl font-bold mb-8">MERN-Stack Applications</h2>
  <div className="flex justify-around">
    <div className="max-w-sm">
      <img 
        src={frontend} 
        alt="Frontend Technologies" 
        className="w-48 h-48 mb-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out" 
      />
      <h3 className="text-xl font-semibold">Frontend Technologies</h3>
      <p className="text-gray-600">Over 4 years of experience in frontend development, specializing in React.js and Next.js. Proficient in creating responsive interfaces with state management using Redux and Context API. Skilled in React hooks, SCSS, Bootstrap, and Material-UI, consistently delivering optimized, user-friendly designs that enhance productivity.</p>
    </div>
    <div className="max-w-sm">
      <img 
        src={backend} 
        alt="Backend Technologies" 
        className="w-48 h-48 mb-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out" 
      />
      <h3 className="text-xl font-semibold">Backend Technologies</h3>
      <p className="text-gray-600">4+ years of backend experience with Node.js and Express.js, focused on building scalable APIs and microservices. Proficient in MongoDB, AWS (EC2, S3, Lambda), Docker, and CI/CD pipelines. Expertise in performance optimization, security (JWT, OAuth), and automation for streamlined development and deployment.</p>
    </div>
  </div>
</div>


      

    </div>
  );
};

export default Content;
