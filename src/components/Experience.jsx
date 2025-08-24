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
          {/* <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in software development, from training to professional work experience.
          </p> */}
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A2130] rounded-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Column - Icon and Basic Info */}
                <div className="lg:w-1/4">
                  <div className={`${exp.bgColor} ${exp.color} p-6 rounded-lg mb-6 flex justify-center lg:justify-start`}>
                    <exp.icon size={48} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                    <div className="flex items-center space-x-2 text-[#b54769]">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-3/4 space-y-6">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="text-[#b54769] mt-1">•</span>
                          <span className="text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#1A2130]/50 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-[#b54769] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Looking for opportunities to grow and contribute to innovative projects?
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

export default Experience
