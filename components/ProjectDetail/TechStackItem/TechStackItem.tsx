const TechStackItem = ({
  tech,
  description,
}: {
  tech: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg">
      <div className="text-sm font-light dark:text-[#FFB8DB]">{tech}</div>
      <div className="text-black dark:text-white text-sm">{description}</div>
    </div>
  );
};

export default TechStackItem;
