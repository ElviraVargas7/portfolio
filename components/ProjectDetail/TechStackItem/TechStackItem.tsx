const TechStackItem = ({
  tech,
  description,
}: {
  tech: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg">
      <div className="text-sm font-light">{tech}</div>
      <div className="text-black text-sm">{description}</div>
    </div>
  );
};

export default TechStackItem;
