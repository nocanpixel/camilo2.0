import { StyledCard } from "@/app/styles/components/Card";
import { skills } from "@/app/utils/Skills";
import GradientText from "../GradientText";
import { Popover } from "../Popover";
import { LogoJs } from "@/app/Icon/Icons";
import { useTranslations } from "next-intl";

export const Skills = () => {
  const t = useTranslations('Skill');
  return (
    <div className="py-5">
        <h1 className="text-2xl font-mono text-slate-300">
          {t('title')}
        </h1>

      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-5 md:grid-rows-6 gap-4 pt-10">
        {skills?.map((skill) => {
          return (
            <div className={`${skill.class}`} key={skill.id}>
              <Popover
                title={skill.name}
                experience={skill.experience}
                id={skill.id}
              >
                <StyledCard>
                  <div className="w-8 h-8">
                    <skill.logo color={`${skill.color}`} />
                  </div>
                  <span className=" font-fira text-white font-thin text-xs text-center">
                    {skill.name}
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
