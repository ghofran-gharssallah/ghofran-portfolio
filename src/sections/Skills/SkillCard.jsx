import { motion } from "framer-motion";
import { ease } from "../../components/ui/motionPresets";
import { iconColor } from "./iconColors";

const pop = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={pop}
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-line
        bg-surface
        p-6
        shadow-soft
        transition-[box-shadow,border-color]
        duration-500
        hover:border-accent
        hover:shadow-warm
      "
    >
      <div className="relative z-10">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-paper
            border
            border-line
            transition-transform
            duration-500
            ease-out
            group-hover:-rotate-6
            group-hover:scale-110
          "
        >
          <Icon className={`text-3xl ${iconColor(skill.color)}`} />
        </div>

        <h3 className="mt-6 text-xl font-medium">
          {skill.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted">
          {skill.description}
        </p>

        <span
          className="
            mt-6
            inline-block
            rounded-full
            bg-accent-tint
            px-3
            py-1
            text-xs
            font-medium
            text-ink
          "
        >
          {skill.category}
        </span>

      </div>
    </motion.div>
  );
};

export default SkillCard;
