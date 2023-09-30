"use client";
import { Instagram, LinkedIn, Mail } from "./Icon/Icons";
import Link from "next/link";
import { Skills } from "./Components/sections/Skills";
import { Background } from "./Components/Background";
import GradientText from "./Components/GradientText";
import One from "./Components/sections/One";
import { TweetCard } from "./Components/TweetCard";

export default function Home() {
  return (
    <main>
      <div className="absolute left-0 h-screen w-full bg-gray-900" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 0 50%)' }}>
        <div className="w-full h-screen absolute z-10 bg-black opacity-10"></div>
          <Background />
      </div>
      <section className="h-screen relative">
        <TweetCard visible={false} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 md:-translate-y-1/3 text-center w-96 md:w-full">
          <h1 className="text-white flex flex-col gap-2 md:gap-5 text-7xl font-bold md:text-8xl md:flex-row md:justify-center mb-6">
            <span>Camilo</span>
            <GradientText
              text="Carreño."
              colors={[
                "oklch(67.3% 0.266 25.039656026515278)",
                "oklch(85.82% 0.201 91.19)",
              ]}
            />
          </h1>

          <p className="text-center mt-3 text-gray-500 text-sm md:text-lg">
            {
              "Experienced developer with a passion for solving complex problems through elegant code. Proficient in multiple languages, frameworks, and tools. Committed to delivering quality and innovative solutions for business success."
            }
          </p>
          <div className="mt-10 flex justify-center items-center gap-3">
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

          <div className="pt-10">
            <span className="text-sm text-gray-500 font-light">
              {`Camilo Carreño 2023 `}&copy;
            </span>
          </div>
        </div>
      </section>
      <section className="relative w-full h-48 my-16 sm:h-0 sm:my-0">
      <TweetCard visible/>
      </section>
      <section className="my-16">
        <Skills />
      </section>
      <section className="py-10">
        <One />
      </section>
    </main>
  );
}
