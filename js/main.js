// ===================================
// CUSTOMIZE YOUR CONTENT HERE
// ===================================

// Your Skills Data
const skillsData = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "MongoDB", "HTML", "Flask", "Streamlit"],
  },
  {
    category: "Machine Learning",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "Deep Learning",
      "CNN/LSTM",
    ],
  },
  {
    category: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Statistical Modeling",
      "Feature Engineering",
      "Time Series",
    ],
  },
  {
    category: "Generative AI",
    skills: [
      "LangChain",
      "RAG",
      "OpenAI API",
      "Hugging Face",
      "Vector Databases",
    ],
  },
  {
    category: "MLOps & Tools",
    skills: ["Docker", "CI/CD", "AWS", "REST APIs", "Model Deployment"],
  },
  {
    category: "Visualization & BI",
    skills: ["Power BI", "Matplotlib", "Seaborn", "Plotly", "Excel"],
  },
];

// Your Projects Data
const projectsData = [
  {
    title: "Flight Log Analyst",
    tech: "Python | AutoGen | LLMs | OpenAI API | Computer Vision",
    description:
      "Engineered a 5-agent autonomous system using OpenAI AutoGen to automate flight log analysis, reducing manual processing time by 90%. Integrated computer vision and NLP for automated risk assessment and report generation.",
    github: "https://github.com/Coolsajan/flight-log-analyst",
    demo: "https://flightloganalyst.streamlit.app/", // Add demo link if available
    image: "images/projects/project1.jpg", // Add your project screenshot
  },
  {
    title: "Great Food Buddie",
    tech: "NLP | LangChain | RAG | Hugging Face | Prompt Engineering",
    description:
      "Developed a RAG-based AI chatbot processing 10,000+ restaurant reviews using vector embeddings and semantic search. Deployed production application on Hugging Face Spaces with 95% user query satisfaction rate.",
    github: "https://github.com/Coolsajan/great-food-buddie",
    demo: "https://huggingface.co/spaces/Coolsajan/great-food-buddie", // Update with actual demo link
    image: "images/projects/project2.jpg",
  },
  {
    title: "Stock Price Prediction System",
    tech: "LSTM | Docker | Streamlit | Time Series | Deep Learning",
    description:
      "Built LSTM deep learning model forecasting stock prices with 85%+ directional accuracy over 10-day horizon. Engineered time series features (moving averages, RSI, volatility) and containerized with Docker for deployment.",
    github: "https://github.com/Coolsajan/stock-prediction",
    demo: "https://forecaststocks.streamlit.app/",
    image: "images/projects/project3.jpg",
  },
];

// Your Experience Timeline Data
const experienceData = [
  {
    title: "Aeroclub RecSys Cup - Kaggle Competition",
    date: "August 2025 | Rank: 150/2,298 (Top 7%)",
    description:
      "Designed collaborative filtering recommendation system with matrix factorization and gradient boosting, improving baseline accuracy by 23%.",
  },
  {
    title: "British Airways - Data Science Virtual Intern",
    date: "Forage | May 2025",
    description:
      "Conducted sentiment analysis on 50,000+ customer reviews using NLP techniques to identify service improvement areas. Built Random Forest model achieving 82% accuracy to predict customer buying behavior.",
  },
  {
    title: "Bird CLEF Audio Classification - Kaggle",
    date: "May 2025 | Top 30%",
    description:
      "Applied CNN architectures on Mel-spectrogram features for bird species classification using transfer learning techniques.",
  },
  {
    title: "Deloitte Australia - Data Analytics Virtual Intern",
    date: "Forage | 2025",
    description:
      "Analyzed business datasets to identify trends supporting strategic decision-making through interactive dashboards. Applied data cleaning and transformation techniques ensuring data quality.",
  },
];

// Your Certifications Data
const certificationsData = [
  {
    title: "Oracle Cloud Infrastructure Data Science Professional",
    issuer: "Oracle | 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D66ACDF596183B6D9E07C4CF91807AA247465E06DAD7575BDEA3882AD179D251", // Add your credential link
    credentialId: null, // Optional: Add credential ID
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "AWS Training | 2025",
    link: "https://drive.google.com/file/d/11Ow9fQpOEkf5oXLeHkes7mLOrqeXXqvA/view", // Add your Credly badge link
    credentialId: null,
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (Coursera) | Expected Oct 2025",
    link: "https://www.coursera.org/account/accomplishments/certificate/YOUR_CERT_ID", // Add your Coursera certificate
    credentialId: null, // Set to null if not yet received
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank | 2024",
    link: "https://www.hackerrank.com/certificates/iframe/79662a44ed63", // Add your HackerRank certificate
    credentialId: "79662a44ed63",
  },
  {
    title: "Python Programming",
    issuer: "HackerRank | 2024",
    link: "https://www.hackerrank.com/certificates/iframe/7a0f7ade979c", // Add your HackerRank certificate
    credentialId: "7a0f7ade979c",
  },
];

// Social Media Links (Update with your actual profiles)
const socialLinks = {
  github: "https://github.com/Coolsajan",
  linkedin: "https://www.linkedin.com/in/sajan-thapa", // Add your LinkedIn
  kaggle: "https://www.kaggle.com/sajanthapa", // Add your Kaggle
  email: "tsajan001@gmail.com",
};

// ===================================
// MAIN FUNCTIONALITY - NO NEED TO EDIT BELOW
// ===================================

// Render Skills
function renderSkills() {
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = skillsData
    .map(
      (category) => `
        <div class="skill-category">
            <h3>${category.category}</h3>
            <div class="skill-tags">
                ${category.skills
                  .map((skill) => `<span class="skill-tag">${skill}</span>`)
                  .join("")}
            </div>
        </div>
    `
    )
    .join("");
}

// Render Projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = projectsData
    .map(
      (project) => `
        <div class="project-card">
            <img src="${project.image}" alt="${
        project.title
      }" class="project-image" onerror="this.style.display='none'">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="project-tech">${project.tech}</p>
                <p>${project.description}</p>
                <div class="project-links">
                    ${
                      project.github
                        ? `<a href="${project.github}" class="project-link" target="_blank">GitHub →</a>`
                        : ""
                    }
                    ${
                      project.demo
                        ? `<a href="${project.demo}" class="project-link" target="_blank">Live Demo →</a>`
                        : ""
                    }
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Render Experience Timeline
function renderExperience() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = experienceData
    .map(
      (exp) => `
        <div class="timeline-item">
            <h3>${exp.title}</h3>
            <div class="date">${exp.date}</div>
            <p>${exp.description}</p>
        </div>
    `
    )
    .join("");
}

// Render Certifications
function renderCertifications() {
  const certGrid = document.getElementById("certGrid");
  certGrid.innerHTML = certificationsData
    .map(
      (cert) => `
        <div class="cert-card ${cert.link ? "cert-clickable" : ""}">
            ${
              cert.link
                ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="cert-link">`
                : ""
            }
                <h4>${cert.title}</h4>
                <p>${cert.issuer}</p>
                ${
                  cert.credentialId
                    ? `<p class="credential-id">ID: ${cert.credentialId}</p>`
                    : ""
                }
                ${
                  cert.link
                    ? `
                    <div class="cert-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        View Certificate
                    </div>
                `
                    : ""
                }
            ${cert.link ? `</a>` : ""}
        </div>
    `
    )
    .join("");
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.getElementById("navLinks");

mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active Navigation Link
const sections = document.querySelectorAll("section[id]");
const navLinksArray = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinksArray.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typing Effect for Hero Subtitle
const typingText = document.querySelector(".typing-text");
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  setTimeout(typeWriter, 1000);
}

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Handle Profile Image Error
const profileImage = document.getElementById("profileImage");
if (profileImage) {
  profileImage.onerror = function () {
    this.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%236366f1" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="60" fill="white" text-anchor="middle" dy=".3em"%3EST%3C/text%3E%3C/svg%3E';
  };
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderExperience();
  renderCertifications();
});

// Console Easter Egg
console.log(
  "%c👋 Hello, fellow developer!",
  "font-size: 20px; color: #6366f1; font-weight: bold;"
);
console.log(
  "%c🚀 Interested in the code? Check out the GitHub repo!",
  "font-size: 14px; color: #8b5cf6;"
);
console.log(
  "%c📧 Feel free to reach out: tsajan001@gmail.com",
  "font-size: 14px; color: #ec4899;"
);
