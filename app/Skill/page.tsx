"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import SkillCard from "../components/SkillCard";
import axios from "axios";

interface SkillType {
  name: string;
  icon: string;
  style: React.CSSProperties;
}
const SkillPage = () => {
  const skillRef = useRef<HTMLDivElement | null>(null);
  const [isCard, setIsCardVisible] = useState<boolean>(false);
  const [frontend, setFrontend] = useState<SkillType[]>([]);
  const [backend, setBackend] = useState<SkillType[]>([]);
  const [other, setOtherd] = useState<SkillType[]>([]);
  const [programming, setProgramming] = useState<SkillType[]>([]);

  const fetchFront = useCallback(async () => {
    const res = await axios.get("api/frontend");
    const frontend = res.data;
    setFrontend(frontend);
  }, []);

  useEffect(() => {
    fetchFront();
  }, [fetchFront]);

  const fetchBack = useCallback(async () => {
    const res = await axios.get("api/backend");
    const backend = res.data;
    setBackend(backend);
  }, []);

  useEffect(() => {
    fetchBack();
  }, [fetchBack]);

  const fetchOther = useCallback(async () => {
    const res = await axios.get("api/other");
    const other = res.data;
    setOtherd(other);
  }, []);

  useEffect(() => {
    fetchOther();
  }, [fetchOther]);

  const fetchlanguage = useCallback(async () => {
    const res = await axios.get("api/programming");
    const programming = res.data;
    setProgramming(programming);
  }, []);

  useEffect(() => {
    fetchlanguage();
  }, [fetchlanguage]);
  //programming
  return (
    <div className="md:h-screen w-auto">
      <div className="text-white text-[30px]">
        <h2 className="text-white text-center md:text-start md:text-[2rem] md:px-72">
          Skills
        </h2>
        <div className="grid gap-16">
          <div className="flex flex-col items-center gap-10 md:gap-20">
            <h2 className="text-[1rem] mt-10 md:m-0 md:text-[2rem]">
              Programming Languages
            </h2>
            <div className="flex flex-wrap justify-center md:grid gap-5 md:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              {programming.map((item, index) => (
                <SkillCard
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  style={item.style}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-[1rem] mt-10 md:m-0 md:text-[2rem]">
              Frontend Technologies
            </h2>
            <div className="flex flex-wrap justify-center md:grid gap-5 md:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              {frontend.map((item, index) => (
                <SkillCard
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  style={item.style}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-[1rem] mt-10 md:m-0 md:text-[2rem]">
              Backend Technologies
            </h2>
            <div className="flex flex-wrap justify-center md:grid gap-5 md:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              {backend.map((item, index) => (
                <SkillCard
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  style={item.style}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>{" "}
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-[1rem] mt-10 md:m-0 md:text-[2rem]">
              Other Technologies
            </h2>
            <div className="flex flex-wrap justify-center md:grid gap-5 md:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              {other.map((item, index) => (
                <SkillCard
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  style={item.style}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-auto">
        <h2 className="text-white text-[30px] md:px-72 mt-40 text-center ">
          Projects
        </h2>

        <div className="md:grid md:grid-cols-2 m-5 p-5 md:p-20 md:border-none rounded-xl">
          <div className="hidden md:block  relative h-[89vh]">
            <div className=" w-[300px] h-[300px] bg-[#00B5F8] rounded-full blur-[100px] absolute top-72 left-[30%] z-0"></div>
            <div className=" w-[100px] h-[200px] bg-[#496aff] rounded-full blur-[100px] absolute top-72 left-[20%] z-0"></div>
            <div className=" w-[100px] h-[200px] bg-[#496aff] rounded-full blur-[100px] absolute top-[55%] left-[35%] z-0"></div>
            <img
              className="absolute top-44 left-[45%] z-15"
              src="/iPhone.png"
              width={250}
              alt=""
            />
            <img
              className="absolute top-64 left-[-10%] z-10"
              src="/iPhone vertical.png"
              width={800}
              alt=""
            />
          </div>
          <div className="flex flex-col md:justify-center">
            <span className="md:my-10 text-[40px] bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400 inline-block text-transparent bg-clip-text">
              Phandal Project
            </span>

            <div className="relative h-[300px] md:hidden">
              <div className=" w-[300px] h-[300px] bg-[#00B5F8] rounded-full blur-[100px] absolute top-[10%] left-[30%] z-0"></div>
              <div className=" w-[100px] h-[200px] bg-[#496aff] rounded-full blur-[100px] absolute top-[10%] left-[20%] z-0"></div>
              <div className=" w-[100px] h-[200px] bg-[#496aff] rounded-full blur-[100px] absolute top-[10%] left-[35%] z-0"></div>
              <img
                className="absolute top-[20%] left-[50%] z-15 w-[6rem]"
                src="/iPhone.png"
                alt=""
              />
              <img
                className="absolute top-[15%] left-[20%] z-15 w-[5.5rem]"
                src="/iPhone 12 Pro 6.1_ Mockup Right View.png"
                alt=""
              />
            </div>
            <div className="flex justify-center md:justify-start z-30">
              <p className="text-white w-[80%] text-[0.9rem] text-center md:text-start md:text-[1.1rem] mt-6">
                Developed a full-stack mobile application using Flutter for the
                frontend and NestJS for the backend. The app implements
                authentication (registration, login, JWT-based sessions) and
                manages user data with MongoDB. State management in the Flutter
                app is handled using the BLoC pattern
                <span className="hidden md:block">
                  ensuring a scalable and maintainable architecture. The backend
                  API, built with NestJS, provides secure authentication using
                  JWT, along with robust validation and error handling. The
                  project highlights a well-structured, responsive UI, along
                  with seamless integration between the frontend and backend,
                  demonstrating proficiency in full-stack mobile development.
                </span>
              </p>
            </div>
            <span className=" text-[1.5rem] md:text-[2rem] mt-5 md:mt-20 mb-5 md:mb-10 bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400 inline-block text-transparent bg-clip-text">
              Stack
            </span>
            <div className="flex text-[2rem] md:text-[3rem] gap-5 md:gap-10">
              <Icon icon="logos:flutter" />
              <Icon icon="vscode-icons:folder-type-bloc" />
              <Icon icon="logos:nestjs" />
              <Icon icon="devicon:mongodb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
