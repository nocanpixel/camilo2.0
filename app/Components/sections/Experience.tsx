import Image from "next/image";
import { experience } from "@/app/utils/experience";
import { useLocale, useTranslations } from "next-intl";


export const Experience = () => {
  let localActive = useLocale();
  const t = useTranslations('Experience');

  return (
    <div>
      <section>
        <h1 className="text-2xl font-mono text-slate-300">
          {t('title')}
        </h1>

        <div className="pt-10">
          <ol className="relative border-s border-gray-700 ml-2 md:w-2/3">
            {experience.map((ele: { [key: string]: any }) => (
              <li key={ele.id} className="mb-10 ms-4">
                <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-orange-300 bg-orange-300 "></span>
                <time className="mb-1 text-sm font-normal leading-none text-gray-600 font-fira capitalize">
                  {ele[localActive]?.date}
                </time>
                <h3 className="text-lg font-semibold text-white mt-2 capitalize">{ele[localActive]?.rol}</h3>
                <div className="flex gap-2 my-2 overflow-hidden">
                  <Image
                    className="object-cover h-6 w-6 shadow-md rounded-md"
                    src={ele.image}
                    width={100}
                    height={100}
                    alt="Venturit"
                    priority
                  />
                  <h4>{ele.company}</h4>
                </div>
                <p className="mt-2 text-slate-500 font-light text-sm mb-4">{ele[localActive]?.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};
