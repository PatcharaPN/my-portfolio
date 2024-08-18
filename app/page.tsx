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
      <div className="relative h-[80dvh] mt-32 md:h-screen  bg-[#090A15] flex items-center justify-center md:overflow-hidden z-0">
        {/* วงกลมเบลอที่หนึ่ง */}
        {/*        <div
          className="absolute w-full h-full -top-50 -left-50 "
          style={{
            backgroundImage: `url("/bg-gradient-element.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>*/}

        <div className="w-full md:h-3/4 grid grid-rows-1 grid-cols-1 items-center ">
          <div className="flex h-full mb-5 w-full justify-center items-start md:justify-start md:items-center md:ml-28 ">
            <div className="relative z-10 text-white text-center md:text-start ">
              <p className="text-[1.3rem] md:text-[3rem]">
                Hello I'm
                <span className=" mt-10 ml-3 text-[1.3rem] md:text-[2rem] md:mt-20 bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400 inline-block text-transparent bg-clip-text">
                  Patcharapol Pannaen
                </span>
              </p>
              <p className="text-[1.3rem] md:text-[3rem] flex items-center justify-center ">
                I'm looking for career
                <span className="ml-1 bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400 inline-block text-transparent bg-clip-text">
                  {text}
                </span>
              </p>{" "}
            </div>
          </div>{" "}
          <div className="flex flex-col md:w-fit md:ml-32 md:flex-row mdLjustify-center items-center mt-10 gap-5 md:flex md:items-center md:mt-10 md:gap-6">
            <span className="flex  items-center font-bold bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400  w-fit px-5 py-3 md:px-10 md:py-4 rounded-full text-white ">
              Get in touch
            </span>
            <span className="text-white">or</span>
            <span className="flex gap-4 items-center font-bold border-indigo-500 border-[2px] w-fit px-10 py-4 rounded-full text-white ">
              <Icon icon={"lucide:download"}></Icon>
              Get Resume
            </span>
          </div>
          <div className="flex items-center w-full justify-start ml-28"></div>
          {/* Curosel */}
          <h2 className="text-gray-500 text-center mb-10 font-bold text-[20px] mt-5">
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
