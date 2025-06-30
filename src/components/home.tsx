import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  LeetCode,
  GeeksForGeeks,
  ExternalLink,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import ServiceCard from "./ServiceCard";
import TimelineItem from "./TimelineItem";
import ProjectCard from "./ProjectCard";
import ContactForm from "./ContactForm";
import TypingEffect from "./TypingEffect";

const Home = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Services data
  const services = [
    {
      title: "Full-Stack Development",
      description: "Building scalable web apps using MERN and Django stacks.",
      isAvailable: true,
    },
    {
      title: "Frontend Engineering",
      description: "Pixel-perfect React UI with TailwindCSS and modern JS.",
      isAvailable: true,
    },
    {
      title: "Backend/API Development",
      description:
        "REST API & database design using Node.js, Express, PostgreSQL, MongoDB.",
      isAvailable: true,
    },
    {
      title: "Performance Optimization & SEO Basics",
      description:
        "Improving website performance,lazy loading, and applying technical SEO practices for better discoverability and user experience.",
      isAvailable: true,
    },

    {
      title: "AI & ML Integrations",
      description: "Integration of Python ML models into web apps.",
      isAvailable: true,
    },

    {
      title: "CRM & Tools (Odoo)",
      description: "Basic modules and backend automation via Odoo framework.",
      isAvailable: true,
    },
  ];

  // Experience data
  const experiences = [
    {
      period: "June 2024 – August 2024",
      title: "SalesForce Developer Intern",
      company: "Astrea It Services",
      description:
        " • Engineered custom solutions in Apex, improving project workflow efficiency by 30% through optimized automation processes and code enhancements and Collaborated with cross-functional teams to streamline development cycles, resulting in a 15% reduction in delivery time.",
    },
    {
      period: "  July 2023 – September 2023",
      title: "React Developer Intern",
      company: "Itbha International",
      description:
        "• Participated in code reviews for best practices in code quality and maintainability. My contributions support a collaborative environment, enhancing overall team efficiency and my practical skills in React.js development. and Collaborated seamlessly with cross-functional teams, including designers and backend developers, to ensure cohesive and efficient project execution. Facilitated communication between different roles. Directed the seamless integration of a user interface with ReactJS, leading to a 30% boost in customer retention and a 20% rise in overall user satisfaction",
    },
  ];

  // Education data
  const education = [
    {
      period: "2021-2025",
      title: "B.Tech in Computer Science & Engineering",
      company: "Jaypee Institute of Information Technology, Noida,India",
      description: "Graduated: May 2025",
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Crime Rate Prediction System",
      description:
        "Machine learning-based prediction system for Indian crime data (2014–2021).",
      features: ["ML models", "chatbot", "emergency UI"],
      stack: ["Machine Learning", "Python", "HTML", "CSS", "JS", "ChatBot"],
      githubLink: "https://github.com/bhattk64/Crime_Rate_Prediction.git",
      demoLink: "https://crime-rate-prediction-66ru.onrender.com/",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Meet-Up (Teams Clone)",
      description: "Real-time video calling & chat platform with room control",
      features: ["Video calls", "Chat", "Room management"],
      stack: ["React", "NodeJs", "WebRTC", "MongoDB"],
      githubLink: "https://github.com/bhattk64/Meet-Up.git",
      demoLink: "https://github.com/bhattk64/Meet-Up.git",
      image:
        "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&q=80",
    },
    {
      title: "Project Management System",
      description: "Task & project tracking for teams",
      features: ["Task tracking", "Team collaboration", "Analytics"],
      stack: ["MongoDB", "Express", "React", "Node"],
      githubLink: "https://github.com/bhattk64/Project-Management.git",
      demoLink: "https://github.com/bhattk64/Project-Management.git",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
  ];

  // Tech stack icons
  const techStack = [
    // 🔹 Programming Languages
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },

    // 🔹 Frontend
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },

    // 🔹 Backend
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },

    // 🔹 Databases
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },

    // 🔹 Tools & CMS
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Android Studio",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },

    // 🔹 Other Tools
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Odoo",
      icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/odoo.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ];

  return (
    // <div className="min-h-screen bg-[#0f0f0f] text-white">
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-start justify-between ">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hey, I'm <span className="text-purple-500">Kul Chandra Bhatt</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mb-4 text-purple-400">
            <TypingEffect
              texts={[
                "Tech-savvy Full-Stack Developer",
                "Crafting seamless web experiences",
                "From Nepal, Land of the Himalayas",
                "Driven by clean code and innovation",
              ]}
            />
          </div>
          <p className="text-gray-400 mb-8 max-w-lg">
            I design and develop full-stack applications using modern web
            technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.google.com/document/d/1kRW9z4KX_paymHc-tv1AazyTWYTZY9jogKrx8Pzh-Qc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ExternalLink className="mr-2 h-4 w-4" /> View Resume
              </Button>
            </a>
            <a href="mailto:bhattn245@gmail.com">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-900/20"
              >
                Let's Talk
              </Button>
            </a>
          </div>
          <div className="flex mt-8 gap-4">
            <a
              href="https://github.com/bhattk64"
              title="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/kul-chandra-bhatt-b66182237/"
              title="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="mailto:bhattn245@gmail.com"
              title="Email"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={30} />
            </a>
            <a
              href="https://leetcode.com/u/bhattkul/"
              title="LeetCode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="h-9 w-9 object-contain"
              />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/chill_dude/"
              title="GeeksforGeeks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                alt="GeeksforGeeks"
                className="h-10 w-10"
              />
            </a>
          </div>
        </motion.div>
       <motion.div
  className="md:w-1/3 w-full flex justify-center items-center md:mt-[-100px] mt-4"
  initial="hidden"
  animate="visible"
  variants={fadeIn}
>
  <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-none h-auto">
    {/* Glow background */}
    {/* <div className="absolute inset-0 bg-white opacity-5 rounded-full blur-[150px] z-0 rotate-[70deg]" /> */}
    <div className="absolute top-[0.3%] left-[45%] w-[450px] h-[350px] bg-white opacity-25 rounded-full blur-[150px] rotate-[70deg] pointer-events-none z-4"></div>

    <img
      src="./public/bg.png"
      alt="Profile"
      className="relative w-full h-auto object-contain z-10"
    />
  </div>
</motion.div>

      </section>

      {/* Services Section */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Services I offer</h2>
            <p className="text-gray-400">
              Specialized in full-stack development and modern web technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  isAvailable={service.isAvailable}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 mb-4">
                I'm Kul Chandra Bhatt, a passionate full-stack software
                developer who enjoys building clean, efficient, and
                user-friendly products.
              </p>
              <p className="text-gray-400 mb-4">
                I recently graduated in 2025 with a B.Tech in Computer Science
                from JIIT, Noida,India. My hands-on experience includes
                internships in Salesforce and React, plus contributions to
                large-scale projects in machine learning and real-time apps.
              </p>
              <p className="text-gray-400">
                I'm driven by curiosity, clean code, and coffee ☕.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-6">Technologies</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition-colors"
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="w-10 h-10 mb-2 object-contain"
                    />
                    <span className="text-sm text-gray-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
            <p className="text-gray-400">My professional journey so far</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TimelineItem
                      duration={exp.period}
                      title={exp.title}
                      organization={exp.company}
                      description={exp.description}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TimelineItem
                      duration={edu.period}
                      title={edu.title}
                      organization={edu.company}
                      description={edu.description}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Achievements</h3>
                <ul className="space-y-3 text-gray-400">
                  <motion.li
                    className="flex items-start gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <span className="text-purple-500 text-lg">•</span>
                    <span>LeetCode Contest Rank: 956/25,554 (Contest 385)</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <span className="text-purple-500 text-lg">•</span>
                    <span>Top 7 in GeeksForGeeks college leaderboard</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <span className="text-purple-500 text-lg">•</span>
                    <span>
                      COMPEX Scholar ($40,000 fully-funded scholarship)
                    </span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <p className="text-gray-400">Some of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  features={project.features}
                  stack={project.stack}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  image={project.image}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="https://github.com/bhattk64" target="_blank">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-900/20"
              >
                View All Projects <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-2">
              Let's create something together
            </h2>
            <p className="text-gray-400">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Kul Chandra Bhatt. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
