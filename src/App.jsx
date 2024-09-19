import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, File, ChevronDown } from 'lucide-react';
import './index.css';

const projects = [
  { id: 1, title: 'Non-Profit Website', description: 'Designed and built user interface layout and structured the web content to improve the overall usability and user experience.', url: 'https://www.therapyadventures.org/' },
  { id: 2, title: 'Clinical Services Website', description: 'Developed a website to promote the services offered and to build digital presence.', url: 'https://chicagoabatherapy.com/' },
  { id: 3, title: 'Landing Page Design-1', description: 'Implemented a website landing page design.', url: 'https://drive.google.com/file/d/1H4I1qrg1wF07MlVLLprFjFx_59UEk7fz/view?usp=sharing' },
  { id: 4, title: 'Landing Page Design-2', description: 'Implemented a website landing page design.', url: 'https://drive.google.com/file/d/1eEz9NyMUMW00s-WPYGFO4c5EsBOGwLF1/view?usp=sharing' },
  { id: 5, title: 'Landing Page Design-3', description: 'Implemented a website landing page design.', url: 'https://drive.google.com/file/d/1VsVcPcucTgGSHfnF2e0zmzQcARt46Z_Q/view?usp=sharing' },
  { id: 6, title: 'Work Time-Tracker', description: ' Implemented comprehensive tool that effortlessly tracks fieldwork hours reducing bottlenecks of regular timesheets.', url: 'https://ripleyfieldworktracker.com/' },
];

const skills = [ 'Web Design & Development', 'WordPress', 'PHP', 'React', 'JavaScript', 'CSS', 'HTML', 'SQL', 'JQuery', 'Bootstrap', 'Adobe Photoshop', 'Figma', 'MailChimp', 'Google Analytics', 'Git', 'AWS', 'CI/CD'];

const education = ['Master\'s in Computer Science@CUW', 'Bachelor\'s in Information Technology@JNTUH']

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-white font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 shadow-lg z-10">
        <nav className="flex justify-between container mx-auto px-6 py-2">
          <a href='./' style={{ cursor: 'pointer' }}>
            <img src="portfolio-logo.svg" className="p-0 m-0" alt="Portfolio Logo" style={{width: '40px', height: '40px'}} />
          </a>
          <div>
            <ul className="flex justify-center space-x-6">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <motion.li
                  key={section}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    // className={`text-lg ${activeSection === section ? 'font-bold' : 'font-semibold'} px-4 py-2 rounded-full ${
                    //   activeSection === section ? 'text-orange-600' : 'text-gray-800'

                    className={`text-lg px-4 py-2 font-semibold rounded-full text-gray-800 hover:text-yellow-500 transition duration-300`}
                    aria-current={activeSection === section ? 'page' : undefined}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main container with scroll snapping */}
      <main className="pt-20 snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Home Section */}
        <section id="home" className="snap-start hero-container min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-6xl font-bold mb-4 animate-bounce"
              variants={itemVariants}
            >
              Welcome, I'm Dinesh!!
            </motion.h1>
            <motion.p
              className="text-2xl mb-8"
              variants={itemVariants}
            >
              A Developer with a passion to create great web experiences.
            </motion.p>
            {/* <motion.img
              src="/api/placeholder/150/150"
              alt="Developer"
              className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
              variants={itemVariants}
            /> */}
            <motion.div
              variants={itemVariants}
              className="animate-ping flex justify-center mt-5"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section id="about" className="snap-start min-h-screen pt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-white"
      variants={itemVariants}
    >
      About Me
    </motion.h2>

    <div className="flex flex-col justify-center sm:flex-row container mx-auto px-4 sm:px-6 py-3">
      <div className="flex flex-nowrap justify-center sm:justify-around gap-4 sm:gap-6 flex-wrap">
        {education.map((education, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg text-sm sm:text-lg font-semibold border border-white"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            {education}
          </motion.div>
        ))}
      </div>
    </div>

    <motion.p
      className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-center text-gray-100 mt-6 sm:mt-2"
      variants={itemVariants}
    >
      Hello! I'm a passionate developer with expertise in building dynamic and responsive web applications. I enjoy tackling challenging problems and continuously learning new technologies to enhance my skills. When I'm not coding, I love exploring new places, reading books, and involving in activities that keep pushing my adrenaline.
    </motion.p>
  </div>

  <div className="container mx-auto px-4 sm:px-3 lg:px-8">
    <motion.h5
      className="text-3xl sm:text-3xl md:text-3xl font-bold mt-10 mb-5 text-center text-white"
      variants={itemVariants}
    >
      Skills
    </motion.h5>

    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg text-sm sm:text-lg font-semibold"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Projects Section */}
        <section id="projects" className="snap-start min-h-screen py-20 bg-gradient-to-t from-green-500 to-blue-500">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-5xl font-bold mb-12 text-center"
              variants={itemVariants}
            >
              My Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex flex-col bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="flex-grow pb-2">{project.description}</p>

                  <a href={project.url} target='_blank' style={{ textDecoration: 'underline', color: 'white' }}>
                  <motion.div
                    className="text-center bg-white border border-white bg-opacity-20 backdrop-filter backdrop-blur-lg px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg text-sm sm:text-lg font-semibold mt-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    style={{ marginTop: 'auto' }} // This pushes the button to the bottom
                  >
                    View
                  </motion.div>
                  </a>

                </motion.div>
              ))}
            </div>
          </div>
        </section>


       

        {/* Contact Section */}
        <section id="contact" className="snap-start min-h-screen flex  flex-col justify-center align-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              className="text-5xl font-bold mb-8"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-2xl mb-12"
              variants={itemVariants}
            >
              Feel free to reach out for collaborations or just a friendly hello
            </motion.p>
            <div className="flex justify-center space-x-8">
              {/* <motion.a
                href="#"
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-full"
              >
                <Github size={40} />
              </motion.a> */}

              <motion.a
                href="mailto:kommera.dineshreddy@gmail.com"
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-full"
              >
                <Mail size={40} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/dinesh-kommera/"
                target='_blank'
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-full"
              >
                <Linkedin size={40} />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/17NFXBZNHWrU2hBkloH1uE3uMUZFSz_84/view?usp=sharing"
                target='_blank'
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-full"
              >
                <File size={40} />
              </motion.a>

              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
