import { ButtonToolbars } from "@/app/styles/ButtonToolbar";
import GradientText from "../GradientText";
import { IconClose, IconMinus, IconPlus } from "@/app/Icon/Icons";
import Image from "next/image";
import { experience } from "@/app/utils/experience";

const events = [
  { date: "2020", event: { title: "My title" } },
  { date: "2021", event: { title: "My title" } },
  { date: "2022", event: { title: "My title" } },
];

export const Experience = () => {
  return (
    <div>
      <section>
        {/* <h1 className="flex flex-col md:flex-row gap-4 items-center justify-center pt-4">
          <GradientText
            className="text-3xl font-nunito font-bold text-center"
            text="Professional Experience"
            colors={["oklch(72.06% 0.22 45.53)", "oklch(85.88% 0.197 90)"]}
          />
          <span className="text-lg text-center md:text-start text-gray-400">
            {"Here is a summary of my professional experience."}
          </span>
        </h1>
      </section>
      <section className="w-full p-7 md:p-24 bg-no-repeat bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/003/025/994/large_2x/artificial-pink-yellow-cyan-abstract-soft-shades-free-photo.jpg')] mt-8 relative ">
        <div className="absolute w-full left-0 top-0 h-full bg-white backdrop-filter backdrop-blur-md bg-opacity-10 shadow-md "></div>
        <div className="w-full h-80 bg-black rounded-xl shadow-md overflow-hidden relative z-20">
          <div className="w-full h-10 flex items-center group bg-toolbar-color px-5">
            <div className="flex gap-2 font-thin ">
              <ButtonToolbars className="bg-close-color">
                <IconClose />
              </ButtonToolbars>
              <ButtonToolbars className="bg-minimize-color">
                <IconMinus />
              </ButtonToolbars>
              <ButtonToolbars className="bg-expand-color">
                <IconPlus />
              </ButtonToolbars>
            </div>
            <div className="w-full hidden justify-center md:flex -ml-10 text-xs text-stone-700">
              {"My professional experience"}
            </div>
          </div>
          <div className="mx-auto p-4 bg-black overflow-y-auto h-64 md:pr-52 font-mono text-sm font-extralight">
          <p className="text-green-400">{'$ ./my_professional_experience.sh'}</p>

          <p className="text-white my-2">{'Experience:'}</p>
          <ul>
            <li>
              <span className="text-green-400">{'- [2022 - 2023] :'}</span>
              <span>{' Frontend Developer @ Venturit.'}</span>
              <ul>
                <li>
                  <span className="text-white">
                    {'[Worked as a key member of a collaborative development team, contributing expertise ni front-end technologies to create a user-friendly interface for a cutting-edge HRSM project.]'}
                  </span>
                </li>
                <li>
                  <span className="text-green-400">
                    {'Technologies Used: [React JS, Styled Components, MUI, HTML, CSS]'}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        </div> */}

        <h1 className="text-2xl font-mono text-slate-300">
          {'Professional Experience'}
        </h1>

        <div className="pt-10">
          <ol className="relative border-s border-gray-700 ml-2 md:w-2/3">
            {experience.map((ele) => (
              <li key={ele.id} className="mb-10 ms-4">
                <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-orange-300 bg-orange-300 "></span>
                <time className="mb-1 text-sm font-normal leading-none text-gray-600 font-nunito capitalize">
                  {` ${ele.startDate} - ${ele.endDate} · ${ele.total} `}
                </time>
                <h3 className="text-lg font-semibold text-white mt-2 capitalize">{ele.rol}</h3>
                <div className="flex gap-2 my-2">
                  <Image
                    className="object-cover h-6 w-6 shadow-md"
                    src={"/images/venturit_inc__logo.png"}
                    width={100}
                    height={100}
                    alt="Venturit"
                    priority
                  />
                  <h4>{ele.company}</h4>
                </div>
                <p className="mt-2 text-slate-500 font-light text-sm mb-4">{ele.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};
