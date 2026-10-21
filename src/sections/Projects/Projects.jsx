import ProjectCard from "./ProjectCard";
import SectionHeading from "../../components/ui/SectionHeading";
import { projects } from "../../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Title */}

        <SectionHeading
          number="03"
          label="Featured Projects"
          title="Things I've Built"
          className="mb-24"
        >
          A selection of projects that demonstrate my experience
          in Full Stack Development, Artificial Intelligence,
          and modern web technologies.
        </SectionHeading>

        {/* Cards */}

        <div className="space-y-12 md:space-y-16">

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