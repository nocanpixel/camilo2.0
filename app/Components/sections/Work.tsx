import React from "react";
import Card from "../Card";
import { projects } from "@/app/utils/projects";
import { Project } from "@/app/types/interfaces";
import { useLocale, useTranslations } from "next-intl";

const One = () => {
  const t = useTranslations('Work')
  const numGroups = 3;
  const groups: Project[][] = Array.from({ length: numGroups }, () => []);
  const localActive = useLocale();
  
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
          {t('title')}
        </h1>
      <div className={`pt-10 grid grid-flow-row md:grid-cols-3 gap-4`}>
        {groups.map((element: {[key:string]:any}, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              {element.map((project:any) => (
                <Card
                  key={project.id}
                  url={project.url}
                  github={project.github}
                  githubUrl={project.githubUrl}
                  title={project.title}
                  description={project[localActive].description}
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
