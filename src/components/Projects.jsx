import { motion } from 'framer-motion'
import { Code, Music, Gamepad2, ExternalLink, Github, Briefcase, User, Database, Globe, Smartphone, ShoppingCart } from 'lucide-react'

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
      role: 'Full-Stack Developer',
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
      role: 'Full-Stack Developer',
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
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features admin dashboard for product management.',
      icon: ShoppingCart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      link: '#',
      github: '#',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      category: 'Personal'
    }
  ]

  const renderProjectCard = (project, index) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-theme-card rounded-xl p-6 border border-theme hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`${project.bgColor} p-3 rounded-lg`}>
            <project.icon className={project.color} size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-theme group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
              project.category === 'Professional' 
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
            }`}>
              {project.category}
            </span>
          </div>
        </div>
        {project.role && (
          <span className="ml-4 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/30 self-start">
            {project.role}
          </span>
        )}
      </div>

      <p className="text-theme-secondary mb-4 leading-relaxed">
        {project.description}
      </p>

      {project.details && (
        <div className="mb-4">
          <h4 className="font-semibold text-theme mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.details.map((detail, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm text-theme-secondary">
                <span className="text-primary mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <h4 className="font-semibold text-theme mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-theme-accent text-theme-secondary text-xs rounded-full border border-theme"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        {project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
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
            className="flex items-center space-x-2 text-theme-secondary hover:text-theme transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">Code</span>
          </a>
        )}
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">


        {/* Professional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-theme mb-8 text-center">Professional Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-theme mb-8 text-center">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects