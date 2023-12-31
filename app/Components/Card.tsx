import Link from "next/link";

interface Props {
  title?: string;
  description?: string;
  url: string;
  technologies?: string[];
}

const Card = (props: Props) => {

  return (
    <div>
      <Link href={props.url} target="_blank" className={`border relative border-gray-600 cursor-pointer p-6 rounded-xl hover:border-gray-500 hover:bg-zinc-900 hover:bg-opacity-60 flex flex-col gap-3 bg-zinc-600 justify-between backdrop-filter bg-opacity-10 backdrop-blur-sm`} >
      <span className="text-2xl text-white">{props.title}</span>
      <p className="text-sm text-gray-400 mt-2">
        {props.description}
      </p>

      <div className={`font-light flex ${props.technologies&&props.technologies?.length>=3?" flex-col " : " flex-row xl:flex-row "} gap-2`}>
        <div className="flex flex-row gap-1">
          {props.technologies?.map((technology,index) => (
              <span key={index} className={`py-1 px-4 bg-gray-600 rounded-full text-xs`}>{technology}</span>
          ))}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
