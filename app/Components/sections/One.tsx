import React from "react";
import Card from "../Card";
import { projects } from "@/app/utils/projects";

const One = () => {

  return (
    <div className="h-screen">
      <h1 className="text-4xl font-bold text-center pt-8">
        <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: 'linear-gradient(90deg, oklch(59.59% 0.24 255.09156059071347), oklch(81.58% 0.189 190.74037768509325))' }}>Projects</span>
      </h1>
      <h2 className="flex flex-col md:flex-row gap-4 items-center justify-center pt-4">
        <span className="text-3xl">My recent work</span>
        <span className="text-lg text-center md:text-start text-gray-400">
          {"Here are a few design projects I've worked on recently."}
        </span>
      </h2>
      <div className={`pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2`}>
        {projects.map((project) => (
          <Card key={project.id} title={project.title} description={project.description} technologies={project.technologies} />
        ))}
      </div>
    </div>
  );
};

export default One;
