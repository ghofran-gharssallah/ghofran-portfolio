import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SectionHeading from "../../components/ui/SectionHeading";
import { stagger } from "../../components/ui/motionPresets";
import { skills } from "../../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <SectionHeading
          number="02"
          label="My Tech Stack"
          title="Technologies I Work With"
          className="mb-14"
        >
          I enjoy building scalable web applications with modern
          frontend technologies, robust backend frameworks,
          and Artificial Intelligence.
        </SectionHeading>

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Cards */}

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >

          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              skill={skill}
            />
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
