import Image from "next/image";
import { TwitterBadge } from "../Icon/Icons";

interface Props {
    visible?: boolean;
}

export const TweetCard = ({visible}:Props) => {
  return (
    <div
      className={`
      absolute bottom-0 md:bottom-auto md:top-24 md:right-0 z-20 bg-white p-2 py-7 md:py-2 rounded-md ${visible?'flex sm:hidden':'hidden sm:flex'} gap-1 md:gap-3 items-center md:flex-row flex-col justify-center
      `}
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
          <span className="text-xs text-gray-400 font-light">{"• 18:03"}</span>
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
  );
};
