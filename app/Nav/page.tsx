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
        <button className="border-2 border-[#667EEA] py-3 px-7 rounded-[50px] text-[#667EEA] flex items-center gap-2 transition-all hover:bg-[#447ECE] hover:text-white">
          <Icon icon="carbon:download" />
          Get CV
        </button>
      </div>
    </div>
  );
};

export default Nav;
