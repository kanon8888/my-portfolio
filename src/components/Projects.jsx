import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    image: "https://i.ibb.co.com/4gt5hQZK/Screenshot-2026-01-05-182406.png",
    description: "A personal portfolio website to showcase my projects and skills.",
    liveLink: "https://your-portfolio-live.com",
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    name: "E-commerce Store",
    image: "https://i.ibb.co.com/WWWwqfMk/Screenshot-2026-01-05-160808.png",
    description: "An online shopping website built with React and Stripe payment integration.",
    liveLink: "cheery-lokum-0b96f3.netlify.app",
    githubLink: "https://github.com/kanon8888/freelance-marketplace-clientlive",
  },
  {
    name: "Todo App",
    image: "https://i.ibb.co.com/qYRSvHSL/Screenshot-2026-01-05-162526.png",
    description: "A simple todo app built with React and local storage.",
    liveLink: "https://book-courier-6f173.web.app",
    githubLink: "https://github.com/kanon8888/book-courier-client",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl bg-gradient-to-r from-slate-900 via-gray-900 to-indigo-900 mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-2 rounded-full hover:opacity-90 transition"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
