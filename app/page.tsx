"use client";
import Image from "next/image";
import LogoCarousel from "./Caroulsel/page";
import About from "./About/page";
import SkillPage from "./Skill/page";
import { useTypewriter } from "react-simple-typewriter";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProjectList from "./Projects/page";
export default function Home() {
  const [text] = useTypewriter({
    words: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
    loop: 0,
  });
  return (
    <div>
      <div className="relative h-screen bg-[#090A15] flex items-center justify-center overflow-hidden ">
        {/* วงกลมเบลอที่หนึ่ง */}
        /*
        {/*        <div
          className="absolute w-full h-full -top-50 -left-50 "
          style={{
            backgroundImage: `url("/bg-gradient-element.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>*/}
        */
        <div className="absolute z-30 -left-12 w-24 h-[900px] bg-[#090A15] blur-xl"></div>
        <div className="absolute z-30 -right-12 w-24 h-[900px] bg-[#090A15] blur-xl"></div>
        <div className="w-full h-3/4 grid grid-rows-1 grid-cols-1 items-center ">
          <div className="flex h-full w-full items-start ml-28 ">
            <div className="relative z-10 text-white text-start">
              <p className="text-[3rem]">
                Hello I'm{" "}
                <span className="mt-20 bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400 inline-block text-transparent bg-clip-text">
                  Patcharapol Pannaen
                </span>
              </p>
              <p className="text-[3rem]">
                I'm looking for career{" "}
                <span className="bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400 inline-block text-transparent bg-clip-text">
                  {text}
                </span>
              </p>{" "}
              <div className="flex items-center mt-10 gap-6">
                {" "}
                <span className="flex items-center font-bold bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400  w-fit px-10 py-4 rounded-full text-white ">
                  Get in touch
                </span>
                <span>or</span>
                <span className="flex gap-4 items-center font-bold border-indigo-500 border-[2px] w-fit px-10 py-4 rounded-full text-white ">
                  <Icon icon={"lucide:download"}></Icon>
                  Get Resume
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="flex items-center w-full justify-start ml-28"></div>
          {/* Curosel */}
          <h2 className="text-gray-500 text-center mb-10 font-bold text-[20px]">
            Tech Stack I've used
          </h2>
          <LogoCarousel />
        </div>
      </div>
      <About />
      <SkillPage />
      <ProjectList />
    </div>
  );
}
