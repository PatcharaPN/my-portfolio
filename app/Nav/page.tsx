import { Icon } from "@iconify/react";
import React from "react";

const Nav = () => {
  return (
    <div className="static top-0 z-10 flex justify-between w-full px-8 py-6 md:px-32 md:py-10">
      {/* เมนูหลัก */}
      <ul className="flex gap-5 items-center md:gap-10 ">
        <li className="text-white text-xl md:text-base">Projects</li>
        <li className="text-white text-xl md:text-base">Skills</li>
        <li className="text-white text-xl md:text-base">Contact</li>
      </ul>

      {/* ไอคอนและลิงก์ */}
      <div className="flex gap-4 md:gap-10 items-center">
        <Icon
          className="text-white text-[40px] md:text-[40px]"
          icon="fa6-brands:github"
        />
      </div>
    </div>
  );
};

export default Nav;
