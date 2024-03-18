import React from "react";
import Card from "../Card";
import { projects } from "@/app/utils/projects";
import { Project } from "@/app/types/interfaces";
import GradientText from "../GradientText";

const One = () => {
  const numGroups = 3;
  const groups: Project[][] = Array.from({ length: numGroups }, () => []);

  projects.forEach((project, index) => {
    const groupIndex = index % numGroups;
    groups[groupIndex].push(project);
  });

  return (
    <div>
        <h1 className="text-2xl font-mono text-slate-300">
          {/* <GradientText
            className="text-3xl font-nunito font-bold text-center"
            text="Recent work"
            colors={["oklch(49.07% 0.272 300.45)", "oklch(64.53% 0.292 2.47)"]}
          /> */}
          {'Recent work'}
        </h1>
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
