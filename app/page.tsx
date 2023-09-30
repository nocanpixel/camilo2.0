"use client";
import { Instagram, LinkedIn, Mail } from "./Icon/Icons";
import Link from "next/link";
import { Skills } from "./Components/sections/Skills";
import { Background } from "./Components/Background";
import GradientText from "./Components/GradientText";
import One from "./Components/sections/One";
import { TweetCard } from "./Components/TweetCard";
import { thoughts } from "./utils/thoughts";

export default function Home() {
  return (
    <main>
      <div className="absolute left-0 h-screen w-full bg-gray-900">
        <div className="w-full h-screen absolute z-10 backdrop-filter bg-opacity-10 backdrop-blur-md"></div>
        <Background />
      </div>
      <div
        className="absolute left-0 h-screen w-full z-20 bg-black"
        style={{ clipPath: "polygon(0 50%, 100% 23%, 100% 100%, 0% 100%)" }}
      ></div>
      <section className="h-screen relative z-30">
        <div className="absolute w-full h-screen grid md:grid-cols-2 items-center md:items-center md:justify-center md:gap-7">
          <div>
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
            className="relative bg-gray-100 p-2 rounded-md w-2/2 hidden md:block"
            style={{ minHeight: "40%", maxHeight: "100%" }}
          >
            <div className="py-5">
              <span className="text-gray-800 font-semibold text-2xl pl-2">
                {"@Thoughts •"}
              </span>
            </div>
            <div className="overflow-auto h-44 md:h-56">
            {thoughts?.map(item => (
              <div key={item.id} className="py-1" >
                <TweetCard text={item.text} />
              </div>
            ))}
            </div>
            <div className="w-full h-10 mt-10">
              <div className=" w-full flex items-center h-10 justify-center">
                <span className="text-sm text-gray-400 font-light">
                  {`Camilo Carreño 2023 `}&copy;
                </span>
              </div>
            </div>
          </div>
          <div className=" h-32 absolute bottom-0 md:hidden">
            <TweetCard text={thoughts[0].text} />
          </div>
        </div>
      </section>
      <section className="mb-16 mt-4">
        <Skills />
      </section>
      <section className="py-10">
        <One />
      </section>
    </main>
  );
}
