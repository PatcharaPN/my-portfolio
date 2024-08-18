"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Nav = () => {
  const [Modal, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(!Modal);
  };

  return (
    <div className="fixed md:bg-transparent h-[4rem] top-0 z-[9999] flex justify-between w-full px-8 py-10 md:px-32 md:py-10 items-center  bg-[#17192f9c] backdrop-blur-2xl">
      {/* เมนูหลัก */}
      <ul className="flex gap-5 items-center md:gap-10">
        <li className="text-white text-xl md:text-base">Projects</li>
        <li className="text-white text-xl md:text-base">Skills</li>
        <li className="text-white text-xl md:text-base">Contact</li>
      </ul>

      {/* ไอคอนและลิงก์ */}
      <div className="hidden md:flex md:gap-20 gap-0 md:items-center">
        <Icon
          className="text-white text-[30px] md:text-[2rem]"
          icon="fa6-brands:github"
        />
        <Icon
          className="text-white text-[30px] md:text-[2rem]"
          icon="ri:linkedin-fill"
        />
        <Icon
          className="text-white text-[30px] md:text-[2rem]"
          icon="mdi:instagram"
        />
      </div>
      <div className="md:hidden">
        <Icon
          onClick={handleOpenModal}
          icon="pajamas:hamburger"
          className="text-white text-[30px] md:text-[2rem]"
        />
      </div>
      {Modal ? (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute h-fit py-10 top-[90%] left-0 z-10 w-full bg-[#17192f9c] backdrop-blur-2xl z-2"
        >
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-[0.5fr,200px] items-center p-6 w-full hover:bg-slate-500 duration-200 rounded-2xl">
              <div className="flex items-center justify-center">
                <Icon
                  className="text-white text-[30px] md:text-[2rem] "
                  icon="fa6-brands:github"
                />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-white">Github</p>
              </div>
            </div>
            <div className="grid grid-cols-[0.5fr,200px] items-center p-6 w-full hover:bg-slate-500 duration-200 rounded-2xl">
              <div className="flex items-center justify-center">
                <Icon
                  className="text-white text-[30px] md:text-[2rem] "
                  icon="fa6-brands:linkedin"
                />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-white">LinkedIn</p>
              </div>
            </div>
            <div className="grid grid-cols-[0.5fr,200px] items-center p-6 w-full hover:bg-slate-500 duration-200 rounded-2xl">
              <div className="flex items-center justify-center">
                <Icon
                  className="text-white text-[30px] md:text-[2rem] "
                  icon="fa6-brands:instagram"
                />
              </div>
              <div className="flex items-center justify-center">
                <p className="text-white">Instagram</p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Nav;
