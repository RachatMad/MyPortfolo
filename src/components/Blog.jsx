import { motion } from 'framer-motion'
import { Linkedin, ExternalLink, Calendar, Heart, MessageCircle, Share2, User, Building, Award, Code, Globe, Rocket, Lightbulb } from 'lucide-react'

const Blog = () => {
  const linkedInPosts = [
    {
      id: 1,
      title: "Open Source Contributor Status Activated! 🚀",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "1 month ago",
      content: "🧩 STATUS: CONTRIBUTOR MODE ACTIVATED 📍 Location: India (Open Source is the new workspace) 📅 Timeline: 15–30 August 2025 🔗 Mission: Collaborate. Contribute. Create. 👾 I'm excited to share that I've been selected as a Contributor for Open Source Connect — one of the country's largest open-source movements, organized by NexFellow",
      fullContent: "This isn't just a selection. It's a checkpoint in learning journey — where Git meets grit, and contributions speak louder than credentials. A space where students, developers, and changemakers come together to build real solutions for real problems. 🛠️ What makes this different? No grades. No titles. No competition. Just open collaboration. Just creators who code with purpose. Just real impact — shipped publicly. And that's the beauty of it. 🎖️ Badge unlocked – not for display, but as a reminder. 📂 Contributor portal — where ideas turn into action. 👥 Community connection — mentors, admins, peers — all here to build, not compete. 🔍 Next step? To work on projects that don't just get deployed — they get remembered. Because real contribution doesn't end in a pull request — it creates a ripple. 🌱 Grateful to the entire NexFellow and Open Source Connect team for building a space where students can grow, explore, and contribute freely. 💬 To anyone wondering if they're ready for open source: Start small. Ship something. Share it. That's how real learning begins. 🔗 Check out the movement: osconnect.org",
      hashtags: ["#OpenSource", "#OSCI", "#Contributor", "#NexFellow", "#FOSS", "#IndiaTech", "#DigitalBharat"],
      likes: 23,
      comments: 2,
      shares: 0,
      link: "https://www.linkedin.com/posts/rachat_opensource-osci-contributor-activity-7348905953292939265-sZHb",
      category: "Open Source",
      icon: Award,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 2,
      title: "Building AI-Powered Solutions with Modern Tech Stack",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "1 month ago",
      content: "Excited to share my journey in building AI-powered solutions using React, Node.js, and modern APIs. The combination of frontend excellence and backend robustness is creating amazing user experiences.",
      fullContent: "Working on cutting-edge projects that integrate AI tools and agents has been an incredible learning experience. The tech stack of React + Node.js + AI integration is proving to be a game-changer for modern web applications. Building and integrating APIs has never been more exciting!",
      hashtags: ["#AI", "#React", "#NodeJS", "#APIs", "#WebDevelopment", "#Innovation"],
      likes: 18,
      comments: 5,
      shares: 3,
      link: "#",
      category: "AI & Development",
      icon: Rocket,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 3,
      title: "Full-Stack Development Journey: From Frontend to Backend",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "2 months ago",
      content: "Transitioning from frontend-focused development to full-stack has opened up a whole new world of possibilities. The synergy between React frontend and Node.js backend is incredible.",
      fullContent: "Learning to build complete applications from database to UI has been transformative. Understanding both sides of the stack gives you a complete picture of how applications work. The debugging skills you develop are invaluable!",
      hashtags: ["#FullStack", "#React", "#NodeJS", "#WebDevelopment", "#Learning"],
      likes: 15,
      comments: 4,
      shares: 2,
      link: "#",
      category: "Full-Stack",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 4,
      title: "API Integration and Modern Web Development",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "2 months ago",
      content: "Building and integrating APIs has become the backbone of modern web development. The power of connecting different services and creating seamless user experiences is incredible.",
      fullContent: "Working with REST APIs, GraphQL, and modern authentication methods has taught me so much about system design and user experience. Every API integration is a new learning opportunity!",
      hashtags: ["#APIs", "#WebDevelopment", "#Integration", "#REST", "#GraphQL"],
      likes: 12,
      comments: 3,
      shares: 1,
      link: "#",
      category: "APIs",
      icon: Globe,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 5,
      title: "AI Tools and Agents in Modern Development",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "3 months ago",
      content: "Exploring the integration of AI tools and agents in web development is opening up new possibilities. The future of development is here, and it's AI-powered!",
      fullContent: "From AI-assisted coding to intelligent user interfaces, the possibilities are endless. Learning to work with AI tools is becoming essential for modern developers.",
      hashtags: ["#AI", "#Development", "#Innovation", "#FutureOfTech", "#WebDev"],
      likes: 20,
      comments: 6,
      shares: 4,
      link: "#",
      category: "AI & Innovation",
      icon: Lightbulb,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
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
          <h1 className="section-title">Personal Blogs</h1>
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/rachat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin size={20} />
              <span>Follow me on LinkedIn</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        <div className="space-y-8">
          {linkedInPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-theme-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-theme"
            >
              {/* Post Header */}
              <div className="flex items-start space-x-4 mb-4">
                {/* Profile Image Placeholder */}
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <User size={24} className="text-primary" />
                </div>
                
                {/* Author Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-theme">{post.author}</h3>
                    <span className="text-primary">•</span>
                    <span className="text-theme-secondary text-sm">{post.date}</span>
                  </div>
                  <p className="text-theme-secondary text-sm">{post.role}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Building size={14} className="text-theme-secondary" />
                    <span className="text-theme-secondary text-sm">{post.company}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`${post.bgColor} ${post.color} p-2 rounded-lg`}>
                  <post.icon size={20} />
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-theme mb-3">{post.title}</h4>
                <p className="text-theme-secondary leading-relaxed mb-3">{post.content}</p>
                
                {/* Show more content on hover/click */}
                <details className="group">
                  <summary className="cursor-pointer text-primary hover:text-primary/80 transition-colors text-sm">
                    Read more...
                  </summary>
                  <p className="text-theme-secondary leading-relaxed mt-3 text-sm">{post.fullContent}</p>
                </details>
              </div>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.hashtags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-theme-accent text-primary text-xs rounded-full border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between text-theme-secondary text-sm mb-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Heart size={14} />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle size={14} />
                    <span>{post.comments}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Share2 size={14} />
                    <span>{post.shares}</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-theme">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin size={16} />
                  <span className="text-sm">View on LinkedIn</span>
                  <ExternalLink size={14} />
                </a>
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
          <p className="text-theme-secondary mb-6">
            Want to stay updated with my latest professional insights and achievements?
          </p>
          <a
            href="https://www.linkedin.com/in/rachat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>
        </motion.div> */}
      </div>
    </div>
  )
}

export default Blog
