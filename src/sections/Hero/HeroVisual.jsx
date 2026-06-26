import { motion } from "framer-motion";

import BackgroundGlow from "../../components/hero/BackgroundGlow";
import GridOverlay from "../../components/hero/GridOverlay";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >
      <BackgroundGlow />

      <GridOverlay />
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
border-indigo-500/10
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
border-cyan-500/10
"
/>
    </motion.div>
  );
};

export default HeroVisual;