# Madhusudan's Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component-Based**: Built with React components for maintainability
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Modern Styling**: Tailwind CSS for consistent, beautiful styling

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Font**: Poppins (Google Fonts)

## 📁 Project Structure

```
portfolio-vite/
├── public/
│   ├── assets/          # Images and static assets
│   └── Madhusudana c.pdf # CV/Resume
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles and Tailwind
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors
Edit the `tailwind.config.js` file to customize the color scheme:

```javascript
colors: {
  primary: '#b54769',      // Main accent color
  secondary: '#167, 110, 221', // Secondary accent
  dark: '#021526',         // Background color
  darkNav: '#1A2130',      // Navigation background
}
```

### Content
Update the content in each component file:
- `Home.jsx` - Hero section and skills
- `About.jsx` - Personal information and education
- `Projects.jsx` - Project showcase
- `Contact.jsx` - Contact information
- `Footer.jsx` - Footer content

### Images
Replace images in the `public/assets/` folder with your own:
- `bg.png` - Hero section image
- `developer.png` - About section image
- `3d-web.webp` - Contact section image

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive grid layouts
- Optimized typography for all screen sizes

## 🎭 Animations

Built-in animations using Framer Motion:
- Fade-in effects on scroll
- Smooth hover transitions
- Staggered animations for lists
- Interactive button animations

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: madhupro44@gmail.com
- **LinkedIn**: [linkedin.com/in/rachat](https://www.linkedin.com/in/rachat/)
- **GitHub**: [github.com/RachatMad](https://github.com/RachatMad/)

---

Made with ❤️ using React & Tailwind CSS
