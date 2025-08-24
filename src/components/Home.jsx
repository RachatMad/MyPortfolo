import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Palette, GitBranch, Coffee, Zap, FileText, Server, Terminal, Lightbulb, Layers, Wrench } from 'lucide-react'

const Home = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    const strings = ["Software Developer", "Web Developer", "Full Stack Developer"]
    let currentIndex = 0
    let currentString = ""
    let isDeleting = false
    let typeSpeed = 100

    const typeWriter = () => {
      const currentStr = strings[currentIndex]
      
      if (isDeleting) {
        currentString = currentStr.substring(0, currentString.length - 1)
        typeSpeed = 50
      } else {
        currentString = currentStr.substring(0, currentString.length + 1)
        typeSpeed = 100
      }

      if (elementRef.current) {
        elementRef.current.textContent = currentString
      }

      if (!isDeleting && currentString === currentStr) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && currentString === "") {
        isDeleting = false
        currentIndex = (currentIndex + 1) % strings.length
        typeSpeed = 500
      }

      setTimeout(typeWriter, typeSpeed)
    }

    typeWriter()
  }, [])

  const skills = [
    // Languages
    { name: 'JavaScript', level: 'Advanced', icon: Code, color: 'text-yellow-400' },
    { name: 'Java', level: 'Intermediate', icon: Coffee, color: 'text-red-500' },
    { name: 'Python', level: 'Intermediate', icon: Zap, color: 'text-green-500' },
    { name: 'SQL', level: 'Advanced', icon: Database, color: 'text-blue-600' },
    { name: 'TypeScript', level: 'Intermediate', icon: FileText, color: 'text-blue-600' },
    
    // Frameworks & Libraries
    { name: 'ReactJS', level: 'Advanced', icon: Globe, color: 'text-cyan-400' },
    { name: 'Node.js', level: 'Intermediate', icon: Server, color: 'text-green-600' },
    { name: 'Express.js', level: 'Intermediate', icon: Terminal, color: 'text-gray-400' },
    { name: 'Flask', level: 'Intermediate', icon: Zap, color: 'text-green-500' },
    { name: 'Material UI', level: 'Advanced', icon: Palette, color: 'text-blue-500' },
    { name: 'Next.js', level: 'Intermediate', icon: Globe, color: 'text-black-400' },
    { name: 'Tailwind CSS', level: 'Advanced', icon: Palette, color: 'text-cyan-500' },
    { name: 'Bootstrap', level: 'Advanced', icon: Smartphone, color: 'text-purple-500' },
    
    // Databases
    { name: 'MySQL', level: 'Advanced', icon: Database, color: 'text-blue-600' },
    { name: 'MongoDB (Atlas)', level: 'Intermediate', icon: Database, color: 'text-green-600' },
    
    // Tools & Platforms
    { name: 'VS Code', level: 'Advanced', icon: Code, color: 'text-blue-500' },
    { name: 'Git', level: 'Advanced', icon: GitBranch, color: 'text-orange-500' },
    { name: 'GitHub', level: 'Advanced', icon: GitBranch, color: 'text-gray-400' },
    { name: 'GitLab', level: 'Intermediate', icon: GitBranch, color: 'text-orange-600' },
    { name: 'Postman', level: 'Intermediate', icon: Wrench, color: 'text-orange-400' },
    { name: 'Eclipse', level: 'Intermediate', icon: Code, color: 'text-purple-500' },
    { name: 'MySQL Workbench', level: 'Advanced', icon: Database, color: 'text-blue-600' },
    { name: 'Cursor', level: 'Advanced', icon: Code, color: 'text-purple-400' },
    { name: 'Claude Code', level: 'Advanced', icon: Lightbulb, color: 'text-orange-400' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-theme">
              Hi, My name is{' '}
              <span className="text-secondary">Madhusudan</span>
            </h1>
            <p className="text-xl md:text-2xl text-theme-secondary mb-4">
              & I'm a 
            </p>
            <div className="text-2xl md:text-3xl font-semibold text-secondary mb-8">
              <span ref={elementRef}></span>
              <span className="animate-pulse">|</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => {
                window.location.href = '/contact'
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="/assets/bg.png"
              alt="Developer"
              className="w-80 h-80 object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="relative">
              <h2 className="text-5xl font-bold text-theme mb-4 relative z-20">
                Technical Skills
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg blur-xl -z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary via-primary to-primary h-1 rounded-full opacity-80"></div>
            </div>
          </motion.div>

          {/* Languages Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-theme mb-8 text-center">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.filter(skill => 
                ['JavaScript', 'Java', 'Python', 'SQL', 'TypeScript'].includes(skill.name)
              ).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-theme-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-theme"
                >
                  <div className="text-center">
                    <div className={`${skill.color} mb-4 flex justify-center`}>
                      <skill.icon size={48} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-theme">{skill.name}</h3>
                    <p className="text-theme-secondary text-sm">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-theme mb-8 text-center">Frameworks & Libraries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
              {skills.filter(skill => 
                ['ReactJS', 'Node.js', 'Express.js', 'Flask', 'Material UI', 'Next.js', 'Tailwind CSS', 'Bootstrap'].includes(skill.name)
              ).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-theme-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-theme"
                >
                  <div className="text-center">
                    <div className={`${skill.color} mb-4 flex justify-center`}>
                      <skill.icon size={48} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-theme">{skill.name}</h3>
                    <p className="text-theme-secondary text-sm">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-theme mb-8 text-center">Databases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {skills.filter(skill => 
                ['MySQL', 'MongoDB (Atlas)'].includes(skill.name)
              ).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-theme-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-theme"
                >
                  <div className="text-center">
                    <div className={`${skill.color} mb-4 flex justify-center`}>
                      <skill.icon size={48} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-theme">{skill.name}</h3>
                    <p className="text-theme-secondary text-sm">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-theme mb-8 text-center">Tools & Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.filter(skill => 
                ['VS Code', 'Git', 'GitHub', 'GitLab', 'Postman', 'Eclipse', 'MySQL Workbench', 'Cursor', 'Claude Code'].includes(skill.name)
              ).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-theme-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-theme"
                >
                  <div className="text-center">
                    <div className={`${skill.color} mb-4 flex justify-center`}>
                      <skill.icon size={48} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-theme">{skill.name}</h3>
                    <p className="text-theme-secondary text-sm">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
