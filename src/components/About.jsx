// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 relative py-24 px-5 bg-gradient-to-br from-sky-900 via-slate-900 to-indigo-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Hello! I’m a passionate MERN Stack Developer who began exploring the inner
            workings of websites and applications out of sheer curiosity. Over time,
            I fell in love with solving problems through code and building full-stack
            applications that are functional, scalable, and visually engaging.
            <br /><br />
            I enjoy working with JavaScript, React, Node.js, MongoDB, and modern UI
            frameworks like Tailwind CSS. My goal is to build fast, responsive, and
            maintainable web applications with clean code.
            <br /><br />
            Outside of coding, I love traveling, discovering new places, listening to
            music, and learning new technologies that spark creativity.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
            Skills & Technologies
          </h3>

          <div className="flex flex-wrap gap-6 justify-center md:justify-start">

            {[
              ["HTML5", "html5"],
              ["CSS3", "css"],
              ["JavaScript", "javascript"],
              ["React", "react"],
              ["Node.js", "nodedotjs"],
              ["Express", "express"],
              ["MongoDB", "mongodb"],
              ["Tailwind", "tailwindcss"],
              ["Git", "git"],
              ["GitHub", "github"],
            ].map(([name, logo], index) => (
              <motion.div
                key={name}
                className="flex flex-col items-center gap-2"

                // Floating animation
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}

                // Hover effect
                whileHover={{ scale: 1.2, rotate: 2 }}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:shadow-lg hover:shadow-cyan-500/30 transition">
                  <img
                    src={`https://cdn.simpleicons.org/${logo}`}
                    alt={name}
                    className="w-8 h-8"
                  />
                </div>

                {/* Label */}
                <p className="text-sm text-gray-400">{name}</p>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
