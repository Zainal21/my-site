"use client";

import { motion } from "framer-motion";

import { skills } from "@/data/skils";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillsCard = () => {
  return (
    <div className="mt-10 flex w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 lg:justify-between">
      {skills.map(({ icon }: any, index: number) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsCard;
