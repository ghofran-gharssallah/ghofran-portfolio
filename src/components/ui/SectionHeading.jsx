import { motion } from "framer-motion";
import { ease, fadeUp, stagger } from "./motionPresets";

const SectionHeading = ({ number, label, title, children, className = "mb-20" }) => {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`text-center ${className}`}
    >
      {/* Numbered label */}

      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink"
      >
        <span className="font-serif text-xl italic normal-case tracking-normal text-accent">
          {number}
        </span>

        <span aria-hidden="true" className="h-px w-8 bg-accent" />

        {label}
      </motion.span>

      <motion.h2
        variants={fadeUp}
        className="mx-auto mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl"
      >
        {title}
      </motion.h2>

      {/* Animated underline */}

      <motion.span
        aria-hidden="true"
        variants={{
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 0.8, ease } },
        }}
        className="mx-auto mt-6 block h-1 w-20 origin-left rounded-full bg-accent"
      />

      {children && (
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted"
        >
          {children}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
