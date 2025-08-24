import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: 'BE in Civil Engineering',
      institution: 'East West Institute of Technology, Bengaluru',
      year: '2023',
      grade: 'CGPA: 7.01',
      icon: GraduationCap
    },
    {
      degree: 'Diploma in Civil Engineering',
      institution: 'S J B G S Polytechnic, B G Nagara, Nagamangala',
      year: '2019',
      grade: 'Aggregate: 51%',
      icon: Award
    },
    {
      degree: 'Secondary School Certificate',
      institution: "Saint Rita's High School, Kunigal",
      year: '2015',
      grade: 'Aggregate: 73.60%',
      icon: BookOpen
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
          <h1 className="section-title">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <img
                src="/assets/developer.png"
                alt="Madhusudan"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#b54769]">
                Hello, I'm Madhusudana
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Software Developer with a strong foundation in both frontend and backend technologies. 
                Currently working at Atraya Technologies, I specialize in creating robust web applications and software solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise includes modern web technologies like React, Node.js, Python, and TypeScript. I'm committed to 
                writing clean, maintainable code and staying updated with the latest industry trends and best practices.
              </p>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white border-b-2 border-[#b54769] pb-2">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-[#1A2130]/50 rounded-lg hover:bg-[#1A2130]/70 transition-colors duration-300"
                  >
                    <div className="text-[#b54769] mt-1">
                      <edu.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                      <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#b54769] text-sm font-medium">{edu.year}</span>
                        <span className="text-gray-300 text-sm">{edu.grade}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
