"use client";
import React from "react";
import { Instagram, LinkedIn, Mail } from "./Icon/Icons";
import Link from "next/link";
import { Skills } from "./Components/sections/Skills";
import { Background } from "./Components/Background";
import One from "./Components/sections/One";
import { TweetCard } from "./Components/TweetCard";
import { thoughts } from "./utils/thoughts";
import { Experience } from "./Components/sections/Experience";
import { NewSection } from "./styles/components/NewSection";
import Image from "next/image";

export default function Home() {
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
        <div className="absolute w-full h-screen grid items-center justify-center gap-4">
          <div className="flex items-center justify-center flex-col">
            <div style={{ minWidth: '70px' }} className="mb-4">
              <Image
                className="object-cover h-32 w-32 rounded-full shadow-md"
                src={"/images/camilo-perfil.JPG"}
                width={500}
                height={500}
                alt="Picture of the author"
                priority
                style={{ objectPosition: 'center -5px'}}
              />
            </div>
            <h1 className="text-white flex flex-col gap-1 text-4xl font-extrabold font-nunito md:text-6xl mb-2 text-center">
              <span>Camilo</span>
              <span>Carreño Beleño</span>
            </h1>
            <span className="text-xl md:text-3xl">{"Front-end Web Developer"}</span>
            <p className="text-center mt-3 text-gray-500 text-sm md:w-1/2">
              {
                "Software engineer and web developer with over 2 years of work experience, and 5+ years of self-taught expertise in web and mobile development. Passionate about building projects, a lover of structures and algorithms."
              }
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
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
        </div>
      </section>
      <NewSection>
        <Experience />
      </NewSection>
      <NewSection>
        <Skills />
      </NewSection>
      <NewSection>
        <One />
      </NewSection>
    </main>
  );
}
