import { Icon } from "@iconify/react";
import React from "react";
const Nav = () => {
  return (
    <div className="absolute top-0 z-10 flex justify-between w-full px-32 py-10">
      <ul className="flex gap-10">
        <li className="text-white">Projects</li>
        <li className="text-white">Skills</li>
      </ul>

      <div className="flex gap-10 items-center">
        <Icon className="text-white text-[40px]" icon="fa6-brands:github" />
      </div>
    </div>
  );
};

export default Nav;
