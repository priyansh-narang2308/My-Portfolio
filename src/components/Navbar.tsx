import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/ThemeProvider";

const names = [
  "PRIYANSH",
  "प्रियांश",
  "பிரியான்ஷ்",
  "প্রিয়াংশ",
  "פרייאנש",
  "ПРИЯНШ",
  "بريانش",
  "プリヤンシュ",
];

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = names[index % names.length];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % names.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="whitespace-nowrap select-none tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-extrabold drop-shadow-md">
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const menuVariants = {
  closed: { x: "100%" },
  open: { x: 0 },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.3, type: "spring", stiffness: 120 },
  }),
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle theme helper
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between py-4 px-6 mx-auto max-w-7xl">
        <a
          href="#"
          className="text-3xl font-extrabold cursor-pointer select-none"
          aria-label="Home"
          tabIndex={0}
        >
          <TypewriterEffect />
        </a>

        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition-colors font-semibold text-lg group"
              tabIndex={0}
            >
              {link.name}
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}


        </nav>

        <div className="md:hidden relative z-50">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* Hamburger / close icon morph with framer-motion */}
            <motion.span
              initial={false}
              animate={menuOpen ? "open" : "closed"}
              className="relative w-6 h-6"
            >
              {/* Top bar */}
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 },
                }}
                transition={{ duration: 0.3 }}
                className="block absolute h-0.5 w-6 bg-white rounded-sm"
              />
              {/* Middle bar */}
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="block absolute h-0.5 w-6 bg-white rounded-sm top-2.5"
              />
              {/* Bottom bar */}
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 },
                }}
                transition={{ duration: 0.3 }}
                className="block absolute h-0.5 w-6 bg-white rounded-sm top-5"
              />
            </motion.span>
          </button>

          {/* Mobile menu panel */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-screen w-[80vw] max-w-sm bg-gray-900 border-l border-gray-700 shadow-2xl z-[60] flex flex-col p-6 overflow-y-auto"
              >
                {/* Close button inside menu */}
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="self-end mb-8 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      className="text-gray-300 hover:text-white text-lg font-semibold transition-colors"
                      tabIndex={0}
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  {/* Theme toggle inside menu */}

                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
