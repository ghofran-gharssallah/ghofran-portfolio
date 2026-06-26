import { motion } from "framer-motion";

const JourneyCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      className="
      relative
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-6
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-3
      hover:scale-[1.02]
      hover:border-indigo-500/40
      hover:shadow-[0_0_45px_rgba(99,102,241,.35)]
      "
    >
      {/* Year */}

      <span className="text-sm font-semibold text-indigo-400">
        {item.year}
      </span>

      {/* Title */}

      <h3 className="mt-2 text-2xl font-bold">
        {item.title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-7 text-zinc-400">
        {item.description}
      </p>
    </motion.div>
  );
};

export default JourneyCard;