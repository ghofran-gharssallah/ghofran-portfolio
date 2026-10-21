import { motion } from "framer-motion";

const shapes = [
  {
    className:
      "-left-24 top-28 h-72 w-72 bg-accent-tint md:h-[420px] md:w-[420px] rounded-[42%_58%_63%_37%/45%_40%_60%_55%]",
    animate: { x: [0, 30, 0], y: [0, -25, 0], rotate: [0, 12, 0] },
    duration: 18,
  },
  {
    className:
      "-right-20 top-1/4 h-64 w-64 bg-butter-tint md:h-[380px] md:w-[380px] rounded-[58%_42%_38%_62%/52%_60%_40%_48%]",
    animate: { x: [0, -25, 0], y: [0, 30, 0], rotate: [0, -10, 0] },
    duration: 22,
  },
  {
    className:
      "bottom-10 left-1/3 h-40 w-40 bg-butter/30 md:h-56 md:w-56 rounded-[63%_37%_54%_46%/55%_48%_52%_45%]",
    animate: { x: [0, 20, 0], y: [0, -20, 0], rotate: [0, 18, 0] },
    duration: 16,
  },
];

const FloatingShapes = () => {
  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          animate={shape.animate}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute blur-2xl ${shape.className}`}
        />
      ))}
    </>
  );
};

export default FloatingShapes;
