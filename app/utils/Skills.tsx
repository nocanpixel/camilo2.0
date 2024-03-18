import React from "react";
import { LogoGit, LogoJs, LogoNode, LogoReact, LogoRedux, LogoSql, LogoStyledComponents } from "../Icon/Icons";
import { Skill } from "../types/interfaces";

export const skills: Skill[] = [
  {
    id: 1,
    name: "Javascript",
    color: "#F0DB4F",
    text: getTextColor("#F0DB4F"), // Yellow background, black text
    logo: LogoJs,
    experience: "6",
    class: "md:row-span-3"
  },

  {
    id: 2,
    name: "React JS",
    color: "#61DBFB",
    text: getTextColor("#61DBFB"), // Red background, black text
    logo: LogoReact,
    experience: "4",
    class: "md:row-span-3 md:col-start-4 md:row-start-3  "
  },
  {
    id: 3,
    name: "Github",
    color: "#EE513B",
    text: getTextColor("#F3FA8C"), // Yellow background, black text
    logo: LogoGit,
    experience: "4",
    class: "md:row-span-3 md:col-start-5 md:row-start-1"
  },
  {
    id: 4,
    name: "Node JS",
    color: "#3C873A",
    text: getTextColor("#3C873A"), // Green background, white text
    logo: LogoNode,
    experience: "2",
    class: "md:row-span-3 md:col-start-3 md:row-start-1 "
  },
  {
    id: 5,
    name: "SQL",
    color: "#F06529",
    text: getTextColor("#F06529"), // Orange background, white text
    logo: LogoSql,
    experience: "6",
    class: "md:row-span-3 md:col-start-2 md:row-start-3 "
  },
  {
    id: 6,
    name: "React Native",
    color: "#dc3cb1",
    text: getTextColor("#3C99DC"), // Red background, white text
    logo: LogoReact,
    experience: "1",
    class: "md:row-span-3 md:col-start-5 md:row-start-4 "
  },
  {
    id: 7,
    name: "S. components",
    color: "#c3ce4c",
    text: getTextColor("#4D326B"), // Pink background, black text
    logo: LogoStyledComponents,
    experience: "2",
    class: "md:row-span-3 md:col-start-3 md:row-start-4 "
  },
  {
    id: 9,
    name: "Redux",
    color: "#764ABC",
    text: getTextColor("#EFB9E4"), // Purple background, white text
    logo: LogoRedux,
    experience: "2",
    class: "md:row-span-3 md:col-start-1 md:row-start-4"
  },
];

function getTextColor(backgroundColor: string) {
  // Convert the background color to a RGB value
  const r = parseInt(backgroundColor.slice(1, 3), 16);
  const g = parseInt(backgroundColor.slice(3, 5), 16);
  const b = parseInt(backgroundColor.slice(5, 7), 16);

  // Calculate the brightness using a simple formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black for light backgrounds and white for dark backgrounds
  return brightness > 128 ? "#000000" : "#FFFFFF";
}




