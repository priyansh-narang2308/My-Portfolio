
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Python Full Stack Internship at TechSonix Solutions",
      company: "Tech Innovations Inc.",
      period: "2025 - Present",
      description:
        "Leading development of enterprise web applications. Architecting solutions, mentoring junior developers, and implementing best practices.",
      technologies: ["Pythob", "Django", "Flask"],
      logo: "🏢",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu",
      period: "2023 - 2027",
      description: "Currently pursuing a Bachelor's degree in Computer Science and Engineering with a focus on software development and web technologies.",
      logo: "🎓"
    },
    {
      degree: "School Education (Grades 5 to 12)",
      institution: "SD Jain Modern School, Surat, Gujarat",
      period: "2015 - 2022",
      description: "Completed school education with a strong foundation in mathematics, science, and computer fundamentals. Graduated with distinction.",
      logo: "🎓"

    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <span className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </span>
              Work Experience
            </motion.h3>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-10 border-l-2 border-gray-700"
                >
                  <span className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl">
                    {exp.logo}
                  </span>

                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-wrap justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <span className="text-blue-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h5 className="text-gray-300 mb-4">{exp.company}</h5>
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <span className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </span>
              Education
            </motion.h3>

            <div className="space-y-12 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-10 border-l-2 border-gray-700"
                >
                  <span className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl">
                    {edu.logo}
                  </span>

                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex flex-wrap justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-purple-400 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <h5 className="text-gray-300 mb-4">{edu.institution}</h5>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2v4M19.4 5l-2 3.5M22 12h-4M19.4 19l-2-3.5M12 22v-4M4.6 19l2-3.5M2 12h4M4.6 5l2 3.5"></path>
                  </svg>
                </span>
                Certifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Complete Full Stack Web Development",
                    issuer: "Udemy",
                    date: "2024",
                  },
                  {
                    name: "PowerBI Certification",
                    issuer: " Office Master",
                    date: "2023",
                  },
                  {
                    name: "AWS Solutions Architect",
                    issuer: "Amazon Web Services",
                    date: "2025",
                  },
                  {
                    name: "Introduction to Devops",
                    issuer: "Coursera",
                    date: "2025",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-bold text-white">{cert.name}</h4>
                      <span className="text-green-400 text-sm">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
