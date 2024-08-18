import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import aboutSvg from '../assets/about.svg';
import heroImg from '../assets/hero.svg';
import adeptwebui from '../assets/adeptwebui.webp';
import theScheduler from '../assets/scheduler.webp';
import ExperienceChart from './ExperienceChart';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'ADEPT WEB UI',
      text: 'Created a tailored web UI solution for US stock market clients, granting instant access to real-time FIX messages, optimizing data management and communication. Employing modern tech stacks and intuitive design, clients seamlessly navigate and engage with their transaction data.',
      img: adeptwebui,
      github: 'https://github.com/project1',
      url: 'https://project1.com',
    },
    {
      id: 2,
      title: 'The scheduler',
      text: 'Creation of "Job-Scheduler application which allows users to schedule maintain and monitor cron-jobs. Clients can schedule jobs for various tasks at various stages of Finacial data processing according to requirements Job-Scheduler is a clustur of services which manages maintaining schedules, executing jobs capturing logs, notifying users, etc. Job-Scheduler makes use of Cron-jobs, ',
      img: theScheduler ,
      github: 'https://github.com/project2',
      url: 'https://project2.com',
    },
    // Add more projects here
  ];

  const skills = [
    { id: 1, icon: '💻', title: 'JavaScript', text: 'Proficient in modern JS.' },
    { id: 2, icon: '⚛️', title: 'React', text: 'Experience with React.js.' },
    { id: 3, icon: '☁️', title: 'AWS', text: 'Knowledge in cloud computing services.' },
    { id: 4, icon: '🚀', title: 'Express.js', text: 'Backend framework for Node.js.' },
    { id: 5, icon: '🌐', title: 'Node.js', text: 'Server-side JavaScript environment.' },
    { id: 6, icon: '🐳', title: 'Docker', text: 'Containerization for app deployment.' },
    { id: 7, icon: '🖥️', title: 'HTML & CSS', text: 'Proficient in web design and styling.' },
    { id: 8, icon: '🔄', title: 'Next.js', text: 'React framework for server-side rendering.' },
    { id: 9, icon: '🐍', title: 'Python', text: 'Versatile programming language.' },
    { id: 10, icon: '📊', title: 'Ag-Grid', text: 'Data grid library for complex data display.' },
    { id: 11, icon: '🍃', title: 'MongoDB', text: 'NoSQL database for scalable apps.' },
    { id: 12, icon: '🗄️', title: 'MySQL', text: 'Relational database management system.' },
    { id: 13, icon: '🔗', title: 'HTTP', text: 'Protocol for data communication.' },
    { id: 14, icon: '🔌', title: 'REST API', text: 'Design and implementation of RESTful services.' }
  ];

  const SectionTitle = ({ text }) => (
    <div className='container mx-auto px-4 border-b border-gray-200 pb-5'>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  );

  const ProjectsCard = ({ img, github, url, title, text }) => (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64'
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <FaGithubSquare className='h-8 w-8 text-gray-800 hover:text-black transition duration-300' />
          </a>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <TbWorldWww className='h-8 w-8 text-gray-800 hover:text-black transition duration-300' />
          </a>
        </div>
      </div>
    </article>
  );

  const SkillsCard = ({ icon, title, text }) => (
    <article className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300'>
      <span className='text-4xl mb-4 text-emerald-600'>{icon}</span>
      <h4 className='text-lg font-semibold mb-2 text-gray-900'>{title}</h4>
      <p className='text-gray-600'>{text}</p>
    </article>
  );

  return (
    <div>
      {/* Hero Section */}
      <div className='py-24 font-poppins'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 items-center gap-8'>
            <article>
              <h1 className='text-5xl lg:text-7xl font-extrabold tracking-wide leading-tight text-green-700'>
                I&apos;m Sudhakar
              </h1>
              <p className='mt-4 text-2xl lg:text-3xl text-green-700 font-medium capitalize tracking-wide'>
                MERN-Stack Developer
              </p>
              <p className='mt-2 text-lg lg:text-xl text-green-700 capitalize tracking-wide'>
                Turning ideas into interactive reality
              </p>
              <div className='flex gap-x-4 mt-4'>
                <a href='https://github.com/sudhakar-swain-au27'>
                  <FaGithubSquare className='h-8 w-8 text-gray-800 hover:text-emerald-600 transition duration-300' />
                </a>
                <a href='https://www.linkedin.com/in/fullstacksudhakar-swain-7110b1171/'>
                  <FaLinkedin className='h-8 w-8 text-blue-700 hover:text-blue-900 transition duration-300' />
                </a>
              </div>
            </article>
            <article className='hidden md:block'>
              <img src={heroImg} className='w-full h-80 lg:h-96 object-cover' alt='Hero' />
            </article>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className='bg-white py-20 text-green-700' id='about'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64 object-cover' alt='About' />
            <article>
              <SectionTitle text='About Me' />
              <p className='text-slate-600 mt-8 leading-loose'>
                As a MERN Stack Developer with over 3.5+ years of experience, I specialize in building robust web applications using React.js, Redux, Node.js, and Express.js. My expertise extends to developing RESTful APIs, implementing business logic layers, and working with both relational and non-relational databases like MySQL and MongoDB. I am proficient in using unit testing frameworks such as Jest. My objective is to leverage my skills and knowledge to contribute to the growth and success of an innovative organization.
              </p>
              <a
                href='/sudhakar_swain.pdf'
                download
                className='inline-block mt-8 px-6 py-2 bg-emerald-600 text-white font-semibold rounded hover:bg-emerald-700 transition duration-300'
              >
                Download Resume
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='container mx-auto px-4 py-20 text-green-700' id='skills'>
        <SectionTitle text='Tech Stack' />
        <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill) => (
            <SkillsCard key={skill.id} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-20 bg-white' id='projects'>
        <div className='container mx-auto px-4 text-green-700'>
          <SectionTitle text='Web Creations' />
          <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <ProjectsCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
       {/* Experience Chart Section */}
       <section className=' py-20' id='experience'>
        <div className='container mx-auto px-4 text-green-700'>
          <SectionTitle text='Tech Knowledge and Experience' />
          <ExperienceChart /> 
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
