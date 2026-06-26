import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >

          <span className="font-semibold uppercase tracking-[4px] text-indigo-400">
            My Tech Stack
          </span>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I enjoy building scalable web applications with modern
            frontend technologies, robust backend frameworks,
            and Artificial Intelligence.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;