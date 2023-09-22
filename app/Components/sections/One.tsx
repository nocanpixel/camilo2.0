import React from "react";
import Card from "../Card";
import { projects } from "@/app/utils/projects";
import { Project } from "@/app/types/interfaces";

const One = () => {

  const numGroups = 3;
  const groups: Project[][] = Array.from({ length: numGroups }, () => []);
  
  projects.forEach((project, index) => {
    const groupIndex = index % numGroups;
    groups[groupIndex].push(project);
  });

  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-8">
        <span
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage:
              "linear-gradient(90deg, oklch(59.59% 0.24 255.09156059071347), oklch(81.58% 0.189 190.74037768509325))",
          }}
        >
          Projects
        </span>
      </h1>
      <h2 className="flex flex-col md:flex-row gap-4 items-center justify-center pt-4">
        <span className="text-3xl text-white">My recent work</span>
        <span className="text-lg text-center md:text-start text-gray-400">
          {"Here are a few design projects I've worked on."}
        </span>
      </h2>
      <div className={`pt-10 grid grid-cols-1 md:grid-cols-3 gap-4`}>
        {groups.map((element, index) => {
          return (
            <div key={index} className="grid gap-4">
              {element.map((project) => (
                <Card
                  key={project.id}
                  url={project.url}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default One;
