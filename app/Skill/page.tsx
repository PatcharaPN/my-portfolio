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
    <div className="h-screen w-auto">
      <div className="text-white text-[30px]">
        <h2 className="text-white text-[30px] px-72">Skills</h2>
        <div className="grid grid-rows-2 gap-16">
          <div className="flex flex-col items-center gap-20">
            <h2>Programming Languages</h2>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
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
            <h2>Frontend Technologies</h2>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
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
            <h2>Backend Technologies</h2>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
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
            <h2>Other Technologies</h2>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
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
        <h2 className="text-white text-[30px] px-72 mt-40 ">Projects</h2>

        <div className="grid grid-cols-2 p-20">
          <div className="relative h-[89vh]">
            <div className="w-[300px] h-[300px] bg-[#00B5F8] rounded-full blur-[100px] absolute top-72 left-[30%] z-0"></div>
            <div className="w-[100px] h-[200px] bg-[#496aff] rounded-full blur-[100px] absolute top-72 left-[20%] z-0"></div>
            <div className="w-[100px] h-[200px] bg-[#496aff] rounded-full blur-[100px] absolute top-[55%] left-[35%] z-0"></div>
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
          <div className="flex flex-col justify-center">
            <span className="my-10 text-[40px] bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400 inline-block text-transparent bg-clip-text">
              Phandal Project
            </span>
            <div>
              <p className="text-white w-[80%] text-[18px]">
                Developed a full-stack mobile application using Flutter for the
                frontend and NestJS for the backend. The app implements
                authentication (registration, login, JWT-based sessions) and
                manages user data with MongoDB. State management in the Flutter
                app is handled using the BLoC pattern, ensuring a scalable and
                maintainable architecture. The backend API, built with NestJS,
                provides secure authentication using JWT, along with robust
                validation and error handling. The project highlights a
                well-structured, responsive UI, along with seamless integration
                between the frontend and backend, demonstrating proficiency in
                full-stack mobile development.
              </p>
            </div>
            <span className="mt-20 text-[29px] mb-10 bg-gradient-to-r from-[#447ECE] via-[#08B1FF] to-indigo-400 inline-block text-transparent bg-clip-text">
              Stack
            </span>
            <div className="flex text-[50px] gap-10">
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
