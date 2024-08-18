"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);

  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const [isEducationVisible, setIsEducationVisible] = useState<boolean>(false);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    return () => {
      aboutObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const educationObserver = new IntersectionObserver(
      ([entry]) => {
        setIsEducationVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      educationObserver.observe(educationRef.current);
    }

    return () => {
      educationObserver.disconnect();
    };
  }, []);

  return (
    <div className="h-fit w-full overflow-y-hidden">
      <div
        ref={aboutRef}
        className={`transition-opacity duration-[1000ms] ease-in-out flex justify-center flex-col items-center mt-20 ${
          isAboutVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-white text-[30px] mb-10">About</h1>
        <p className="text-white border-[1px] p-10 rounded-xl border-indigo-500 md:border-none text-center text-[0.8rem]  w-[80%] md:text-[1rem] md:text-center  md:w-[70%] md:mb-40">
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
          while making a significant impact on the projects I am involved in.”
        </p>
      </div>
      <div className={`  `}>
        <h2 className="text-white text-[2rem] mt-10 md:mt-0 text-center md:text-start md:text-[2rem] md:px-72">
          Education
        </h2>
        <div
          ref={educationRef}
          className={`ease-in-out opacity-0 transition-transform duration-[2000ms] md:grid md:grid-cols-1 md:py-20 md:px-48 ${
            isEducationVisible ? "translate-x-0 opacity-100" : "-translate-x-10"
          }`}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 justify-center p-10 md:p-0 rounded-xl m-5 md:m-0 items-center border-[1px] border-indigo-500 md:border-none">
            <div className="flex justify-center">
              <img
                className="bg-cover rounded-full w-[10rem] h-[10rem] md:w-[300px] md:h-[300px]"
                src="/bg.webp"
                alt=""
              />
            </div>
            <div className="flex md:grid md:grid-cols-[0.09fr,1fr]">
              <div>
                <div className="hidden md:flex flex-col text-[#48A6E4] items-center gap-4">
                  <Icon width={30} icon="icon-park-outline:dot" />
                  <div className="hidden md:flex md:w-1 md:h-80 md:bg-[#48A6E4] md:rounded-3xl"></div>
                </div>
              </div>
              <div className="md:grid md:grid-rows-[1fr,0.3fr] items-center">
                <div className="text-white gap-1 md:gap-3 flex flex-col p-10 text-[25px] md:pl-5 font-thin">
                  <p className="text-[#47C5FB] text-[1.2rem] md:text-[1.5rem]">
                    Bangkok University
                  </p>
                  <p className="text-[1.2rem] md:text-[1.5rem]">
                    Bachelor of Engineering
                  </p>
                  <p className="text-[1.2rem] md:text-[1.5rem]">
                    Computer and Robotics Engineering
                  </p>
                </div>
                <div className="flex justify-start md:justify-end items-start md:items-center">
                  <p className="text-[#47C5FB] text-[20px] md:px-20 font-thin">
                    2019-2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
