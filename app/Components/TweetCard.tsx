import Image from "next/image";
import { TwitterBadge } from "../Icon/Icons";

interface Props {
    text: string;
}

export const TweetCard = ({text}:Props) => {
  return (
    <div
      className={`bg-white p-2 py-7 md:py-2 shadow-md rounded-md flex gap-1 md:gap-3 items-center md:flex-row flex-col w-full
      `}
    >
      <span className="h-4 w-4 p-2 bg-sky-400 rounded-full absolute -right-1 -top-1 animate-ping "></span>
      <span className="h-1 w-1 p-2 bg-sky-400 rounded-full absolute -right-1 -top-1"></span>
      <div style={{minWidth:'70px'}}>
        <Image
          className="object-cover h-16 w-16 rounded-full shadow-md"
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
          <span className="text-xs text-gray-400 font-light">{"• 18:03"}</span>
        </h1>
        <p className="text-black text-xs px-2 md:px-0">
          {text}
          <span className="text-sky-600 font-semibold cursor-pointer">
            {"#CodeChefLife #CodingAdventures"}
          </span>
        </p>
      </div>
    </div>
  );
};
