import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import JourneyCard from "./JourneyCard";
import SectionHeading from "../../components/ui/SectionHeading";
import { journey } from "../../data/journeyData";

const Journey = () => {
  const timelineRef = useRef(null);

  // Line grows from the first to the last item as they cross the viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 55%"],
  });

  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="journey"
      className="relative overflow-x-clip py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          number="01"
          label="MY JOURNEY"
          title="From Curiosity to Professional Development"
        >
          My path in software development, from learning the
          fundamentals to building modern web applications
          and exploring Artificial Intelligence.
        </SectionHeading>

        <div ref={timelineRef} className="relative mx-auto max-w-5xl">

  {/* Vertical Line */}

  <div className="absolute left-2 top-0 h-full w-px -translate-x-1/2 bg-line md:left-1/2" />

  <motion.div
    style={{ scaleY: lineScale }}
    className="absolute left-2 top-0 h-full w-0.5 origin-top -translate-x-1/2 rounded-full bg-accent md:left-1/2"
  />

  <div className="space-y-12 md:space-y-16">

         {journey.map((item, index) => (
  <div
    key={item.year}
    className={`relative flex items-center ${
      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
    }`}
  >
    {/* Circle */}

    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -45% 0px" }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="
      absolute
      left-2
      z-10
      -ml-2
      h-4
      w-4
      rounded-full
      border-[3px]
      border-accent
      bg-surface
      ring-4
      ring-paper
      md:left-1/2
      "
    />

    <div className="w-full pl-10 md:w-[45%] md:pl-0">
      <JourneyCard
        item={item}
        index={index}
      />
    </div>
  </div>
))}

        </div>
   </div>
      </div>
    </section>
  );
};

export default Journey;
