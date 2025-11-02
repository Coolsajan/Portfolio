# 🚀 Sajan Thapa - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Scientist and Machine Learning Engineer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Made with](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Modern Design** - Clean, professional dark theme with gradient accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging scroll effects and transitions
- **Dynamic Content** - Easy to update via JavaScript configuration
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Fast Loading** - Minimal dependencies and optimized assets
- **Interactive Elements** - Hover effects, typing animations, and more

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling
├── js/
│   └── main.js            # JavaScript functionality
├── images/
│   ├── profile.jpg        # Your photo
│   ├── projects/          # Project screenshots
│   └── favicon.ico        # Site favicon
├── assets/
│   └── Sajan_Thapa_Resume.pdf
├── README.md
└── .gitignore
```

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/Coolsajan/portfolio-website.git
cd portfolio-website
```

### 2. Add Your Content

1. **Add your photo**: Place `profile.jpg` in the `images/` folder (500x500px recommended)
2. **Add project screenshots**: Place images in `images/projects/` folder
3. **Add your resume**: Place PDF in `assets/` folder
4. **Update content**: Edit the data in `js/main.js` (see customization guide below)

### 3. Open Locally

Simply open `index.html` in your web browser to view the site locally.

## ✏️ Customization Guide

### Updating Your Information

All content can be easily updated in `js/main.js`:

#### Skills
```javascript
const skillsData = [
    {
        category: "Your Category",
        skills: ["Skill 1", "Skill 2", "Skill 3"]
    }
];
```

#### Projects
```javascript
const projectsData = [
    {
        title: "Project Name",
        tech: "Technologies Used",
        description: "Project description",
        github: "github-link",
        demo: "demo-link",
        image: "images/projects/your-image.jpg"
    }
];
```

#### Experience
```javascript
const experienceData = [
    {
        title: "Position/Achievement",
        date: "Date/Duration",
        description: "Description"
    }
];
```

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary: #6366f1;    /* Primary color */
    --secondary: #8b5cf6;   /* Secondary color */
    --accent: #ec4899;      /* Accent color */
    --dark: #0f172a;        /* Dark background */
    --darker: #020617;      /* Darker background */
}
```

### Adding Social Links

Update social media links in `js/main.js`:

```javascript
const socialLinks = {
    github: "your-github-url",
    linkedin: "your-linkedin-url",
    kaggle: "your-kaggle-url",
    email: "your-email"
};
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Create a repository named `username.github.io` (replace `username` with your GitHub username)
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch and save
5. Your site will be live at `https://username.github.io`

### Other Options

- **Netlify**: Drag and drop your folder to [Netlify](https://netlify.com)
- **Vercel**: Import your GitHub repo to [Vercel](https://vercel.com)
- **Cloudflare Pages**: Connect your GitHub repo to [Cloudflare Pages](https://pages.cloudflare.com)

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6)** - Dynamic functionality
- **Google Fonts** - Inter font family

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 1 second
- **Mobile Friendly**: Yes
- **Cross-browser Compatible**: Chrome, Firefox, Safari, Edge

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use! If you make improvements, consider submitting a pull request.

## 📧 Contact

- **Email**: tsajan001@gmail.com
- **GitHub**: [@Coolsajan](https://github.com/Coolsajan)
- **Location**: Pokhara, Nepal

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons from SVG libraries
- Fonts from Google Fonts

---

⭐ If you like this portfolio template, please give it a star!

Built with ❤️ by Sajan Thapa