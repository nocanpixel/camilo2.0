"use client";
import Image from "next/image";
import { Background } from "./Components/Background";
import GradientText from "./Components/GradientText";
import One from "./Components/sections/One";
import { Instagram, LinkedIn, Mail, TwitterBadge } from "./Icon/Icons";

export default function Home() {
  return (
    <main>
      <section className="h-screen relative">
        <div
          className="
        absolute top-28 md:right-0 z-20 bg-white p-2 rounded-md flex gap-3 items-center
        "
        >
          <span className="h-4 w-4 p-2 bg-sky-400 rounded-full absolute -right-1 -top-1 animate-ping "></span>
          <span className="h-1 w-1 p-2 bg-sky-400 rounded-full absolute -right-1 -top-1"></span>
          <div className=" w-32 md:w-14">
            <Image
              className=" w-14 h-14 md:h-14 md:w-14 rounded-full object-cover "
              src={"/images/camilo.JPG"}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-sm text-gray-800 flex gap-1 items-center">
              {"@CamiloCarreno"}
              <span className="w-4">
                <TwitterBadge />
              </span>
              <span className="text-xs text-gray-400 font-light">
                {"• 18:03"}
              </span>
            </h1>
            <p className="text-black text-xs w-full md:w-96">
              {
                "Just realized coding is like baking a cake: a little syntax, a pinch of logic, and a lot of 'trial and error' frosting! 🍰💻 "
              }
              <span className="text-sky-600 font-semibold cursor-pointer">
                {"#CodeChefLife #CodingAdventures"}
              </span>
            </p>
          </div>
        </div>
        <Background />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center w-96 md:w-full">
          <h1 className="text-white flex flex-col gap-2 md:gap-5 text-7xl font-bold md:text-8xl md:flex-row md:justify-center mb-6">
            <span>Camilo</span>
            <GradientText text="Carreño." colors={["#FF6101", "#FD7F2B"]} />
          </h1>

          <p className="text-center mt-3 text-gray-500 text-sm md:text-lg">
            Experienced developer with a passion for solving complex problems
            through elegant code. Proficient in multiple languages, frameworks,
            and tools. Committed to delivering quality and innovative solutions
            for business success.
          </p>
          <div className="pt-10 flex justify-center items-center gap-3">
            <div className="w-5">
              <Instagram />
            </div>
            <div className="w-5">
              <LinkedIn />
            </div>
            <div className="w-5">
              <Mail />
            </div>
          </div>
        </div>
      </section>
      <section>
        <One />
      </section>
    </main>
  );
}
