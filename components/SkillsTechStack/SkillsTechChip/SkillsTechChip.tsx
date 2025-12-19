const SkillsTechChip = ({ tech }: { tech: string }) => {
  return (
    <div className="bg-[#fce7f3] dark:bg-[#400827] dark:border dark:border-[#c7417b] px-3 py-1 rounded-lg">
      <p className="text-[#c7417b] dark:text-[#c7417b] text-xs">{tech}</p>
    </div>
  );
};

export default SkillsTechChip;
