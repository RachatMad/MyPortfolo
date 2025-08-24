import { motion } from 'framer-motion'
import { Briefcase, Code, Globe, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Atraya Technologies',
      location: 'Bengaluru, Karnataka',
      duration: 'April 2025 - Present',
      description: 'Working as a full-stack developer on various web application projects. Contributing to both frontend and backend development using modern technologies.',
      responsibilities: [
        'Worked on frontend development using ReactJS to build responsive and interactive web applications',
        'Integrated backend services by consuming REST APIs for dynamic data handling and real-time updates',
        'Learning and implementing Python & Flask for new backend services',
        'Using Git, GitLab, and Postman for version control and API testing'
      ],
      technologies: ['ReactJS', 'REST APIs', 'Python', 'Flask', 'Git', 'GitLab', 'Postman'],
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      role: 'Web Developer',
      company: 'InternPe',
      location: 'Remote',
      duration: 'August 2024 - September 2024',
      description: 'Completed web development internship focusing on building responsive web applications and learning modern development practices.',
      responsibilities: [
        'Developed responsive web applications using modern web technologies',
        'Collaborated with team members on various web development projects',
        'Learned industry best practices for web development',
        'Gained hands-on experience with real-world development workflows'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
      icon: Globe,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      role: 'Web Developer',
      company: 'Oasis Infobyte',
      location: 'Remote',
      duration: 'September 2024 - October 2024',
      description: 'Completed web development internship focusing on building interactive web applications and learning modern development frameworks.',
      responsibilities: [
        'Built interactive web applications using modern web technologies',
        'Worked on frontend development projects with responsive design',
        'Learned modern development frameworks and tools',
        'Contributed to team projects and code reviews'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Modern Frameworks'],
      icon: Globe,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      role: 'Web Development Training',
      company: 'Jspiders Rajajinagar',
      location: 'Bengaluru, Karnataka',
      duration: 'June 2023 - November 2023',
      description: 'Completed comprehensive training in web development technologies and best practices.',
      responsibilities: [
        'Learned HTML, CSS, JavaScript fundamentals and advanced concepts',
        'Built responsive web applications using modern frameworks',
        'Practiced version control with Git and GitHub',
        'Developed projects using React and other frontend technologies',
        'Gained hands-on experience with backend development concepts'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'],
      icon: Globe,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ]

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
          <h1 className="section-title">Professional Experience</h1>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-theme-card rounded-xl p-8 border border-theme hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className={`${exp.bgColor} p-3 rounded-lg`}>
                    <exp.icon className={`${exp.color}`} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-theme mb-2">{exp.role}</h3>
                    <div className="flex items-center space-x-4 text-sm text-theme-secondary">
                      <span className="flex items-center space-x-1">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-theme-secondary mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-theme mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-theme-secondary">
                      <span className="text-primary mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-theme mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-theme-accent text-theme-secondary text-sm rounded-full border border-theme"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
