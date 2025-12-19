const TechChip = ({ tech }: { tech: string }) => {
  return (
    <div className="bg-[#F5D6E1] dark:bg-[#400827] dark:border dark:border-[#FFB8DB] text-white px-3 py-1 rounded-lg text-sm">
      <p className="text-black dark:text-[#FFB8DB] text-xs">{tech}</p>
    </div>
  );
};

export default TechChip;
