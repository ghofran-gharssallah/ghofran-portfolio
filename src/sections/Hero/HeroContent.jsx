import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { ease, fadeUp, stagger } from "../../components/ui/motionPresets";

const techs = [
  "React",
  "Symfony",
  "Node.js",
  "Python",
  "AI",
];

// Name reveal timeline (seconds from mount; a child's own delay replaces the stagger delay)
const WORD_STAGGER = 0.12;
const NAME_START = 0.2;
const HIGHLIGHT_AT = 0.95;
const REST_AT = 1.15;

const word = {
  hidden: { opacity: 0, y: "0.4em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="
      relative
      z-20
      mx-auto
      flex
      max-w-4xl
      flex-col
      items-center
      px-6
      text-center
      "
    >
      {/* Badge */}

      <motion.div
        variants={fadeUp}
        className="
        mb-8
        rounded-full
        border
        border-butter
        bg-butter-tint
        px-5
        py-2
        text-sm
        font-medium
        text-ink
        "
      >
       • Open to Work
      </motion.div>

      {/* Title */}

      <motion.h1
        variants={stagger(WORD_STAGGER, NAME_START)}
        className="
        text-5xl
        font-medium
        leading-[1.15]
        tracking-tight
        md:text-7xl
        "
      >
        <motion.span variants={word} className="inline-block">Hi,</motion.span>{" "}
        <motion.span variants={word} className="inline-block">I'm</motion.span>
        <br />

        {/* Key word with butter marker */}

        <motion.span variants={word} className="relative inline-block italic">
          <motion.span
            aria-hidden="true"
            variants={{
              hidden: { scaleX: 0 },
              show: {
                scaleX: 1,
                transition: { duration: 0.6, ease, delay: HIGHLIGHT_AT },
              },
            }}
            className="absolute inset-x-[-0.12em] bottom-[0.08em] -z-10 h-[0.45em] origin-left -rotate-1 rounded-[0.2em] bg-butter"
          />
          Ghofran
        </motion.span>{" "}

        {/* Hand-drawn underline */}

        <motion.span variants={word} className="relative inline-block italic">
          Gharssallah

          <svg
            viewBox="0 0 220 14"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-0 h-3 w-full text-accent"
          >
            <motion.path
              d="M2 9c18-6 34-6 52-1s34 5 52 0 34-6 52-1 34 5 58-1"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                show: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut", delay: HIGHLIGHT_AT + 0.25 },
                },
              }}
            />
          </svg>
        </motion.span>
      </motion.h1>

      {/* Subtitle, buttons, tech stack and social reveal last */}

      <motion.div
        variants={stagger(0.12, REST_AT)}
        className="flex flex-col items-center"
      >

      <motion.p
        variants={fadeUp}
        className="
        mt-8
        max-w-2xl
        text-lg
        leading-8
        text-muted
        md:text-xl
        md:leading-9
        "
      >
        Building modern web applications,
        AI-powered solutions and intelligent
        automation with React, Symfony,
        Node.js, Java and Python.
      </motion.p>

      {/* Buttons */}

      <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">

        <a
          href="#projects"
          className="
          group
          flex
          items-center
          gap-2
          rounded-full
          bg-accent
          px-7
          py-4
          font-semibold
          text-ink
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-accent-hover
          hover:shadow-warm
          "
        >
          View Projects

          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <a
          href="/Cv_Ghofran_Gharssallah.pdf"
          target="_blank"
          className="
          rounded-full
          border-2
          border-ink
          px-7
          py-[14px]
          font-semibold
          text-ink
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-ink
          hover:text-surface
          "
        >
          Resume
        </a>

      </motion.div>

      {/* Tech Stack */}

      <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-3">

        {techs.map((tech, i) => (
          <motion.span
            key={tech}
            whileHover={{
              y: -3,
            }}
            className={`
            rounded-full
            px-4
            py-1.5
            text-sm
            font-medium
            text-ink
            ${i % 2 === 0 ? "bg-accent-tint" : "bg-butter-tint"}
            `}
          >
            {tech}
          </motion.span>
        ))}

      </motion.div>

      {/* Social */}

      <motion.div variants={fadeUp} className="mt-10 flex gap-6">

        <a
          href="https://github.com/ghofran-gharssallah"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/ghofran-gharssallah-7b10122a3"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
        >
          <FaLinkedin />
        </a>

      </motion.div>

      </motion.div>

    </motion.div>
  );
};

export default HeroContent;
