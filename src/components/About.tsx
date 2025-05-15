
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Who is Priyansh?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am Priyansh, a dedicated and enthusiastic Full Stack Developer with a strong drive to engineer scalable, robust, and intuitive digital solutions. My journey into the world of technology began with an early curiosity about how software powers modern life, evolving into a deep passion for building applications that make a meaningful impact.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I possess hands-on experience in both frontend and backend development, with a solid command of modern frameworks and tools such as React, Next.js, Node.js, Express, and MongoDB. I thrive on crafting seamless user interfaces while ensuring efficient, secure, and scalable backend architectures. My focus lies in delivering clean, maintainable code and user-centric designs, with an emphasis on performance and responsiveness.
            </p>
      
            <p className="text-gray-300 leading-relaxed">
              Outside of development, I enjoy diving into tech research, exploring AI and system design, writing technical blogs, mentoring aspiring developers, and contributing to developer communities. I believe that great software is a blend of creativity, logic, and empathy—and I aim to bring all three into everything I build.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
            <div className="space-y-6">
              {[
                {
                  year: "2021",
                  title: "Started Coding Journey",
                  description: "Wrote my first lines of HTML and fell in love with web development",
                },
                {
                  year: "2022",
                  title: "First Professional Project",
                  description: "Developed and deployed my first full-stack application",
                },
                {
                  year: "2023",
                  title: "Expanded Tech Stack",
                  description: "Mastered React and began exploring backend technologies",
                },
                {
                  year: "2024-Present",
                  title: "Full Stack Development",
                  description: "Building complete solutions and mentoring junior developers",
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-gray-700">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <span className="text-blue-400 font-medium block mb-1">{item.year}</span>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              title: "Problem Solving",
              description: "I enjoy tackling complex challenges and finding efficient solutions",
              icon: "🧩",
            },
            {
              title: "Continuous Learning",
              description: "Always exploring new technologies and improving my skills",
              icon: "📚",
            },
            {
              title: "Team Collaboration",
              description: "Working effectively with others to create amazing products",
              icon: "👥",
            },
            {
              title: "Clean Code & Best Practices",
              description: "Committed to writing maintainable, scalable, and well-documented code",
              icon: "🧼",
            },
            {
              title: "User-Centered Design",
              description: "Building interfaces that prioritize usability and seamless user experiences",
              icon: "🎯",
            },
            {
              title: "Open Source Contribution",
              description: "Actively contributing to open-source projects to give back to the community",
              icon: "🌍",
            },

          ].map((card, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
