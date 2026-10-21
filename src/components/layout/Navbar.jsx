import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ease } from "../ui/motionPresets";

const links = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Journey",
    href: "#journey",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
  });

  // Highlight the section crossing the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className={`fixed top-0 left-0 z-50 w-full border-b bg-paper transition-shadow duration-500 ${
        scrolled ? "border-line shadow-soft" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <a
          href="#hero"
          className="font-serif text-2xl font-semibold tracking-tight text-ink"
        >
          GG
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`
                    group
                    relative
                    py-2
                    text-sm
                    font-medium
                    transition-colors
                    duration-300
                    hover:text-ink
                    ${active === link.href ? "text-ink" : "text-muted"}
                  `}
                >
                  {link.name}

                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-accent/50 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />

                  {active === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      aria-hidden="true"
                      transition={{ duration: 0.5, ease }}
                      className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}

        <a
          href="/Cv_Ghofran_Gharssallah.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            md:flex
            items-center
            rounded-full
            bg-accent
            px-5
            py-2.5
            text-sm
            font-semibold
            text-ink
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-accent-hover
            hover:shadow-warm
          "
        >
          Download CV
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-ink md:hidden"
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease }}
            className="
              md:hidden
              border-t
              border-line
              bg-paper
            "
          >
            <nav className="px-6 py-6">
              <ul className="space-y-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex
                        items-center
                        gap-3
                        text-lg
                        font-medium
                        transition-colors
                        duration-300
                        hover:text-ink
                        ${active === link.href ? "text-ink" : "text-muted"}
                      `}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-0.5 rounded-full bg-accent transition-all duration-300 ${
                          active === link.href ? "w-5" : "w-0"
                        }`}
                      />

                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="/Cv_Ghofran_Gharssallah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="
                  mt-8
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-accent
                  px-5
                  py-3
                  font-semibold
                  text-ink
                  transition-colors
                  duration-300
                  hover:bg-accent-hover
                "
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
