import { motion } from 'framer-motion'
import { Code, Music, Gamepad2, ExternalLink, Github, Briefcase, User, Database, Globe, Smartphone } from 'lucide-react'

const Projects = () => {
  const professionalProjects = [
    {
      title: 'HRMS Web Application',
      description: 'Full-stack HR Management System developed for client with comprehensive employee management features including attendance, leave management, and role-based access control.',
      icon: Briefcase,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      link: '#',
      github: '#',
      technologies: ['ReactJS', 'Material UI', 'Python (Flask)', 'MySQL'],
      category: 'Professional',
      details: [
        'Developed frontend using ReactJS with Material UI for responsive and user-friendly UI',
        'Designed and implemented Flask-based backend APIs for managing employee data, attendance, leave, and role-based access',
        'Used MySQL as the database for securely storing user and employee records',
        'Integrated secure login, user roles, and CRUD operations for employee management',
        'Handled complete frontend-backend integration, authentication, and dynamic data rendering'
      ]
    },
    {
      title: 'Electricity Management System',
      description: 'Comprehensive prepaid billing and grievance management system with payment gateway integration and thermal printer bill generation.',
      icon: Briefcase,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      link: '#',
      github: '#',
      technologies: ['Vite + React', 'TailwindCSS', 'Python (Flask)', 'MySQL', 'Razorpay'],
      category: 'Professional',
      details: [
        'Built web application for prepaid billing and grievance management with role-based access control',
        'Developed admin dashboard for managing master data and user roles with optimized UI using Vite + React + TailwindCSS',
        'Integrated Razorpay payment gateway for prepaid electricity bill payments and enabled thermal printer bill generation',
        'Designed and optimized MySQL tables to store prepaid details and integrated meter APIs for consumption tracking',
        'Delivered scalable, secure, and responsive solution ensuring real-time data updates across roles'
      ]
    }
  ]

  const personalProjects = [
    {
      title: 'Textutil-React',
      description: 'Textutil is a responsive web application built using React Hooks and CRUD operations. TextUtil helps to manage and manipulate your text with various formatting options.',
      icon: Code,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      link: 'https://rachatmad.github.io/Textutils-React/',
      github: 'https://github.com/RachatMad/Textutils-React',
      technologies: ['React', 'Hooks', 'CRUD', 'Text Processing'],
      category: 'Personal'
    },
    {
      title: 'Spotify Clone',
      description: 'The Spotify Clone project is a web application designed to mimic the core functionalities of Spotify, allowing users to play and control music. The project showcases proficiency in HTML, CSS, and JavaScript.',
      icon: Music,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      link: '#',
      github: '#',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Audio API'],
      category: 'Personal'
    },
    {
      title: 'Tic Tac Toe',
      description: 'This is a simple Tic-Tac-Toe game where two players alternate between marking "X" and "O" on a 3x3 grid. The game detects when a player wins and allows players to reset the board.',
      icon: Gamepad2,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      link: '#',
      github: '#',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
      category: 'Personal'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application that displays current weather conditions and forecasts. Integrates with weather APIs to provide accurate meteorological data.',
      icon: Globe,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      link: '#',
      github: '#',
      technologies: ['React', 'Weather API', 'CSS Grid', 'Responsive Design'],
      category: 'Personal'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and modern web technologies. Features responsive design, smooth animations, and showcases my skills and projects.',
      icon: User,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      link: '#',
      github: '#',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      category: 'Personal'
    },
    {
      title: 'Database Management Tool',
      description: 'Web-based database management interface for MySQL databases. Allows users to view, edit, and manage database records through an intuitive web interface.',
      icon: Database,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      link: '#',
      github: '#',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'Personal'
    }
  ]

  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-[#1A2130] rounded-xl p-6 hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:scale-105 transition-all duration-300">
        {/* Project Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`${project.bgColor} ${project.color} p-3 rounded-lg`}>
            <project.icon size={32} />
          </div>
          <span className={`px-3 py-1 text-xs rounded-full border ${
            project.category === 'Professional' 
              ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' 
              : 'bg-green-500/20 text-green-400 border-green-500/30'
          }`}>
            {project.category}
          </span>
        </div>

        {/* Project Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#b54769] transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Project Details for Professional Projects */}
          {project.details && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#b54769] mt-1 text-xs">•</span>
                    <span className="text-gray-300 text-xs leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#1A2130]/50 text-gray-300 text-xs rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex space-x-3 mt-auto">
          {project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#b54769] hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="section-title">My Projects</h1>
          {/* <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my professional work and personal projects that demonstrate my skills and passion for software development.
          </p> */}
        </motion.div>

        {/* Professional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Professional Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Get In Touch
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  )
}

export default Projects