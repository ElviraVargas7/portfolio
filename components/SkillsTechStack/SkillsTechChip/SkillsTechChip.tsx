const SkillsTechChip = ({ tech }: { tech: string }) => {
  return (
    <div className="bg-[#fce7f3] px-3 py-1 rounded-lg">
      <p className="text-[#c7417b] text-xs">{tech}</p>
    </div>
  );
};

export default SkillsTechChip;
