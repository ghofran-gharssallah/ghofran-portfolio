import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      className="
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_0_40px_rgba(99,102,241,.15)]
      "
    >
      {/* Image */}

      <div className="relative h-[300px] overflow-hidden bg-[#0b1020]">

        <AnimatePresence mode="wait">

          <motion.img
            key={current}
            src={project.images[current]}
            alt={project.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: .35 }}
            className="
            h-full
            w-full
            object-contain
            p-5
            "
          />

        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              rounded-full
              bg-indigo-600
              p-3
              text-white
              shadow-lg
              transition
              hover:bg-indigo-500
              "
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              rounded-full
              bg-indigo-600
              p-3
              text-white
              shadow-lg
              transition
              hover:bg-indigo-500
              "
            >
              <FaChevronRight />
            </button>
          </>
        )}

      </div>

      {/* Dots */}

      {project.images.length > 1 && (

        <div className="mt-5 flex justify-center gap-2">

          {project.images.map((_, i) => (

            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all ${
                current === i
                  ? "h-2.5 w-8 rounded-full bg-indigo-500"
                  : "h-2.5 w-2.5 rounded-full bg-white/30"
              }`}
            />

          ))}

        </div>

      )}

      {/* Content */}

      <div className="p-7">

        <h3 className="text-3xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="
              rounded-full
              bg-indigo-500/10
              px-4
              py-2
              text-sm
              text-indigo-300
              "
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-indigo-600
            px-5
            py-3
            transition
            hover:bg-indigo-500
            "
          >
            <FaGithub />

            GitHub
          </a>

          {project.demo && (

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
              rounded-xl
              border
              border-white/10
              px-5
              py-3
              hover:bg-white/5
              "
            >
              Live Demo
            </a>

          )}

        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;