import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "R. C. Patel Institute of Technology",
    logo: "/logos/OIP.jpeg", 
    duration: "2024 (Pursuing)",
    description: "Focused on full-stack development, data structures, and AI-driven solutions. Continuously exploring real-world problem-solving through advanced tech stacks."
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Government Polytechnic, Jintur",
    logo: "/logos/Logo1.jpg",
    duration: "2021 – 2024",
    description: "Built a strong foundation in programming, algorithms, and microcontroller systems. Completed key projects in automation and app development."
  },
  {
    degree: "SSC (10th)",
    institution: "Jawahar Vidyalay, Jintur",
    logo: "/logos/images.png",
    duration: "2020 – 2021",
    description: "Achieved 89.90%. Developed early logical thinking and tech curiosity through school-level projects and experiments."
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Education = () => {
  return (
    <section className="min-h-screen bg-[#2b2b2b] text-[#e6dfd3] py-20 px-6 font-poppins">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center font-poppins"
          >
            Education
            <span className="block w-16 h-1 bg-[#857f74] mt-2 mx-auto"></span>
          </motion.h2>

          <motion.div className="relative border-l border-[#857f74]/30 ml-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12 ml-6 relative group"
              >

                <span className="absolute -left-[22px] top-1.5 w-4 h-4 rounded-full bg-[#bda863] border-2 border-[#2b2b2b] z-10" />

     
                <div className="bg-[#3b3b3b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-10 h-10 object-contain rounded"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-[#bda863]">
                        {edu.institution} • {edu.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
