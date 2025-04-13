import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#2b2b2b] text-[#e6dfd3] font-poppins px-4 py-16" id='about'>            <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-5xl font-serif font-bold text-center text-[#e6dfd3] mb-6">
                    About Me
                    <span className="block w-24 h-1 bg-[#857f74] mt-4 mx-auto"></span>
                </h2>

                <div className="flex justify-center items-center">
                    <div className="max-w-2xl space-y-8">
                        <p className="text-xl text-[#e6dfd3] leading-relaxed">
                            I'm Varad Patel, a passionate Developer with hands-on experience in building secure, intuitive systems across various domains. From crafting mobile apps to developing IoT solutions and AI-driven financial assistants, my journey has been centered around creating scalable and user-centric technology.
                        </p>
                        <p className="text-xl text-[#e6dfd3] leading-relaxed">
                            With expertise in Python, Java, C++, JavaScript, and modern web technologies, I specialize in crafting seamless applications. Whether it's building robust backend systems, creating user-friendly interfaces, or integrating AI, I focus on delivering impactful solutions that enhance everyday life.
                        </p>


                        <div className="mt-8 text-center">
                            <a
                                href="/Varad_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-[#bda863] text-[#2b2b2b] rounded-md hover:bg-[#6e6760] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                📄 View Full CV
                            </a>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
        </section>
    );
};

export default About;
