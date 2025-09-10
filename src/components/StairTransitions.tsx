// src/app/StairTransitions.tsx

"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

const StairTransitions = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Wrap everything in one parent so AnimatePresence has only one child */}
      <motion.div key={pathname} className="relative">
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransitions;
