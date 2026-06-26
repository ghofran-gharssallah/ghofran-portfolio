import { motion } from "framer-motion";

const BackgroundGlow = () => {
  return (
    <>
      {/* Center */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [.2,.35,.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        h-[700px]
        w-[700px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-indigo-500/20
        blur-[180px]
        "
      />

      {/* Left */}

      <motion.div
        animate={{
          x:[-30,30,-30],
          y:[20,-20,20],
        }}
        transition={{
          duration:10,
          repeat:Infinity,
        }}
        className="
        absolute
        -left-40
        top-32
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500/15
        blur-[170px]
        "
      />

      {/* Right */}

      <motion.div
        animate={{
          x:[30,-30,30],
          y:[-20,20,-20],
        }}
        transition={{
          duration:12,
          repeat:Infinity,
        }}
        className="
        absolute
        -right-40
        bottom-20
        h-[500px]
        w-[500px]
        rounded-full
        bg-violet-500/15
        blur-[170px]
        "
      />
    </>
  );
};

export default BackgroundGlow;