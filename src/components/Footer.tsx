
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import countapi from 'countapi-js';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [count, setCount] = useState(null);

  useEffect(() => {
    const namespace = "pri-portfolio";
    const key = "visitor-count";

    countapi.hit(namespace, key)
      .then((result) => {
        setCount(result.value);
      })
      .catch((err) => {
        console.error("CountAPI error:", err);
      });
  }, []);


  const socialLinks = [
      { name: "GitHub", icon: <FaGithub size={28} />, url: "https://github.com/priyansh-narang2308" },
      { name: "LinkedIn", icon: <FaLinkedin size={25} />, url: "https://www.linkedin.com/in/priyansh-narang-a9a743307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Twitter", icon: <FaTwitter size={25} />, url: "https://x.com/NarangPriyansh" },
      { name: "Instagram", icon: <FaInstagram size={28} />, url: "https://www.instagram.com/priyansh.narang23/?igsh=MWpsOTU4OGF3YWU4NQ%3D#" },
      {
        name: "Leetcode", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode">
          <path fill="#ece6e2" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
          <path fill="#fac967" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
          <path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
        </svg>, url: "https://leetcode.com/u/priyanshnarang23/"
      },
    ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-t from-blue-900/20 to-black py-12 border-t border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              PRIYANSH NARANG
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer focused on creating interactive, accessible,
              and responsive web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Coimbatore, Tamil Nadu</li>
              <li>priyanshnarang23@gmail.com</li>
              <li>+91 8320396828</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-00 mb-4 md:mb-0">
            © {currentYear} Priyansh. All rights reserved.
          </p>
          <div className="group relative cursor-pointer">
            <p className="text-gray-100">
              Built with{" "}
              <span className="inline-block transition-transform group-hover:animate-bounce">💻</span>{" "}
              and{" "}
              <span className="inline-block transition-transform group-hover:animate-bounce">☕</span>{" "}
              by Priyansh
            </p>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 bg-gray-800 text-xs text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Thanks for visiting my portfolio!
            </div>
          </div>
        </div>
      </div>

    </motion.footer>
  );
};

export default Footer;
