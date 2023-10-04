import { StyledCard } from "@/app/styles/components/Card";
import { skills } from "@/app/utils/Skills";
import GradientText from "../GradientText";
import { Popover } from "../Popover";

export const Skills = () => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-center">
        <GradientText
          text="Skills"
          colors={["oklch(49.07% 0.272 300.45)", "oklch(64.53% 0.292 2.47)"]}
        />
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-5 md:grid-rows-6 gap-4 pt-10">
        {skills?.map((skill) => {
          const truncatedName =
            skill.name.length > 15
              ? skill.name.substring(0, 15) + "..."
              : skill.name;

          return (
            <div className={`${skill.class}`} key={skill.id}>
              <Popover
                title={skill.name}
                experience={skill.experience}
                id={skill.id}
                logo={skill.logo}
              >
                <StyledCard>
                  <span className="font-semibold text-white text-xl text-center">
                    {truncatedName}
                  </span>
                </StyledCard>
              </Popover>
            </div>
          );
        })}
      </div>
    </div>
  );
};
