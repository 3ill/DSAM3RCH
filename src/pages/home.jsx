import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { dsa } from "../assets";

import {
  headContainerAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";

const home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header>
            <img src={dsa} alt="logo" className="w-8 h-8 object-contain" />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default home;
