import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24 text-center"
        >

          <span className="font-semibold uppercase tracking-[5px] text-indigo-400">
            Featured Projects
          </span>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            Things I've Built
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A selection of projects that demonstrate my experience
            in Full Stack Development, Artificial Intelligence,
            and modern web technologies.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="space-y-16">

          {projects.map((project, index) => (

            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;