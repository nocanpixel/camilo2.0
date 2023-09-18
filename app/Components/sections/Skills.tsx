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
      <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-8 gap-2 pt-10">
        {skills?.map((skill) => {
          const truncatedName =
            skill.name.length > 8
              ? skill.name.substring(0, 8) + "..."
              : skill.name;

          return (
            <Popover key={skill.id} title={skill.name} experience={skill.experience} id={skill.id} logo={skill.logo}>
              <StyledCard >
                <span className="font-semibold text-white">
                  {truncatedName}
                </span>
              </StyledCard>
            </Popover>
          );
        })}
      </div>
    </div>
  );
};
