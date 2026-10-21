import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "../../components/ui/motionPresets";

import {
  FaGithub,
  FaArrowRight,
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

  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        ease,
      }}
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-line
      bg-surface
      shadow-soft
      transition-[translate,box-shadow,border-color]
      duration-500
      ease-out
      hover:-translate-y-1.5
      hover:border-accent
      hover:shadow-warm
      "
    >
      {/* Image */}

      <div className={`relative h-[300px] overflow-hidden border-b border-line ${
        fromLeft ? "bg-accent-tint" : "bg-butter-tint"
      }`}>

        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">

        <AnimatePresence mode="wait">

          <motion.img
            key={current}
            src={project.images[current]}
            alt={project.title}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: .4, ease }}
            className="
            h-full
            w-full
            object-contain
            p-5
            "
          />

        </AnimatePresence>

        </div>

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
              bg-surface
              p-3
              text-ink
              shadow-soft
              transition-colors
              duration-300
              hover:bg-accent
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
              bg-surface
              p-3
              text-ink
              shadow-soft
              transition-colors
              duration-300
              hover:bg-accent
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
                  ? "h-2 w-6 rounded-full bg-accent"
                  : "h-2 w-2 rounded-full bg-line hover:bg-accent/50"
              }`}
            />

          ))}

        </div>

      )}

      {/* Content */}

      <div className="p-6 md:p-8">

        <h3 className="text-2xl font-medium tracking-tight transition-colors duration-300 md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          {project.technologies.map((tech, i) => (

            <span
              key={tech}
              className={`
              ${i % 2 === 0 ? "bg-accent-tint" : "bg-butter-tint"}
              rounded-full
              px-4
              py-1.5
              text-sm
              font-medium
              text-ink
              `}
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
            group/btn
            rounded-full
            border-2
            border-ink
            px-5
            py-2.5
            text-sm
            font-semibold
            text-ink
            transition-colors
            duration-300
            hover:bg-ink
            hover:text-surface
            "
          >
            <FaGithub />

            GitHub

            <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>

          {project.demo && (

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
              group/btn
              flex
              items-center
              gap-2
              rounded-full
              bg-accent
              px-5
              py-3
              text-sm
              font-semibold
              text-ink
              transition-colors
              duration-300
              hover:bg-accent-hover
              "
            >
              Live Demo

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>

          )}

        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;