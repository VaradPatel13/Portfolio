import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id='home' className="min-h-screen flex items-center justify-center bg-[#f4f3ef] text-[#1a1a1a] font-poppins px-4 py-16">
      <div className="max-w-7xl mx-auto text-center">

        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div variants={textVariants}>
            <p className="text-[#6c757d] mb-2 font-mono">Hi, my name is</p>
          </motion.div>

          <motion.h1 variants={textVariants} className="text-4xl md:text-6xl font-bold mb-4 text-[#1a1a1a]">
            Varad Patel
          </motion.h1>

          <motion.div variants={textVariants} className="text-2xl md:text-4xl font-semibold mb-6">
            <span className="text-[#6c757d]">I&apos;m a </span>
            <TypeAnimation
              sequence={[
                'Developer', 2000,
                'Android App Creator', 2000,
                'AI Assistant Builder', 2000,
                'Web Developer ', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#bda863]"
            />
          </motion.div>

          <motion.p variants={textVariants} className="text-[#6c757d] text-base md:text-lg mb-8 max-w-xl mx-auto">
          "Innovative Developer with expertise in building intuitive applications and secure systems from mobile apps to websites and AI-driven platforms."            
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#343a40] text-white px-6 py-3 rounded-md font-medium hover:bg-[#212529] transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-[#343a40] text-[#343a40] px-6 py-3 rounded-md font-medium hover:bg-[#343a40] hover:text-white transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/Varad_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#bda863] text-white px-6 py-3 rounded-md font-medium hover:bg-[#5a6268] transition-all duration-300"
            >
              View CV
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
