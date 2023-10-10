"use client";
import React from "react";
import { Instagram, LinkedIn, Mail } from "./Icon/Icons";
import Link from "next/link";
import { Skills } from "./Components/sections/Skills";
import { Background } from "./Components/Background";
import GradientText from "./Components/GradientText";
import One from "./Components/sections/One";
import { TweetCard } from "./Components/TweetCard";
import { thoughts } from "./utils/thoughts";
import { LikeButton } from "./Components/LikeButton";
import { useStore } from "./hooks/useStore";

export default function Home() {
  const { data, fetchData } = useStore();

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <div className="absolute left-0 h-screen w-full bg-gray-900">
        <div className="w-full h-screen absolute z-10 backdrop-filter bg-opacity-10 backdrop-blur-md"></div>
        <Background />
      </div>
      <div
        className="absolute left-0 h-screen w-full z-20 bg-black bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:16px_16px]"
        style={{ clipPath: "polygon(0 50%, 100% 23%, 100% 100%, 0% 100%)" }}
      ></div>
      <section className="h-screen relative z-30">
        <div className="absolute w-full h-screen grid md:grid-cols-2 items-center md:items-center md:justify-center md:gap-4">
          <div className="col-span-1">
            <h1 className="text-white flex flex-col gap-1 text-7xl font-bold md:text-7xl mb-6 text-center md:text-left">
              <span>Camilo</span>
              <span>Carreño Beleño</span>
            </h1>
            <p className="text-center md:text-left mt-3 text-gray-500 text-sm md:text-md">
              {
                "Experienced developer with a passion for solving complex problems through elegant code. Proficient in multiple languages, frameworks, and tools. Committed to delivering quality and innovative solutions for business success."
              }
            </p>
            <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
              <Link
                href={"https://www.instagram.com/juanca_milo14/?theme=dark"}
                target="_blank"
              >
                <div className="w-5">
                  <Instagram />
                </div>
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/juan-camilo-carre%C3%B1o-bele%C3%B1o-290a37177/"
                }
              >
                <div className="w-5">
                  <LinkedIn />
                </div>
              </Link>
              <Link href={"mailto:juancamilocb96@gmail.com"}>
                <div className="w-5">
                  <Mail />
                </div>
              </Link>
            </div>
          </div>
          <div
            className="relative bg-gray-100 p-2 px-3 pb-14 rounded-md hidden md:block backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-md "
            style={{ minHeight: "50%" }}
          >
            <div className="py-5">
              <span className="text-gray-200 font-semibold text-2xl pl-2 flex items-center justify-between">
                <span>{"#Thoughts •"}</span>
                <div className="flex gap-2">
                  {data ? (
                    <span className="flex items-center gap-1">
                      <LikeButton />
                      <span className="text-xs font-bold">
                        {data && data.message.amount}
                      </span>
                    </span>
                  ) : (
                    <div role="status" className="max-w-sm animate-pulse flex items-center gap-1">
                      <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-500 w-16"></div>
                    </div>
                  )}
                </div>
              </span>
            </div>
            <div className="overflow-auto h-44 md:h-auto">
              {thoughts?.map((item) => (
                <div key={item.id} className="py-1">
                  <TweetCard
                    text={item.text}
                    tags={item.tags}
                    time={item.time}
                  />
                </div>
              ))}
            </div>
            <div className="w-full h-10 absolute bottom-0 left-0">
              <div className="flex items-center h-10 justify-center">
                <span className="text-sm text-gray-400 font-light">
                  {`Camilo Carreño 2023 `}&copy;
                </span>
              </div>
            </div>
          </div>
          <div className=" h-32 absolute bottom-0 md:hidden">
            <TweetCard
              text={thoughts[0].text}
              tags={thoughts[0].tags}
              time={thoughts[0].time}
            />
          </div>
        </div>
      </section>
      <section className="">
        <Skills />
      </section>
      <section className="py-10">
        <One />
      </section>
    </main>
  );
}
