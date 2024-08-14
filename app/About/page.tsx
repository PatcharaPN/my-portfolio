import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-[140vh] w-full overflow-y-hidden">
      <div className="flex justify-center flex-col items-center mt-20">
        <h1 className="text-white text-[30px] mb-10">About</h1>
        <p className="text-white text-center w-[70%] mb-40">
          “Since the beginning, I’ve graduated from Bangkok University with a
          degree in Computer & Robotic Engineering in 2024. My educational
          journey has equipped me with a strong foundation in both theoretical
          and practical aspects of computer science and robotics. During my time
          at the university, I engaged in various projects that enhanced my
          skills in programming, Design, and system design.
          <br /> Now, I am actively seeking a career opportunity where I can
          apply my knowledge and skills to real-world challenges. I am
          particularly passionate about developing innovative solutions and
          working on cutting-edge technologies. My goal is to contribute to a
          dynamic team, where I can continue to learn and grow professionally
          while making a significant impact on the projects I am involved in.”;
        </p>
      </div>
      <h2 className="text-white text-[30px] px-72 ">Education</h2>
      <div className="grid grid-cols-1 py-20 px-48">
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <img
              className="bg-cover rounded-full w-[300px] h-[300px]"
              src="/bg.webp"
              alt=""
            />
          </div>
          <div className="grid grid-cols-[0.09fr,1fr]">
            <div>
              <div className="flex flex-col text-[#48A6E4] items-center gap-4">
                <Icon width={30} icon="icon-park-outline:dot" />
                <div className="w-1 h-80 bg-[#48A6E4] rounded-3xl"></div>
              </div>
              <div></div>
            </div>
            <div className="grid grid-rows-[1fr,0.3fr] items-center">
              <div className="text-white gap-3 flex flex-col text-[25px] pl-5 font-thin">
                <p className="text-[#47C5FB]">Bangkok University</p>
                <p>Bachelor of Engineering</p>
                <p>Computer and Robotics Engineering</p>
              </div>
              <div className="flex justify-end items-center">
                <p className="text-[#47C5FB] text-[20px] px-20 font-thin">
                  2019-2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
