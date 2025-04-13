import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Python Developer Intern",
    company: "CodeVertex, Pune (Remote)",
    duration: "Mar 2025 – Present",
    description: `Currently working as a Python Developer Intern at CodeVertex where I am involved in developing backend services and automating data workflows. 
    The internship includes 1 month of focused training followed by 2 months of hands-on project work. I'm sharpening my problem-solving skills while collaborating on real-world development using Python, REST APIs, and automation tools.`,
  },
  {
    role: "Web Developer Intern",
    company: "Sumago Infotech",
    duration: "6 Weeks (2023)",
    description: `During my internship at Sumago Infotech, I gained hands-on experience in building responsive user interfaces, integrating APIs, and implementing Firebase authentication. 
    I worked with technologies like HTML, CSS, JavaScript, and Firebase to develop efficient and dynamic websites.`,
  },
  {
    role: "Student Developer",
    company: "Academic Projects",
    duration: "2022 – 2024",
    description: `Built and contributed to various academic projects including a simulated ATM banking system, a student feedback Android app, and an IoT-based smart door system. 
    These projects enhanced my skills in Python, Java, SQLite, Android, and embedded systems with Arduino/ESP32.`,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section className="min-h-screen bg-[#e6dfd3] text-[#2b2b2b] py-20 px-4 font-poppins">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold text-center font-poppins"
          >
            My Experience
            <span className="block w-16 h-1 bg-[#857f74] mt-2 mx-auto"></span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-10"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-[#3b3b3b] text-[#e6dfd3] rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 font-poppins"
              >
                <div className="flex items-start gap-4 mb-3">
                  <Briefcase className="w-6 h-6 text-[#bda863]" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-[#bda863]">{exp.company} • {exp.duration}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
