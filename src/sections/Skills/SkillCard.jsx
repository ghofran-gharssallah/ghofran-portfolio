import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-indigo-500/40
        hover:shadow-[0_0_40px_rgba(99,102,241,.25)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-indigo-500/10
          via-transparent
          to-cyan-500/10
        "
      />

      <div className="relative z-10">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-white/5
            border
            border-white/10
          "
        >
          <Icon className={`text-4xl ${skill.color}`} />
        </div>

        <h3 className="mt-6 text-xl font-bold">
          {skill.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {skill.description}
        </p>

        <span
          className="
            mt-6
            inline-block
            rounded-full
            border
            border-indigo-500/20
            bg-indigo-500/10
            px-3
            py-1
            text-xs
            text-indigo-300
          "
        >
          {skill.category}
        </span>

      </div>
    </motion.div>
  );
};

export default SkillCard;