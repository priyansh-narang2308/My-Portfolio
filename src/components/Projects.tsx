
import { useState } from "react";
import { motion } from "framer-motion";
import { Link2, Eye, ArrowRight } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Hirrd - A Job Portal",
      description: "A full-stack application where users can select to be a candidate or a recruiter and post jobs or eveb apply for jobs",
      image: "/hirrd.png",
      category: "Web",
      technologies: ["React", "ShadCN", "Supabase", "Clerk", "Zod"],
      demo: "https://hirrd-lake-eight.vercel.app/",
      github: "https://github.com/priyansh-narang2308/Hirrd",
    },
    {
      title: "KiddieGPT - AI Kids Story Generator",
      description: "A full-stack application where users can create stories for their children by adding the story subject its genre and get it read with ai generated images.",
      image: "/kid.png",
      category: "Web",
      technologies: ["React", "NextJS", "NeonDB", "Clerk", "Replicate AI","Gemini AI"],
      demo: "https://kiddie-gpt.vercel.app/",
      github: "https://github.com/priyansh-narang2308/KiddieGPT-AI-Kids-Story-Gnenerator",
    },
    {
      title: "BookMarkIt - A React Native book market app",
      description: "A full-stack mobile application where users can select the books mark it and add it as favorites",
      image: "/data.svg",
      category: "Mobile",
      technologies: ["React Native", "NodeJS", "MongoDB", "ExpressJS"],
      demo: "httpsexmaple.com",
      github: "https://github.com/priyansh-narang2308/React-native-BookmarkIt",
    },
    {
      title: "Eduvora - AI Based Online Learning Platform",
      description: "A full stack application for online learning platform",
      image: "/course.png",
      category: "Web",
      technologies: ["React", "NextJS", "NeonDB", "Drizzle ORM","ShadCN"],
      demo: "https://eduvora.vercel.app/",
      github: "https://github.com/priyansh-narang2308/Eduvora---AI-Online-Learning-Platform",
    },
    {
      title: "Bicycle Stand Locker",
      description: "IoT dashboard for monitoring and controlling smart home devices",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500",
      category: "IoT",
      technologies: ["React Native", "Chart.js", "Node.js", "MQTT"],
      demo: "https://example.com",
      github: "https://github.com/Intel-IoT-Club/bicycle-locker/tree/main",
    },
    {
      title: "RepoGalaxy",
      description: "Github Like place where you can find your repos and explore the popular repositories using the github API",
      image: "/repo.png",
      category: "Web",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      demo: "https://mern-repogalaxy.onrender.com/",
      github: "https://github.com/priyansh-narang2308/MERN-RepoGalaxy",
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates images using machine learning",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      demo: "https://example.com",
      github: "https://github.com",
    },

    {
      title: "AI Mock Interview",
      description: "Help AI ask you 5 mock interview questions with real time camera and feedback generation",
      image: "/job.png",
      category: "Web",
      technologies: ["React", "NextJS", "Tailwind CSS", "Clerk", "NeonDB", "Postgres"],
      demo: "https://ai-mock-interview--ten.vercel.app/dashboard",
      github: "https://github.com/priyansh-narang2308/AI-MOCK-INTERVIEW-",
    },
    {
      title: "Fitness Tracker - CodeFlex",
      description: "Web app for tracking workouts and nutrition using VAPI , an AI which asks your health fitness and generate a proper fitness plan day wise",
      image: "/codeflex.png",
      category: "Web",
      technologies: ["React", "NextJS", "Vapi", "ConvexDB"],
      demo: "https://code-flex-personal-fitness-trainer-using-vapi.vercel.app/",
      github: "https://github.com/priyansh-narang2308/CodeFlex---Personal-Fitness-Trainer-using-VAPI",
    },
    {
      title: "Dating APP - SmashMeMaybe",
      description: "A proper dating web app similar to tinder where users can swipe right and swipe left and on matching a chat window appears where the matches can have chat",
      image: "/smash.png",
      category: "Web",
      technologies: ["React", "NodeJS", "Socket.io", "MongoDB", "ExpressJS"],
      demo: "https://smashmemaybe-dating-mern-app.onrender.com/auth",
      github: "https://github.com/priyansh-narang2308/SmashMeMaybe---Dating-MERN-App",
    },
  ];

  const filters = ["All", "Web", "Mobile", "AI/ML", "IoT"];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

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
            My Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((item) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full border ${filter === item
                ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white"
                : "border-gray-700 text-gray-300 hover:bg-gray-800/50"
                } transition-all duration-300`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900/80 backdrop-blur-sm text-white">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-md bg-gray-700/80 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm text-white hover:opacity-90 transition-opacity"
                  >
                    <Eye size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-700/50 transition-colors"
                  >
                    <Link2 size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
