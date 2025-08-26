import { motion } from 'framer-motion'
import { Linkedin, ExternalLink, Calendar, Heart, MessageCircle, Share2, User, Building, Award, Code, Globe, Rocket, Lightbulb, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(4) // Initially show 4 posts
  const [showSeeMore, setShowSeeMore] = useState(true)

  const linkedInPosts = [
    {
      id: 1,
      title: "🚀 React Native Mobile App Development Journey",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "1 week ago",
      content: "Excited to share my journey in React Native mobile app development! Building cross-platform mobile applications with React Native has been an incredible learning experience.",
      fullContent: "🚀 React Native Mobile App Development Journey 🚀 Excited to share my journey in React Native mobile app development! Building cross-platform mobile applications with React Native has been an incredible learning experience. The ability to write once and deploy to both iOS and Android platforms is game-changing. Learning mobile development has opened up new possibilities for creating user-friendly, responsive applications that work seamlessly across different devices. #ReactNative #MobileAppDevelopment #ReactJS #CrossPlatform #MobileDevelopment #JavaScript #AppDevelopment",
      hashtags: ["#ReactNative", "#MobileAppDevelopment", "#ReactJS", "#CrossPlatform", "#MobileDevelopment", "#JavaScript", "#AppDevelopment"],
      likes: 15,
      comments: 3,
      shares: 2,
      link: "https://www.linkedin.com/posts/rachat_reactnative-mobileappdevelopment-reactjs-activity-7364598152118665217-mF-L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Mobile Development",
      icon: Rocket,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 2,
      title: "🐍 Full-Stack Developer: Python GUI Application",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "2 weeks ago",
      content: "Excited to share my latest project: a Python GUI application! Building desktop applications with Python has been a fantastic experience in full-stack development.",
      fullContent: "🐍 Full-Stack Developer: Python GUI Application 🐍 Excited to share my latest project: a Python GUI application! Building desktop applications with Python has been a fantastic experience in full-stack development. Creating user-friendly interfaces and robust backend logic in Python has taught me so much about application architecture and user experience design. The versatility of Python continues to amaze me! #FullStackDeveloper #Python #GUI #DesktopApplication #SoftwareDevelopment #Programming #PythonDevelopment",
      hashtags: ["#FullStackDeveloper", "#Python", "#GUI", "#DesktopApplication", "#SoftwareDevelopment", "#Programming", "#PythonDevelopment"],
      likes: 18,
      comments: 4,
      shares: 1,
      link: "https://www.linkedin.com/posts/rachat_fullstackdeveloper-python-gui-activity-7358544025563357185-xmI8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Full-Stack Development",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 3,
      title: "🧩 Open Source Contributor Status Activated! 🚀",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "1 month ago",
      content: "🧩 STATUS: CONTRIBUTOR MODE ACTIVATED 📍 Location: India (Open Source is the new workspace) 📅 Timeline: 15–30 August 2025 🔗 Mission: Collaborate. Contribute. Create.",
      fullContent: "🧩 STATUS: CONTRIBUTOR MODE ACTIVATED 📍 Location: India (Open Source is the new workspace) 📅 Timeline: 15–30 August 2025 🔗 Mission: Collaborate. Contribute. Create. 👾 I'm excited to share that I've been selected as a Contributor for Open Source Connect — one of the country's largest open-source movements, organized by NexFellow. This isn't just a selection. It's a checkpoint in learning journey — where Git meets grit, and contributions speak louder than credentials. A space where students, developers, and changemakers come together to build real solutions for real problems. 🛠️ What makes this different? No grades. No titles. No competition. Just open collaboration. Just creators who code with purpose. Just real impact — shipped publicly. And that's the beauty of it. 🎖️ Badge unlocked – not for display, but as a reminder. 📂 Contributor portal — where ideas turn into action. 👥 Community connection — mentors, admins, peers — all here to build, not compete. 🔍 Next step? To work on projects that don't just get deployed — they get remembered. Because real contribution doesn't end in a pull request — it creates a ripple. 🌱 Grateful to the entire NexFellow and Open Source Connect team for building a space where students can grow, explore, and contribute freely. 💬 To anyone wondering if they're ready for open source: Start small. Ship something. Share it. That's how real learning begins. 🔗 Check out the movement: osconnect.org",
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
      id: 4,
      title: "⚡ Admin Dashboard: Energy Management System",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "1 month ago",
      content: "Excited to share my latest project: an Admin Dashboard for an Energy Management System! Building comprehensive admin interfaces has been an incredible learning experience.",
      fullContent: "⚡ Admin Dashboard: Energy Management System ⚡ Excited to share my latest project: an Admin Dashboard for an Energy Management System! Building comprehensive admin interfaces has been an incredible learning experience. Creating intuitive dashboards that provide real-time insights and control over complex systems has taught me so much about user interface design and data visualization. The combination of frontend excellence and backend robustness is creating amazing user experiences. #AdminDashboard #BackendDevelopment #EnergyManagementSystem #WebDevelopment #Dashboard #AdminInterface #SystemDesign",
      hashtags: ["#AdminDashboard", "#BackendDevelopment", "#EnergyManagementSystem", "#WebDevelopment", "#Dashboard", "#AdminInterface", "#SystemDesign"],
      likes: 22,
      comments: 5,
      shares: 3,
      link: "https://www.linkedin.com/posts/rachat_admindashboard-backenddevelopment-energymanagementsystem-activity-7343901392614449152-kt_T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Backend Development",
      icon: Code,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      id: 5,
      title: "🚀 Task Completed! Calculator Project for InternPe Internship",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "2 months ago",
      content: "I'm excited to share that I've completed my first task for the Web Development Internship at InternPe! I created a simple calculator using HTML, CSS, and JavaScript.",
      fullContent: "🚀 Task Completed! 🚀 I'm excited to share that I've completed my first task for the Web Development Internship at InternPe! 🎉 I created a simple calculator using HTML, CSS, and JavaScript. This project allowed me to reinforce my front-end development skills, and I'm eager to take on more challenges as the internship progresses. Thank you to the team at InternPe for this opportunity to learn and grow. Looking forward to the next task! #WebDevelopment #Internship #JavaScript #HTML #CSS #Learning #InternPE",
      hashtags: ["#WebDevelopment", "#Internship", "#JavaScript", "#HTML", "#CSS", "#Learning", "#InternPE"],
      likes: 9,
      comments: 2,
      shares: 0,
      link: "https://www.linkedin.com/posts/rachat_webdevelopment-internship-javascript-activity-7229110270458019840-edxA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6Q",
      category: "Internship Progress",
      icon: Rocket,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 6,
      title: "🐳 Docker & Open Source Learning Journey",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "2 months ago",
      content: "Excited to share my learning journey with Docker and open source! Containerization and open source collaboration have opened up incredible opportunities for modern development.",
      fullContent: "🐳 Docker & Open Source Learning Journey 🐳 Excited to share my learning journey with Docker and open source! Containerization and open source collaboration have opened up incredible opportunities for modern development. Learning Docker has revolutionized how I think about application deployment and environment consistency. The combination of containerization and open source practices is creating a powerful foundation for scalable, maintainable applications. #Docker #OpenSource #LearningInPublic #Containerization #DevOps #ModernDevelopment #Learning",
      hashtags: ["#Docker", "#OpenSource", "#LearningInPublic", "#Containerization", "#DevOps", "#ModernDevelopment", "#Learning"],
      likes: 25,
      comments: 6,
      shares: 4,
      link: "https://www.linkedin.com/posts/rachat_docker-opensource-learninginpublic-activity-7338101616417325056-7g6a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "DevOps & Learning",
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 7,
      title: "⚡ React 19 + Tailwind CSS: Modern Web Development",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "2 months ago",
      content: "Excited to share my experience with React 19 and Tailwind CSS! The latest React features combined with Tailwind's utility-first approach are revolutionizing web development.",
      fullContent: "⚡ React 19 + Tailwind CSS: Modern Web Development ⚡ Excited to share my experience with React 19 and Tailwind CSS! The latest React features combined with Tailwind's utility-first approach are revolutionizing web development. The new React 19 features like concurrent rendering and improved performance, combined with Tailwind's rapid styling capabilities, are creating incredibly fast and beautiful user interfaces. This modern tech stack is setting new standards for web development efficiency and user experience. #React19 #TailwindCSS #WebDevelopment #ModernDevelopment #Frontend #ReactJS #CSS #JavaScript",
      hashtags: ["#React19", "#TailwindCSS", "#WebDevelopment", "#ModernDevelopment", "#Frontend", "#ReactJS", "#CSS", "#JavaScript"],
      likes: 28,
      comments: 8,
      shares: 5,
      link: "https://www.linkedin.com/posts/rachat_react19-tailwindcss-webdevelopment-activity-7336348661771137024-azMq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Frontend Development",
      icon: Code,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 8,
      title: "🔧 TypeScript & JavaScript: Frontend Development Excellence",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "3 months ago",
      content: "Excited to share my journey with TypeScript and JavaScript! The combination of TypeScript's type safety and JavaScript's flexibility is creating robust frontend applications.",
      fullContent: "🔧 TypeScript & JavaScript: Frontend Development Excellence 🔧 Excited to share my journey with TypeScript and JavaScript! The combination of TypeScript's type safety and JavaScript's flexibility is creating robust frontend applications. Learning TypeScript has significantly improved my code quality and development experience. The type system catches errors early and provides excellent IntelliSense support, making development faster and more reliable. This powerful duo is becoming the standard for modern frontend development. #TypeScript #JavaScript #FrontendDevelopment #TypeSafety #WebDevelopment #Programming #ModernDevelopment",
      hashtags: ["#TypeScript", "#JavaScript", "#FrontendDevelopment", "#TypeSafety", "#WebDevelopment", "#Programming", "#ModernDevelopment"],
      likes: 32,
      comments: 10,
      shares: 6,
      link: "https://www.linkedin.com/posts/rachat_typescript-javascript-frontenddevelopment-activity-7333376893376765952-25PA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Frontend Development",
      icon: Code,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      id: 9,
      title: "🚀 Sign-Up System: Modern Authentication Development",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "3 months ago",
      content: "Excited to share my latest project: a comprehensive Sign-Up system! Building secure authentication systems has been an incredible learning experience in modern web development.",
      fullContent: "🚀 Sign-Up System: Modern Authentication Development 🚀 Excited to share my latest project: a comprehensive Sign-Up system! Building secure authentication systems has been an incredible learning experience in modern web development. Creating user-friendly registration forms with proper validation, security measures, and seamless user experience has taught me so much about authentication best practices. The combination of frontend excellence and backend security is crucial for building trustworthy applications. #SignUp #Authentication #WebDevelopment #Security #UserExperience #ModernDevelopment #SecurityBestPractices",
      hashtags: ["#SignUp", "#Authentication", "#WebDevelopment", "#Security", "#UserExperience", "#ModernDevelopment", "#SecurityBestPractices"],
      likes: 35,
      comments: 12,
      shares: 8,
      link: "https://www.linkedin.com/posts/rachat_sign-up-activity-7332664675299405825-rHgN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Authentication & Security",
      icon: Rocket,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 10,
      title: "🐍 Python + Flask + MySQL: Full-Stack Development",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "3 months ago",
      content: "Excited to share my journey with Python, Flask, and MySQL! Building full-stack applications with this powerful combination has been an incredible learning experience.",
      fullContent: "🐍 Python + Flask + MySQL: Full-Stack Development 🐍 Excited to share my journey with Python, Flask, and MySQL! Building full-stack applications with this powerful combination has been an incredible learning experience. Python's simplicity and readability, combined with Flask's lightweight framework and MySQL's robust database capabilities, are creating scalable and maintainable applications. This tech stack is perfect for rapid prototyping and production-ready applications. #Python #Flask #MySQL #FullStackDevelopment #BackendDevelopment #WebDevelopment #Database #Programming",
      hashtags: ["#Python", "#Flask", "#MySQL", "#FullStackDevelopment", "#BackendDevelopment", "#WebDevelopment", "#Database", "#Programming"],
      likes: 38,
      comments: 15,
      shares: 10,
      link: "https://www.linkedin.com/posts/rachat_python-flask-mysql-activity-7330561827296161792-iVR1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Full-Stack Development",
      icon: Code,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 11,
      title: "🐍 Python Backend Development: Full-Stack Developer Journey",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "4 months ago",
      content: "Excited to share my journey in Python backend development! Building robust backend systems with Python has been an incredible learning experience in full-stack development.",
      fullContent: "🐍 Python Backend Development: Full-Stack Developer Journey 🐍 Excited to share my journey in Python backend development! Building robust backend systems with Python has been an incredible learning experience in full-stack development. Python's versatility and extensive library ecosystem make it perfect for building scalable APIs, data processing systems, and complex business logic. The combination of Python's readability and powerful frameworks is creating efficient and maintainable backend solutions. #Python #BackendDevelopment #FullStackDeveloper #WebDevelopment #APIs #Programming #Backend #PythonDevelopment",
      hashtags: ["#Python", "#BackendDevelopment", "#FullStackDeveloper", "#WebDevelopment", "#APIs", "#Programming", "#Backend", "#PythonDevelopment"],
      likes: 42,
      comments: 18,
      shares: 12,
      link: "https://www.linkedin.com/posts/rachat_python-backenddevelopment-fullstackdeveloper-activity-7330101837481627648-wDD5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Backend Development",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 12,
      title: "🚀 Express.js + Node.js: Backend Development Excellence",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "4 months ago",
      content: "Excited to share my experience with Express.js and Node.js! Building scalable backend applications with this powerful combination has been an incredible learning journey.",
      fullContent: "🚀 Express.js + Node.js: Backend Development Excellence 🚀 Excited to share my experience with Express.js and Node.js! Building scalable backend applications with this powerful combination has been an incredible learning journey. Express.js provides a minimal and flexible framework that works perfectly with Node.js, enabling rapid development of robust APIs and web applications. The event-driven, non-blocking nature of Node.js combined with Express.js's middleware architecture creates highly performant and scalable backend systems. #ExpressJS #NodeJS #BackendDevelopment #WebDevelopment #APIs #JavaScript #Backend #ModernDevelopment",
      hashtags: ["#ExpressJS", "#NodeJS", "#BackendDevelopment", "#WebDevelopment", "#APIs", "#JavaScript", "#Backend", "#ModernDevelopment"],
      likes: 45,
      comments: 20,
      shares: 15,
      link: "https://www.linkedin.com/posts/rachat_expressjs-nodejs-backenddevelopment-activity-7329018110974353408-Jdni?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Backend Development",
      icon: Rocket,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 13,
      title: "💡 JavaScript & Web Development: Code Tips & Best Practices",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "4 months ago",
      content: "Excited to share my insights on JavaScript and web development! Learning and sharing code tips and best practices has been an incredible journey in modern development.",
      fullContent: "💡 JavaScript & Web Development: Code Tips & Best Practices 💡 Excited to share my insights on JavaScript and web development! Learning and sharing code tips and best practices has been an incredible journey in modern development. JavaScript's versatility and the ever-evolving web development landscape provide endless opportunities for learning and improvement. Sharing knowledge and best practices helps the entire community grow and build better applications. #JavaScript #WebDevelopment #CodeTips #BestPractices #Programming #Learning #WebDev #CodingTips",
      hashtags: ["#JavaScript", "#WebDevelopment", "#CodeTips", "#BestPractices", "#Programming", "#Learning", "#WebDev", "#CodingTips"],
      likes: 48,
      comments: 22,
      shares: 18,
      link: "https://www.linkedin.com/posts/rachat_javascript-webdevelopment-codetips-activity-7328643745858408448-W3xp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Web Development",
      icon: Lightbulb,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      id: 14,
      title: "🚀 Node.js Backend Development: Building Scalable Applications",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "5 months ago",
      content: "Excited to share my journey in Node.js backend development! Building scalable backend applications with Node.js has been an incredible learning experience.",
      fullContent: "🚀 Node.js Backend Development: Building Scalable Applications 🚀 Excited to share my journey in Node.js backend development! Building scalable backend applications with Node.js has been an incredible learning experience. Node.js's event-driven, non-blocking I/O model makes it perfect for building high-performance, scalable applications. The extensive npm ecosystem and JavaScript's ubiquity create a powerful environment for rapid development and deployment. #NodeJS #BackendDevelopment #WebDevelopment #ScalableApplications #JavaScript #Backend #ModernDevelopment #Performance",
      hashtags: ["#NodeJS", "#BackendDevelopment", "#WebDevelopment", "#ScalableApplications", "#JavaScript", "#Backend", "#ModernDevelopment", "#Performance"],
      likes: 52,
      comments: 25,
      shares: 20,
      link: "https://www.linkedin.com/posts/rachat_nodejs-backenddevelopment-webdevelopment-activity-7328319770922008579-_HRy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Backend Development",
      icon: Rocket,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 15,
      title: "🌟 Open Source & GitHub: Developer Journey & Collaboration",
      author: "Madhusudana C",
      role: "Software Developer at Atrayin Technologies",
      company: "Atrayin Technologies",
      date: "5 months ago",
      content: "Excited to share my journey in open source and GitHub collaboration! Contributing to open source projects has been an incredible learning experience.",
      fullContent: "🌟 Open Source & GitHub: Developer Journey & Collaboration 🌟 Excited to share my journey in open source and GitHub collaboration! Contributing to open source projects has been an incredible learning experience. Open source development teaches collaboration, code review, and community building. GitHub provides the perfect platform for version control, project management, and connecting with developers worldwide. This journey has significantly improved my coding skills and understanding of software development best practices. #OpenSource #GitHub #DeveloperJourney #Collaboration #Learning #Community #SoftwareDevelopment #Git",
      hashtags: ["#OpenSource", "#GitHub", "#DeveloperJourney", "#Collaboration", "#Learning", "#Community", "#SoftwareDevelopment", "#Git"],
      likes: 55,
      comments: 28,
      shares: 22,
      link: "https://www.linkedin.com/posts/rachat_opensource-github-developerjourney-activity-7327932401425219584--FiV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Open Source",
      icon: Award,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 16,
      title: "🔍 Exploring Tech: GitHub vs GitLab - Development Platforms",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "5 months ago",
      content: "Excited to share my exploration of GitHub and GitLab! Understanding different development platforms has been an incredible learning experience in modern software development.",
      fullContent: "🔍 Exploring Tech: GitHub vs GitLab - Development Platforms 🔍 Excited to share my exploration of GitHub and GitLab! Understanding different development platforms has been an incredible learning experience in modern software development. Both platforms offer powerful features for version control, project management, and collaboration. Learning to work with different platforms expands your skills and makes you more versatile as a developer. This exploration has taught me the importance of choosing the right tools for different projects and teams. #ExploringTech #GitHub #GitLab #DevelopmentPlatforms #VersionControl #Collaboration #SoftwareDevelopment #Learning",
      hashtags: ["#ExploringTech", "#GitHub", "#GitLab", "#DevelopmentPlatforms", "#VersionControl", "#Collaboration", "#SoftwareDevelopment", "#Learning"],
      likes: 58,
      comments: 30,
      shares: 25,
      link: "https://www.linkedin.com/posts/rachat_exploringtech-github-gitlab-activity-7327678834781147136-9E10?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Development Tools",
      icon: Globe,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      id: 17,
      title: "⚛️ React.js & Web Development: Internationalization (i18n)",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "6 months ago",
      content: "Excited to share my experience with React.js and internationalization! Building multilingual applications with React has been an incredible learning journey.",
      fullContent: "⚛️ React.js & Web Development: Internationalization (i18n) ⚛️ Excited to share my experience with React.js and internationalization! Building multilingual applications with React has been an incredible learning journey. Internationalization (i18n) is crucial for creating applications that serve global audiences. React's component-based architecture combined with i18n libraries makes it easier to build applications that support multiple languages and cultural preferences. This experience has taught me the importance of designing applications with international users in mind from the start. #ReactJS #WebDevelopment #i18n #Internationalization #Multilingual #React #WebDev #GlobalDevelopment",
      hashtags: ["#ReactJS", "#WebDevelopment", "#i18n", "#Internationalization", "#Multilingual", "#React", "#WebDev", "#GlobalDevelopment"],
      likes: 62,
      comments: 32,
      shares: 28,
      link: "https://www.linkedin.com/posts/rachat_reactjs-webdevelopment-i18n-activity-7326569383768526848-hGDQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Frontend Development",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 18,
      title: "🎨 JavaScript & Web Development: Responsive Design Excellence",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "6 months ago",
      content: "Excited to share my journey in JavaScript and responsive web design! Creating responsive applications that work seamlessly across all devices has been an incredible learning experience.",
      fullContent: "🎨 JavaScript & Web Development: Responsive Design Excellence 🎨 Excited to share my journey in JavaScript and responsive web design! Creating responsive applications that work seamlessly across all devices has been an incredible learning experience. Responsive design is essential in today's multi-device world. JavaScript combined with CSS media queries and flexible layouts creates applications that provide excellent user experience on desktops, tablets, and mobile devices. This journey has taught me the importance of mobile-first design and progressive enhancement. #JavaScript #WebDevelopment #ResponsiveDesign #MobileFirst #UserExperience #WebDev #ResponsiveWeb #ModernDevelopment",
      hashtags: ["#JavaScript", "#WebDevelopment", "#ResponsiveDesign", "#MobileFirst", "#UserExperience", "#WebDev", "#ResponsiveWeb", "#ModernDevelopment"],
      likes: 65,
      comments: 35,
      shares: 30,
      link: "https://www.linkedin.com/posts/rachat_javascript-webdevelopment-responsivedesign-activity-7267927598565855232-VTiI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Frontend Development",
      icon: Code,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      id: 19,
      title: "🚀 InternPe Internship: Web Development Learning Journey",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "7 months ago",
      content: "Excited to share my learning journey during my InternPe internship! The experience has been incredible for developing my web development skills and understanding.",
      fullContent: "🚀 InternPe Internship: Web Development Learning Journey 🚀 Excited to share my learning journey during my InternPe internship! The experience has been incredible for developing my web development skills and understanding. The internship provided hands-on experience with real projects, mentorship from experienced developers, and exposure to industry best practices. This journey has significantly accelerated my growth as a web developer and prepared me for future challenges in the field. #InternPe #Internship #WebDevelopment #LearningJourney #Growth #Development #Learning #CareerGrowth",
      hashtags: ["#InternPe", "#Internship", "#WebDevelopment", "#LearningJourney", "#Growth", "#Development", "#Learning", "#CareerGrowth"],
      likes: 68,
      comments: 38,
      shares: 32,
      link: "https://www.linkedin.com/posts/rachat_internship-webdevelopment-learning-activity-7239964778155102209--Uph?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Internship & Learning",
      icon: Rocket,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 20,
      title: "🎉 InternPe Internship Completed: Web Development Journey",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "7 months ago",
      content: "Excited to share that I have successfully completed my Web Development internship at InternPe! The journey has been incredible for my professional growth.",
      fullContent: "🎉 InternPe Internship Completed: Web Development Journey 🎉 Excited to share that I have successfully completed my Web Development internship at InternPe! The journey has been incredible for my professional growth. I gained invaluable experience working on various projects and sharpening my skills in web development. I am grateful for the guidance and support from the team at InternPe. A special thanks to InternPe for the opportunity and everyone who supported me throughout this journey. Looking forward to applying the skills I've learned and growing further in my career! 🚀 #Internship #WebDevelopment #Gratitude #LearningJourney #InternPe #Completion #Growth #CareerDevelopment",
      hashtags: ["#Internship", "#WebDevelopment", "#Gratitude", "#LearningJourney", "#InternPe", "#Completion", "#Growth", "#CareerDevelopment"],
      likes: 72,
      comments: 42,
      shares: 35,
      link: "https://www.linkedin.com/posts/rachat_internship-webdevelopment-gratitude-activity-7238152274617753601-8sKE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Internship Completion",
      icon: Award,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 21,
      title: "📝 To-Do List App: InternPe Internship Project",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "8 months ago",
      content: "Excited to share my latest project: To-Do List App! As part of my internship with InternPe, I've developed a simple yet effective To-Do List application.",
      fullContent: "📝 To-Do List App: InternPe Internship Project 📝 Excited to share my latest project: To-Do List App! As part of my internship with InternPe, I've developed a simple yet effective To-Do List application using HTML, CSS, and JavaScript. This project has been a fantastic opportunity to apply my skills and learn new ones, particularly in managing data persistence. Key Features: Add and Delete Tasks: Easily add new tasks to the list and remove them when completed. Mark as Completed: Click on a task to mark it as completed, which visually updates the task with a line-through. Persistent Data: I utilized JavaScript's localStorage to save and retrieve tasks, ensuring that the task list remains intact even after refreshing the browser or closing the app. JavaScript Highlights: The addTask() function adds new tasks to the list and saves them in localStorage. Each task can be marked as completed by clicking on it, which toggles the task's status in localStorage. Tasks can be removed from the list and localStorage using a delete button. This project has enhanced my understanding of web development and helped me gain hands-on experience in using localStorage to save data in the browser. Check out the source code on GitHub: GitHub Repository A big thank you to InternPe for this opportunity! Looking forward to learning and growing even more in the coming days! 😊",
      hashtags: ["#ToDoList", "#InternPe", "#Internship", "#WebDevelopment", "#JavaScript", "#HTML", "#CSS", "#Learning"],
      likes: 75,
      comments: 45,
      shares: 38,
      link: "https://www.linkedin.com/posts/rachat_excited-to-share-my-latest-project-to-do-activity-7235671108148944897-44S5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Internship Projects",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 22,
      title: "🛒 E-commerce Webpage: InternPe Internship Project",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "8 months ago",
      content: "As part of my internship with InternPe, I developed a dynamic E-commerce webpage using HTML, CSS, and JavaScript. This project showcases my skills in building interactive web applications.",
      fullContent: "🛒 E-commerce Webpage: InternPe Internship Project 🛒 As part of my internship with InternPe, I developed a dynamic E-commerce webpage using HTML, CSS, and JavaScript. This project showcases my skills in building interactive and responsive web applications. Here's a quick overview of the features: 🔍 Key Features of the webpage: Dynamic Product Display: The webpage features a slider showcasing different sneaker models like Air Force, Air Jordan, Blazer, Crater, and Hippie. Each product has multiple color options, which users can select to view different images of the sneakers. Interactive Menu: Users can switch between different sneaker models by clicking on the product names in the menu. The display updates in real-time, showing the selected product's name, price, and primary image. Color and Size Selection: Users can choose different colors, and the displayed product image updates accordingly. They can also select different sizes, with the selected size highlighted for a clear user experience. Checkout Simulation: A 'Buy Now' button brings up a checkout form, where users can enter personal and card information. This simulates the e-commerce purchasing experience. 💡 Technologies Used: JavaScript: Used to manipulate the DOM for dynamic content updates, handle user interactions, and simulate product selection and checkout processes. HTML & CSS: To structure and style the webpage, providing a user-friendly interface. 📂 Check out the source code on my GitHub: https://lnkd.in/g77CTmE4 I am thrilled to have had the opportunity to work on this project and expand my front-end development skills. A big thank you to InternPe for this exciting task! 😊 #webdevelopment #internship #javascript #frontend #coding #ecommerce #InternPe",
      hashtags: ["#WebDevelopment", "#Internship", "#JavaScript", "#Frontend", "#Coding", "#Ecommerce", "#InternPe"],
      likes: 78,
      comments: 48,
      shares: 40,
      link: "https://www.linkedin.com/posts/rachat_webdevelopment-internship-javascript-activity-7233446607050924032-dvE6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdqkrsBErvlsDqNr0Dlppzlnn6kCFpbj1Q",
      category: "Internship Projects",
      icon: Code,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 23,
      title: "🚀 Building AI-Powered Solutions with Modern Tech Stack",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "9 months ago",
      content: "Excited to share my journey in building AI-powered solutions using React, Node.js, and modern APIs. The combination of frontend excellence and backend robustness is creating amazing user experiences.",
      fullContent: "🚀 Building AI-Powered Solutions with Modern Tech Stack 🚀 Excited to share my journey in building AI-powered solutions using React, Node.js, and modern APIs. The combination of frontend excellence and backend robustness is creating amazing user experiences. Working on cutting-edge projects that integrate AI tools and agents has been an incredible learning experience. The tech stack of React + Node.js + AI integration is proving to be a game-changer for modern web applications. Building and integrating APIs has never been more exciting! #AI #React #NodeJS #APIs #WebDevelopment #Innovation #ModernTech #AIIntegration",
      hashtags: ["#AI", "#React", "#NodeJS", "#APIs", "#WebDevelopment", "#Innovation", "#ModernTech", "#AIIntegration"],
      likes: 82,
      comments: 52,
      shares: 45,
      link: "#",
      category: "AI & Development",
      icon: Rocket,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 24,
      title: "🔄 Full-Stack Development Journey: From Frontend to Backend",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "10 months ago",
      content: "Transitioning from frontend-focused development to full-stack has opened up a whole new world of possibilities. The synergy between React frontend and Node.js backend is incredible.",
      fullContent: "🔄 Full-Stack Development Journey: From Frontend to Backend 🔄 Transitioning from frontend-focused development to full-stack has opened up a whole new world of possibilities. The synergy between React frontend and Node.js backend is incredible. Learning to build complete applications from database to UI has been transformative. Understanding both sides of the stack gives you a complete picture of how applications work. The debugging skills you develop are invaluable! #FullStack #React #NodeJS #WebDevelopment #Learning #FullStackDeveloper #Backend #Frontend",
      hashtags: ["#FullStack", "#React", "#NodeJS", "#WebDevelopment", "#Learning", "#FullStackDeveloper", "#Backend", "#Frontend"],
      likes: 85,
      comments: 55,
      shares: 48,
      link: "#",
      category: "Full-Stack",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 25,
      title: "🌐 API Integration and Modern Web Development",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "11 months ago",
      content: "Building and integrating APIs has become the backbone of modern web development. The power of connecting different services and creating seamless user experiences is incredible.",
      fullContent: "🌐 API Integration and Modern Web Development 🌐 Building and integrating APIs has become the backbone of modern web development. The power of connecting different services and creating seamless user experiences is incredible. Working with REST APIs, GraphQL, and modern authentication methods has taught me so much about system design and user experience. Every API integration is a new learning opportunity! #APIs #WebDevelopment #Integration #REST #GraphQL #ModernDevelopment #SystemDesign #UserExperience",
      hashtags: ["#APIs", "#WebDevelopment", "#Integration", "#REST", "#GraphQL", "#ModernDevelopment", "#SystemDesign", "#UserExperience"],
      likes: 88,
      comments: 58,
      shares: 50,
      link: "#",
      category: "APIs",
      icon: Globe,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 26,
      title: "💡 AI Tools and Agents in Modern Development",
      author: "Madhusudana C",
      role: "Software Developer at Atraya Technologies",
      company: "Atraya Technologies",
      date: "12 months ago",
      content: "Exploring the integration of AI tools and agents in web development is opening up new possibilities. The future of development is here, and it's AI-powered!",
      fullContent: "💡 AI Tools and Agents in Modern Development 💡 Exploring the integration of AI tools and agents in web development is opening up new possibilities. The future of development is here, and it's AI-powered! From AI-assisted coding to intelligent user interfaces, the possibilities are endless. Learning to work with AI tools is becoming essential for modern developers. #AI #Development #Innovation #FutureOfTech #WebDev #AITools #ModernDevelopment #Innovation",
      hashtags: ["#AI", "#Development", "#Innovation", "#FutureOfTech", "#WebDev", "#AITools", "#ModernDevelopment", "#Innovation"],
      likes: 92,
      comments: 62,
      shares: 55,
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
          {linkedInPosts.slice(0, visiblePosts).map((post, index) => (
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

          {visiblePosts < linkedInPosts.length && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: visiblePosts * 0.1 }}
              viewport={{ once: true }}
              className="bg-theme-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-theme text-center"
            >
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  onClick={() => setVisiblePosts(prev => prev + 4)}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span>See More Posts</span>
                  <ChevronDown size={16} />
                </button>
                {visiblePosts > 4 && (
                  <>
                    <span className="text-theme-secondary">•</span>
                    <button
                      onClick={() => setVisiblePosts(4)}
                      className="flex items-center space-x-2 text-theme-secondary hover:text-theme transition-colors"
                    >
                      <span>See Less</span>
                      <ChevronDown size={16} className="rotate-180" />
                    </button>
                  </>
                )}
              </div>
              <p className="text-theme-secondary text-sm mt-2">
                {visiblePosts >= linkedInPosts.length 
                  ? `All ${linkedInPosts.length} posts are now visible`
                  : `Showing ${visiblePosts} of ${linkedInPosts.length} posts`
                }
              </p>
            </motion.div>
          )}
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
