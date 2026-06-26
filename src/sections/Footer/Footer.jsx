import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050816]">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Left */}

          <div>

            <h2 className="text-2xl font-bold">
              Ghofran Gharssallah
            </h2>

            <p className="mt-3 max-w-md text-zinc-400">
              Full Stack Developer passionate about building
              modern web applications and AI-powered solutions.
            </p>

          </div>

          {/* Social */}

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/ghofran-gharssallah"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition
              hover:border-indigo-500
              hover:bg-indigo-500/20
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ghofran-gharssallah-7b10122a3"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition
              hover:border-cyan-500
              hover:bg-cyan-500/20
              "
            >
              <FaLinkedin />
            </a>

            <button
              onClick={scrollTop}
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-indigo-600
              transition
              hover:bg-indigo-500
              "
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-white/10 pt-8 text-center">

          <p className="text-zinc-500">
            © {new Date().getFullYear()} Ghofran Gharssallah.
            All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-zinc-600">
           Crafted with React, Tailwind CSS and Framer Motion.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;