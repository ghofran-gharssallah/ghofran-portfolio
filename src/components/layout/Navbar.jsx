import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

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

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,.25)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <a
          href="#hero"
          className="text-2xl font-bold tracking-wide"
        >
          GG<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-300 transition duration-300 hover:text-white"
                >
                  {link.name}
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
            rounded-xl
            border
            border-indigo-500/20
            bg-indigo-600
            px-5
            py-3
            text-sm
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:bg-indigo-500
          "
        >
          Download CV
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white md:hidden"
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              border-t
              border-white/10
              bg-[#050816]/95
              backdrop-blur-xl
            "
          >
            <nav className="px-6 py-6">
              <ul className="space-y-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        block
                        text-lg
                        font-medium
                        text-zinc-300
                        transition
                        duration-300
                        hover:text-white
                      "
                    >
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
                  rounded-xl
                  bg-indigo-600
                  px-5
                  py-3
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-indigo-500
                "
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;