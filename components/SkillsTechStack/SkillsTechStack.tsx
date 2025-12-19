import { skillsTechStack } from "@/data/skillsTechStack";
import InfoCard from "../common/InfoCard/InfoCard";

const SkillsTechStack = () => {
  return (
    <div className="w-full">
      <h2
        id="skills"
        className="font-semibold text-5xl mb-4 text-center w-full scroll-mt-24"
      >
        Skills / Tech Stack
      </h2>

      <div className="w-full flex justify-center mb-8">
        <hr className="border-2 border-solid border-[#c7417b] rounded-3xl w-20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillsTechStack.map((skill, index) => (
          <InfoCard
            key={index}
            title={skill.title}
            tech_stack={skill.tech_stack}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsTechStack;
