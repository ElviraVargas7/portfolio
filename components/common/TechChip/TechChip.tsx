const TechChip = ({ tech }: { tech: string }) => {
  return (
    <div className="bg-[#F5D6E1] text-white px-3 py-1 rounded-lg text-sm">
      <p className="text-black text-xs">{tech}</p>
    </div>
  );
};

export default TechChip;
