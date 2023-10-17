import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandFirebase } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { TiCss3 } from "react-icons/ti";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoJava } from "react-icons/bi";
import { TbBrandPython } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Skills = () => {
  let skills = [
    {
      icon: RiReactjsLine,
      name: "Reactjs",
      color: "text-cyan-400",
    },
    {
      icon: SiExpress,
      name: "Expressjs",
      color: "text-cyan-400",
    },
    {
      icon: FaNode,
      name: "Node js",
      color: "text-green-400",
    },
    {
      icon: TbBrandRedux,
      name: "Redux",
      color: "text-purple-600",
    },
    {
      icon: TbBrandFirebase,
      name: "Firebase",
      color: "text-yellow-800",
    },
    {
      icon: SiMui,
      name: "Material UI",
      color: "text-blue-600",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-blue-400",
    },
    {
      icon: SiBootstrap,
      name: "BootStrap",
      color: "text-purple-800",
    },
    {
      icon: TfiHtml5,
      name: "HTML5",
      color: "text-orange-700",
    },
    {
      icon: TiCss3,
      name: "CSS3",
      color: "text-blue-700",
    },
    {
      icon: TbBrandJavascript,
      name: "Javascript",
      color: "text-amber-800",
    },
    {
      icon: BiLogoJava,
      name: "Java",
      color: "text-blue-800",
    },
    {
      icon: TbBrandPython,
      name: "Python",
      color: "text-yellow-500",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-500",
    },
    {
      icon: SiNetlify,
      name: "Netlify",
      color: "text-blue-500",
    },
    {
      icon: BsGithub,
      name: "Github",
      color: "text-white",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-blue-900  w-[100%] ">
      <h1 className="text-center text-[2.5rem] font-bold text-white pt-9">
        Skills & Abilities
      </h1>
      <div className=" flex flex-wrap justify-center gap-10 w-[85%]  p-5">
        {skills.map((element, index) => {
          return (
            <div
              className={`flex flex-col items-center bg-gray-900 p-5 rounded-md w-[12vw]  ${element.color} `}
              key={index}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="text-[4rem]">
                <element.icon />
              </div>
              <div>{element.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
