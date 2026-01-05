import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-r from-slate-900 via-gray-900 to-indigo-900">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>

      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12 space-y-6 md:space-y-0">
        
        {/* Contact Info */}
        <div className="flex text-white flex-col space-y-4 text-center md:text-left">
          <p><span className="font-bold">Email:</span> mdrakibhasankanon@gmail.com</p>
          <p><span className="font-bold">Phone:</span> +8801310192226</p>
          <p><span className="font-bold">WhatsApp:</span> +8801310192226</p>
        </div>

        {/* Contact Form */}
        <form className="flex text-white flex-col space-y-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-yellow-400 hover:text-gray-900 transition-colors"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
