import { motion } from "framer-motion";

const GridOverlay = () => {
  return (
    <>
      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_20%,#050816_100%)]
        "
      />
    </>
  );
};

export default GridOverlay;

