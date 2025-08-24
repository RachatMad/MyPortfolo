import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Download, MapPin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'madhupro44@gmail.com',
      link: 'mailto:madhupro44@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9743849544',
      link: 'tel:+919743849544',
      color: 'text-green-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rachat',
      link: 'https://www.linkedin.com/in/rachat/',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/RachatMad',
      link: 'https://github.com/RachatMad/',
      color: 'text-gray-400'
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
          <h1 className="section-title">Contact Me</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target={contact.label === 'Email' || contact.label === 'Phone' ? '_self' : '_blank'}
                  rel={contact.label === 'Email' || contact.label === 'Phone' ? '' : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                                      className="flex items-center space-x-4 p-4 bg-[#1A2130]/50 rounded-lg hover:bg-[#1A2130]/70 transition-all duration-300 group"
                >
                  <div className={`${contact.color} p-3 rounded-lg bg-[#1A2130]/80 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CV Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Resume</h3>
              <a
                href="/Madhusudana c.pdf"
                download
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Location</h3>
                              <div className="flex items-center space-x-3 p-4 bg-[#1A2130]/50 rounded-lg">
                                  <div className="text-[#b54769] p-3 rounded-lg bg-[#1A2130]/80">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Location</p>
                  <p className="text-white font-medium">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="/assets/99AEE550-3AD9-4D47-B255-814515D2C5AF.PNG"
                alt="Contact"
                className="w-96 h-96 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to start a project or have a question?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Let's Talk
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  )
}

export default Contact
