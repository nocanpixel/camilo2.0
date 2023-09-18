"use client";
import Image from "next/image";
import { Instagram, LinkedIn, Mail, TwitterBadge } from "./Icon/Icons";
import Link from "next/link";
import { Skills } from "./Components/sections/Skills";
import { Background } from "./Components/Background";
import GradientText from "./Components/GradientText";
import One from "./Components/sections/One";

export default function Home() {
  return (
    <main>
      <div className="absolute left-0 h-screen w-full">
      <Background />
      </div>
      <section className="h-screen relative">
        <div
          className="
        absolute bottom-0 md:bottom-auto md:top-24 md:right-0 z-20 bg-white p-2 py-7 md:py-2 rounded-md flex gap-1 md:gap-3 items-center md:flex-row flex-col justify-center
        "
        >
          <span className="h-4 w-4 p-2 bg-sky-400 rounded-full absolute -right-1 -top-1 animate-ping "></span>
          <span className="h-1 w-1 p-2 bg-sky-400 rounded-full absolute -right-1 -top-1"></span>
          <div className=" md:w-14 rounded-full overflow-hidden">
            <Image
              className=" w-14 h-14 md:h-14 md:w-14 object-cover "
              src={"/images/camilo.JPG"}
              width={500}
              height={500}
              alt="Picture of the author"
              priority
            />
          </div>
          <div className="flex flex-col md:text-left gap-2 md:gap-0 items-center md:items-start text-center">
            <h1 className="font-bold text-sm text-gray-800 flex gap-1 items-center">
              {"@CamiloCarreno"}
              <span className="w-4">
                <TwitterBadge />
              </span>
              <span className="text-xs text-gray-400 font-light">
                {"• 18:03"}
              </span>
            </h1>
            <p className="text-black text-xs w-full px-2 md:px-0 md:w-96">
              {
                "Just realized coding is like baking a cake: a little syntax, a pinch of logic, and a lot of 'trial and error' frosting! 🍰💻 "
              }
              <span className="text-sky-600 font-semibold cursor-pointer">
                {"#CodeChefLife #CodingAdventures"}
              </span>
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 md:-translate-y-1/3 text-center w-96 md:w-full">
          <h1 className="text-white flex flex-col gap-2 md:gap-5 text-7xl font-bold md:text-8xl md:flex-row md:justify-center mb-6">
            <span>Camilo</span>
            <GradientText text="Carreño." colors={["oklch(67.3% 0.266 25.039656026515278)", "oklch(85.82% 0.201 91.19)"]} />
          </h1>

          <p className="text-center mt-3 text-gray-500 text-sm md:text-lg">
            {"Experienced developer with a passion for solving complex problems through elegant code. Proficient in multiple languages, frameworks, and tools. Committed to delivering quality and innovative solutions for business success."}
          </p>
          <div className="mt-10 flex justify-center items-center gap-3">
            <Link href={"https://www.instagram.com/juanca_milo14/?theme=dark"} target="_blank">
            <div className="w-5">
              <Instagram />
            </div>
            </Link>
            <Link href={"https://www.linkedin.com/in/juan-camilo-carre%C3%B1o-bele%C3%B1o-290a37177/"}>
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

          <div className="pt-10">
              <span className="text-sm text-gray-500 font-light">{`Camilo Carreño 2023 `}&copy;</span>
          </div>
        </div>
      </section>
      <section className="my-16">
        <Skills/>
      </section>
      <section className="py-10">
        <One />
      </section>
    </main>
  );
}
