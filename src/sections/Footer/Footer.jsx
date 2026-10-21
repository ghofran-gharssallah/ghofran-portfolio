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
    <footer className="relative border-t border-line bg-surface">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Left */}

          <div>

            <h2 className="font-serif text-2xl font-medium">
              Ghofran Gharssallah
            </h2>

            <p className="mt-3 max-w-md leading-7 text-muted">
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
              border-line
              bg-surface
              text-ink
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent
              hover:bg-accent-tint
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
              border-line
              bg-surface
              text-ink
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-accent
              hover:bg-accent-tint
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
              bg-accent
              text-ink
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-accent-hover
              hover:shadow-warm
              "
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-line pt-8 text-center">

          <p className="text-muted">
            © {new Date().getFullYear()} Ghofran Gharssallah.
            All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-muted">
           Crafted with React, Tailwind CSS and Framer Motion.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;