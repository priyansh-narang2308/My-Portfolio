import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Priyansh Narang 👨‍💻 | Full Stack Developer • Innovator • Tech Explorer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="h-56 w-56 mx-auto rounded-full mb-8 relative overflow-hidden shadow-lg ring-4 ring-purple-600 ring-opacity-60">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.08, 1, 1.08, 1],
                opacity: [0.85, 1, 0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <img
                src="/ImageMy.jpeg"
                alt="myimage"
                className="object-cover w-full h-full rounded-full"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full pointer-events-none"></div>
          </div>

        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 h-20 sm:h-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {text}
          </span>
          <span className="animate-blink">|</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-2 w-48 justify-center"
          >
            <a href="/ResumePriyansh.pdf" target="_blank" className="text-white">
              <span>Download Resume</span>
            </a>
            <ArrowRight size={16} />
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2 w-48 justify-center"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2 w-48 justify-center"
          >
            <span>Contact Me</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <a href="#about" className="text-gray-400 hover:text-white">
            <div className="border-2 border-gray-600 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
