import React from "react";
import { Icon } from "@iconify/react";
type SkillProps = {
  name: string;
  icon: string;
  style?: React.CSSProperties;
  delay?: number;
};
const SkillCard: React.FC<SkillProps> = ({ name, icon, style, delay }) => {
  return (
    <div
      className="card-wrapper h-[13rem] relative grid grid-rows-2 gap-2  w-[10rem] p-10  rounded-xl animate-appear animation"
      style={{ animationDelay: delay ? `${delay}ms` : "0ms" }}
    >
      <div className="card-content flex justify-around flex-col items-center ">
        <Icon width={70} icon={icon} style={style} />{" "}
        <p className="text-[22px] flex justify-center z-10 items-center">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
