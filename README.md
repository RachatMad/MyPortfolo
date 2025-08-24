# Madhusudan's Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a professional dark/light mode toggle for enhanced user experience.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Professional theme switching with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Modern UI/UX**: Clean, professional design with Tailwind CSS
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🎨 Theme System

The portfolio now includes a sophisticated theme system:

- **Dark Mode**: Professional dark theme (default) with deep blues and grays
- **Light Mode**: Clean light theme with professional whites and grays
- **Theme Persistence**: User's theme preference is saved in localStorage
- **Smooth Transitions**: All color changes include smooth 300ms transitions
- **Professional Colors**: Carefully selected color palettes for both themes

### Theme Toggle
- Located in the navigation bar (both desktop and mobile)
- Sun icon for dark mode, Moon icon for light mode
- Automatically saves user preference

## 🚀 Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS with custom theme configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd myPortfolo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Blog.jsx        # Blog posts section
│   ├── Contact.jsx     # Contact information
│   ├── Experience.jsx  # Work experience
│   ├── Footer.jsx      # Footer component
│   ├── Home.jsx        # Home/hero section
│   ├── Navbar.jsx      # Navigation with theme toggle
│   └── Projects.jsx    # Projects showcase
├── context/            # React context
│   └── ThemeContext.jsx # Theme management
├── assets/             # Static assets
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles and theme variables
```

## 🎯 Key Components

### ThemeContext
- Manages dark/light mode state
- Handles theme persistence in localStorage
- Provides theme toggle functionality

### Navbar
- Responsive navigation with theme toggle
- Professional theme-aware styling
- Mobile-friendly hamburger menu

### Theme-Aware Components
All components now use theme-aware classes:
- `bg-theme`: Background color
- `text-theme`: Primary text color
- `text-theme-secondary`: Secondary text color
- `bg-theme-card`: Card background color
- `border-theme`: Border color

## 🌟 Customization

### Adding New Themes
1. Update `tailwind.config.js` with new color schemes
2. Add CSS variables in `src/index.css`
3. Extend theme context if needed

### Modifying Colors
- Primary colors: Update `tailwind.config.js`
- Theme-specific colors: Modify CSS variables in `index.css`
- Component-specific colors: Use theme-aware classes

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes
- Touch-friendly interactions

## 🚀 Performance Features

- Lazy loading with React.lazy()
- Optimized images and assets
- Smooth scrolling and animations
- Efficient re-renders with proper state management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: madhupro44@gmail.com
- **LinkedIn**: [linkedin.com/in/rachat](https://www.linkedin.com/in/rachat/)
- **GitHub**: [github.com/RachatMad](https://github.com/RachatMad/)

---

Built with ❤️ using React and modern web technologies.
