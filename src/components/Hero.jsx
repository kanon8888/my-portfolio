import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-16 bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 md:px-16"
    >
      {/* Left: Text */}
      <motion.div
        className="md:flex-1 space-y-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-yellow-400">Rakib Hasan</span>
        </h1>

        <motion.p
          className="text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Web Developer
        </motion.p>

        <motion.p
          className="text-gray-400 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          My expertise lies in the MERN stack, providing seamless end-to-end
          solutions, from MongoDB database management to building backend APIs
          with Express and Node.js.
        </motion.p>

        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 rounded-lg hover:text-gray-900 transition-colors"
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 blur-xl opacity-70"></div>

          <img
            src="https://i.ibb.co.com/V0Gx1zV1/aifaceswap-7f079e7c07ed17bde32b5f6bf85f6c14.jpg"
            alt="Rakib Hasan"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
