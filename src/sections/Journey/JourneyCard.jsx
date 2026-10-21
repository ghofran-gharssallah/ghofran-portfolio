import { motion } from "framer-motion";
import { ease } from "../../components/ui/motionPresets";

const JourneyCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        ease,
      }}
      className="
      relative
      rounded-2xl
      border
      border-line
      bg-surface
      p-6
      shadow-soft
      transition-[translate,box-shadow,border-color]
      duration-500
      ease-out
      hover:-translate-y-1.5
      hover:border-accent
      hover:shadow-warm
      md:p-8
      "
    >
      {/* Year */}

      <span className="inline-block rounded-full bg-butter-tint px-3 py-1 text-sm font-semibold text-ink">
        {item.year}
      </span>

      {/* Title */}

      <h3 className="mt-4 text-2xl font-medium">
        {item.title}
      </h3>

      {/* Description */}

      <p className="mt-3 leading-7 text-muted">
        {item.description}
      </p>
    </motion.div>
  );
};

export default JourneyCard;
