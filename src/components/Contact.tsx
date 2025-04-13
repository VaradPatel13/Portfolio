import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    alert("Message Sent! Thank you for reaching out.");
  };

  return (
    <section id="contact" className="min-h-screen bg-[#2b2b2b] text-[#e6dfd3] py-20 px-6 font-poppins">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-16 flex flex-col md:flex-row justify-between w-full"
        >

          <motion.div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-[#bda863] mb-2">Get In Touch</h2>
              <p className="text-[#e6dfd3]/80 text-base leading-relaxed">
                Have a question or want to work together? Feel free to reach out!
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a question or just want to say hi,
                I’ll try my best to get back to you!
              </p>
              <p className="mt-4 text-[#e6dfd3]/80 text-base">You can also reach me directly at <span className="text-[#bda863]">varadpatelo355@gmail.com</span> or connect on social media.</p>
            </div>
            <div className="pt-4 text-[#e6dfd3]/80 text-base">
              <p>📞 Phone: +91 8007182716</p>
              <p>📍 Location: Sambhaji Nagar, Jintur, Tal - Jintur, Dist - Parbhani</p>
            </div>
          </motion.div>

          <motion.div className="md:w-1/2 md:ml-8">
            {!formSubmitted ? (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="bg-[#3b3b3b] text-[#e6dfd3] p-8 rounded-xl w-full space-y-6 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-center">Send a Message</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-[#2b2b2b] text-[#e6dfd3] border-b border-[#857f74] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-[#2b2b2b] text-[#e6dfd3] border-b border-[#857f74] focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 bg-[#2b2b2b] text-[#e6dfd3] border-b border-[#857f74] focus:outline-none"
                  rows={4}
                />
                <button
                  type="submit"
                  className="w-full bg-[#bda863] text-[#2b2b2b] p-3 rounded-md hover:bg-[#a49565] transition duration-300"
                >
                  Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div
                className="bg-[#3b3b3b] text-[#e6dfd3] p-8 rounded-xl w-full flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-center">Message Sent!</h3>
                <p className="mt-4 text-lg text-center">
                  Thank you for reaching out. I’ll get back to you as soon as possible.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
