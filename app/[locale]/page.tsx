"use client";
import React from "react";
import { HeroName, Instagram, LinkedIn, Mail } from "../Icon/Icons";
import Link from "next/link";
import { Skills } from "../Components/sections/Skills";
import { Background } from "../Components/Background";
import Work from "../Components/sections/Work";
import { Experience } from "../Components/sections/Experience";
import { NewSection } from "../styles/components/NewSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BgVideo } from "../Components/BgVideo";

export default function Home() {

  const t = useTranslations('Index');

  return (
    <main>
      <div className="absolute left-0 h-screen w-full">
        <span className="w-full h-screen absolute backdrop-blur-xl bg-white/5 z-9"></span>
        <BgVideo/>
      </div>
      <div
        className="absolute left-0 h-screen w-full -z-1 bg-black bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:16px_16px]"
        style={{ clipPath: "polygon(0 50%, 100% 20%, 100% 100%, 0% 100%)" }}
      ></div>
      <section className="h-screen relative z-30">
        <div className="absolute w-full h-screen grid items-center justify-center gap-4">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-white w-36 h-36 rounded-full overflow-hidden bg-opacity-5 shadow-md mb-10">
              <Image
                className="object-cover w-full h-full"
                src="/images/camilo-2.png"
                width={500}
                height={500}
                alt="Picture of the author"
                priority
                style={{ objectPosition:'center', scale:2.5 }}
              />
            </div>
            <h1 className="text-white flex flex-col gap-1 text-4xl font-bold font-fira md:text-5xl mb-2 text-center">
              <span>Camilo</span>
              <span>Carreño Beleño</span>
            </h1>
            {/* <span className="mb-6 md:w-1/3 w-2/3">
              <HeroName/>
            </span> */}
            <span className="text-xl font-mono md:text-3xl">{`> ${t('title')}`}</span>
            <p className="text-center mt-3 text-gray-500 text-sm sm:w-8/12 md:w-8/12">
              {t('introduction')}
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
        <Work />
      </NewSection>
    </main>
  );
}
