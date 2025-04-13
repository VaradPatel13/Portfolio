import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const certificates = [
  {
    title: "6-Week Internship",
    issuer: "Sumago Infotech",
    date: "2022",
    file: "/certificates/1734634199604.jpg"
  },
  {
    title: "Python Programming",
    issuer: "VJ Tech Academy",
    date: "2023",
    file: "/certificates/Python_Language-Varad_Brijesh_Patel_.pdf"
  },
  {
    title: "Android Development",
    issuer: "VJ Tech Academy",
    date: "2023",
    file: "/certificates/Android_Language-Varad_Brijesh_Patel_.pdf"
  },
  {
    title: "JavaScript",
    issuer: "CodeChef",
    date: "2024",
    file: "/certificates/Javascrpit_codechef_certificate1.pdf"
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Certificates = () => {
  return (
    <section id="certificates" className="min-h-screen bg-[#f4f3ef] text-[#2b2b2b] py-20 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center"
          >
            Certifications
            <span className="block w-16 h-1 bg-[#857f74] mt-2 mx-auto"></span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2b2b2b] text-[#e6dfd3] p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#bda863]" />
                  <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <p className="text-sm text-[#bda863]">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm bg-[#bda863] text-[#2b2b2b] px-4 py-2 rounded hover:bg-[#a49565] transition"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
