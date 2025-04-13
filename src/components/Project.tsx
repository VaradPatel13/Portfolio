import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorSmartphone, Database, Cpu, Bot, CreditCard } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  features: string[];
  liveDemoLink: string;
  link: string;
  icon: JSX.Element;
  category: string;
  tech: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "ATM System",
      description: "Simulated banking system with account management. Includes features like transaction handling, fund transfers, and account details.",
      features: [
        "Transaction Handling",
        "Account Management",
        "Fund Transfers",
        "Account Details"
      ],
      liveDemoLink: "https://github.com/VaradPatel13/ATM-in-python-",
      link: "https://github.com/VaradPatel13/ATM-in-python-",
      icon: <Database className="w-8 h-8" />,
      category: "Backend Development",
      tech: ["Python", "SQLite", "OOP"]
    },
    {
      title: "Student Feedback Form",
      description: "Mobile app using Firebase to gather structured feedback from students. Developed during Polytechnic.",
      features: [
        "Real-time Validation",
        "Secure Firebase Storage",
        "Teacher Dashboard"
      ],
      liveDemoLink: "https://github.com/VaradPatel13/",
      link: "https://github.com/VaradPatel13/",
      icon: <MonitorSmartphone className="w-8 h-8" />,
      category: "Mobile Development",
      tech: ["Android", "Java", "XML", "Firebase"]
    },
    {
      title: "IoT Door System",
      description: "Fingerprint-authenticated access control. Integrates hardware with Arduino/ESP32 microcontrollers for secure entry.",
      features: [
        "Fingerprint Authentication",
        "Hardware Integration",
        "Secure Entry System"
      ],
      liveDemoLink: "https://github.com/VaradPatel13/",
      link: "https://github.com/VaradPatel13/",
      icon: <Cpu className="w-8 h-8" />,
      category: "IoT Development",
      tech: ["Arduino", "ESP32", "C++"]
    },
    {
      title: "FinWise – AI Financial Assistant",
      description: "AI-based financial assistant that helps users make stock decisions and track investments. Built with LlamaIndex + OpenAI.",
      features: [
        "Stock Market Prediction",
        "Portfolio Management",
        "AI Recommendations"
      ],
      liveDemoLink: "https://finwise-financial-ai-assistant.vercel.app/",
      link: "https://github.com/VaradPatel13/Finwise-Financial-AI-Assistant-",
      icon: <Bot className="w-8 h-8" />,
      category: "AI + Finance",
      tech: ["React", "Python", "LlamaIndex", "OpenAI"]
    },
    {
      title: "BankLink – Kivy Banking App",
      description: "Secure mobile banking application with fund transfers, QR payments, and hashed data using Firebase.",
      features: [
        "Send Money via QR Code",
        "Transaction History",
        "Hashed Data Storage"
      ],
      liveDemoLink: "https://github.com/VaradPatel13/BankLink",
      link: "https://github.com/VaradPatel13/BankLink",
      icon: <CreditCard className="w-8 h-8" />,
      category: "Banking App",
      tech: ["Python", "Kivy", "Firebase"]
    },
    {
      title: "GamifiedEdu – Gamified Learning Platform",
      description: "Offline-capable educational platform for students with interactive games, videos, and learning tools.",
      features: [
        "Gamification System",
        "Video + Quiz Based Learning",
        "Offline Accessibility"
      ],
      liveDemoLink: "https://github.com/VaradPatel13/GamifiedEdu",
      link: "https://github.com/VaradPatel13/GamifiedEdu",
      icon: <MonitorSmartphone className="w-8 h-8" />,
      category: "EdTech Solution",
      tech: ["React", "Firebase", "Game Mechanics"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id='projects' className="min-h-screen bg-[#2b2b2b] py-20 px-4 font-poppins">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-[#e6dfd3] mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[#bda863] max-w-2xl mx-auto text-lg"
            >
              A collection of innovative solutions across various domains.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group bg-[#2b2b2b] backdrop-blur-sm rounded-xl p-6 border border-[#857f74] shadow-xl transition-all hover:shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-[#3b3b3b] rounded-lg text-[#bda863]">
                    {project.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#bda863]">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-[#e6dfd3]">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#e6dfd3] mb-6">{project.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-[#3b3b3b] text-[#e6dfd3] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[#e6dfd3] text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#bda863] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4 border-t border-[#857f74]">
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#e6dfd3] hover:text-[#bda863] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#e6dfd3] hover:text-[#bda863] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
