import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
type SkillProps = {
  name: string;
  icon: string;
  style?: React.CSSProperties;
  delay?: number;
};
const SkillCard: React.FC<SkillProps> = ({ name, icon, style, delay }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="card-wrapper h-[8rem] w-[6rem] md:h-[13rem] relative grid grid-rows-2 gap-2  md:w-[10rem] p-10  rounded-xl animate-appear animation"
      style={{ animationDelay: delay ? `${delay}ms` : "0ms" }}
    >
      <div className="card-content flex justify-around flex-col items-center ">
        <Icon className="w-[5rem] md:h-[4rem]" icon={icon} style={style} />{" "}
        <p className="text-[1rem] md:text-[1.5rem] flex justify-center z-10 items-center">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
