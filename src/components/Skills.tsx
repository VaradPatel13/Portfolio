import { motion } from 'framer-motion';
import { Code2, Globe, Database, Wrench, BrainCircuit, Terminal } from 'lucide-react';

interface SkillCategory {
  icon: JSX.Element;
  title: string;
  skills: string[];
  bgColor: string;
  iconColor: string;
}

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["C / C++", "Java", "Python", "JavaScript"],
      bgColor: "bg-[#2b2b2b]",
      iconColor: "text-[#bda863]"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "XML"],
      bgColor: "bg-[#3b3b3b]",
      iconColor: "text-[#bda863]"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "phpMyAdmin", "SQLite"],
      bgColor: "bg-[#2b2b2b]",
      iconColor: "text-[#bda863]"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["Git", "VS Code", "Arduino", "Firebase"],
      bgColor: "bg-[#3b3b3b]",
      iconColor: "text-[#bda863]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-[#f4f3ef] text-[#1a1a1a] py-20 px-4 font-poppins" id='skills'>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center text-[#1a1a1a] mb-16 font-poppins"
          >
            My Skills
            <span className="block w-16 h-1 bg-[#857f74] mt-2 mx-auto"></span>
          </motion.h2>


          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${category.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className={`${category.bgColor} rounded-lg p-2 w-fit mb-4`}>
                  <div className={`${category.iconColor}`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-[#e6dfd3] mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      variants={itemVariants}
                      className="flex items-center text-[#e6dfd3] hover:text-[#bda863] transition-colors duration-300"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${category.iconColor.replace('text', 'bg')} mr-3`}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
