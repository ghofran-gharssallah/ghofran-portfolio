import { motion } from "framer-motion";

import FloatingShapes from "../../components/hero/FloatingShapes";
import GridOverlay from "../../components/hero/GridOverlay";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >
      <GridOverlay />

      <FloatingShapes />
      <div
className="
absolute
bottom-[-220px]
left-1/2
h-[600px]
w-[1600px]
-translate-x-1/2
rounded-[100%]
border
border-line
"
/>

<div
className="
absolute
bottom-[-240px]
left-1/2
h-[700px]
w-[1800px]
-translate-x-1/2
rounded-[100%]
border
border-accent/20
"
/>
    </motion.div>
  );
};

export default HeroVisual;
