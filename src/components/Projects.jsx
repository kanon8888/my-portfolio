import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    image: "https://i.ibb.co.com/4gt5hQZK/Screenshot-2026-01-05-182406.png",
    description: "A personal portfolio website to showcase my projects and skills.",
    liveLink: "https://thunderous-longma-ddd934.netlify.app/",
    githubLink: "https://github.com/kanon8888/my-portfolio",
  },
  {
    name: "Freelance Marketplace",
    image: "https://i.ibb.co.com/WWWwqfMk/Screenshot-2026-01-05-160808.png",
    description: "An e-commerce platform with interactive UI, dynamic product listing, and secure checkout functionality.",
    liveLink: "https://cheery-lokum-0b96f3.netlify.app",
    githubLink: "https://github.com/kanon8888/freelance-marketplace-clientlive",
  },
  {
    name: "Book Courier",
    image: "https://i.ibb.co.com/qYRSvHSL/Screenshot-2026-01-05-162526.png",
    description: "A personal portfolio website showcasing skills, projects, and a contact section with responsive design.",
    liveLink: "https://book-courier-6f173.web.app",
    githubLink: "https://github.com/kanon8888/book-courier-client",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-16 max-w-7xl bg-gradient-to-r from-slate-900 via-gray-900 to-indigo-900 mx-auto px-4 py-20 text-white"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold py-2 rounded-full hover:opacity-90 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-cyan-400 text-cyan-300 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
