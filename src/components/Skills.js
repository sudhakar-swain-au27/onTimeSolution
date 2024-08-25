import React from 'react';
import nodeImage from '../assets/nodejs.png';
import reactImage from '../assets/react.png';
import reduxImage from '../assets/redux.png';
import awsImage from '../assets/aws.png';
import sassImage from '../assets/sass.png';
import mongodbImage from '../assets/mongodb.jpeg';
import mysqlImage from '../assets/mysql.png';
import gitImage from '../assets/git.png';

const skillImages = {
  node: nodeImage,
  react: reactImage,
  redux: reduxImage,
  aws: awsImage,
  sass: sassImage,
  mongodb: mongodbImage,
  mysql: mysqlImage,
  git: gitImage,
};

const skills = [
  { name: 'Node.js', image: skillImages.node },
  { name: 'React.js', image: skillImages.react },
  { name: 'Redux', image: skillImages.redux },
  { name: 'AWS Services', image: skillImages.aws },
  { name: 'SASS', image: skillImages.sass },
  { name: 'MongoDB', image: skillImages.mongodb },
  { name: 'MySQL', image: skillImages.mysql },
  { name: 'Git', image: skillImages.git },
];

const Skills = () => {
  return (
    <section className="p-8 max-w-full mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-cover rounded-full mb-2 shadow-lg"
            />
            <span className="text-lg font-medium text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
