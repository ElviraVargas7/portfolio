import SkillsTechChip from "@/components/SkillsTechStack/SkillsTechChip/SkillsTechChip";

const InfoCard = ({
  title,
  tech_stack,
}: {
  title: string;
  tech_stack: string[];
}) => {
  return (
    <div className="flex flex-col gap-2 justify-around bg-white dark:bg-[#400827] p-4 rounded-lg shadow-lg">
      <p className="text-[#c7417b] dark:text-[#fd94c2] font-bold">{title}</p>
      <div className="flex flex-row gap-2 w-fit flex-wrap">
        {tech_stack &&
          tech_stack.map((item) => <SkillsTechChip key={item} tech={item} />)}
      </div>
    </div>
  );
};

export default InfoCard;
