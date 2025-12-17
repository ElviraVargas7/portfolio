import Image from "next/image";

const HighlightCard = ({
  title,
  description,
  iconPath,
  iconAlt,
}: {
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
}) => {
  return (
    <div className="grid grid-cols-6 bg-white dark:bg-[#400827] p-4 rounded-lg shadow-lg">
      <div className="col-span-1 flex justify-center">
        <Image src={iconPath} alt={iconAlt} width={45} height={10} priority />
      </div>
      <div className="col-span-5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-[#7a5e73] text-md">{description}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
