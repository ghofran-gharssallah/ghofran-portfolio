import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const techs = [
  "React",
  "Symfony",
  "Node.js",
  "Python",
  "AI",
];

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
      relative
      z-20
      mx-auto
      flex
      max-w-4xl
      flex-col
      items-center
      text-center
      "
    >
      {/* Badge */}

      <div
        className="
        mb-8
        rounded-full
        border
        border-indigo-500/20
        bg-indigo-500/10
        px-5
        py-2
        text-sm
        text-indigo-300
        "
      >
       • Open to Work  
      </div>

      {/* Title */}

      <h1
        className="
        text-5xl
        font-black
        leading-tight
        md:text-7xl
        "
      >
        Hi, I'm
        <br />

        <span className="bg-gradient-to-r from-white via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
          Ghofran Gharssallah
        </span>
      </h1>

      {/* Subtitle */}

      <p
        className="
        mt-6
        max-w-2xl
        text-xl
        leading-9
        text-zinc-400
        "
      >
        Building modern web applications,
        AI-powered solutions and intelligent
        automation with React, Symfony,
        Node.js, Java and Python.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <a
          href="#projects"
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-indigo-600
          px-7
          py-4
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          hover:bg-indigo-500
          "
        >
          View Projects

          <FaArrowRight />
        </a>

        <a
          href="/Cv_Ghofran_Gharssallah.pdf"
          target="_blank"
          className="
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-7
          py-4
          font-semibold
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-indigo-400
          hover:bg-white/10
          "
        >
          Resume
        </a>

      </div>

      {/* Tech Stack */}

      <div className="mt-12 flex flex-wrap justify-center gap-3">

        {techs.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{
              y: -4,
            }}
            className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            text-zinc-300
            backdrop-blur-xl
            "
          >
            {tech}
          </motion.span>
        ))}

      </div>

      {/* Social */}

      <div className="mt-10 flex gap-6">

        <a
          href="https://github.com/ghofran-gharssallah"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-zinc-500 transition hover:text-white"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/ghofran-gharssallah-7b10122a3"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-zinc-500 transition hover:text-white"
        >
          <FaLinkedin />
        </a>

      </div>

    </motion.div>
  );
};

export default HeroContent;