import Link from "next/link";
import { GithubIcon } from "../Icon/Icons";

interface Props {
  title?: string;
  description?: string;
  url: string;
  github: boolean;
  githubUrl: string;
  technologies?: string[];
}

const Card = (props: Props) => {

  return (
    <div className="relative">
      {props.github === true ? (
        <Link className="absolute z-10 -right-2 -top-2 bg-black rounded-full " href={props.githubUrl} target="_blank">
          <div className="w-6 transition ease-in delay-100 hover:scale-125 flex justify-center items-center">
            <GithubIcon />
          </div>
        </Link>
      ) : (
        <Link className="absolute z-10 -right-2 -top-2 bg-black rounded-full " href={props.githubUrl} target="_blank">
          <div className="w-6 cursor-not-allowed absolute z-10 -right-2 -top-2">
            <GithubIcon color="#2d313b" />
          </div>
        </Link>
      )}
      <Link href={props.url} target="_blank" className={`border relative border-gray-800 cursor-pointer p-6 rounded-xl hover:border-gray-500 hover:bg-zinc-900 hover:bg-opacity-60 flex flex-col gap-3 bg-zinc-600 justify-between backdrop-filter bg-opacity-10 backdrop-blur-sm`} >
        <div className="flex justify-between">
          <h2 className="text-xl text-white">{props.title}</h2>
        </div>
        <p className="text-sm text-slate-500 font-light">
          {props.description}
        </p>

        <div className={`font-light flex gap-2`}>
          <div className="flex flex-auto flex-wrap gap-2">
            {props.technologies?.map((technology, index) => (
              <span key={index} className={`py-1 px-4 rounded-md font-mono text-xs ring-1  ring-gray-700 `}>{technology}</span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
