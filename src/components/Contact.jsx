import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-16 max-w-7xl mx-auto px-4 py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-indigo-900"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-16 space-y-10 md:space-y-0">

        {/* Contact Info */}
        <motion.div
          className="text-white flex flex-col space-y-4 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p><span className="font-bold text-cyan-400">Email:</span> mdrakibhasankanon@gmail.com</p>
          <p><span className="font-bold text-cyan-400">Phone:</span> +8801310192226</p>
          <p><span className="font-bold text-cyan-400">WhatsApp:</span> +8801310192226</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="flex text-white flex-col space-y-4 w-full max-w-md bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <motion.textarea
            whileFocus={{ scale: 1.03 }}
            placeholder="Your Message"
            className="bg-transparent border border-gray-400 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold px-6 py-2 rounded-lg transition"
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
