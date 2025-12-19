const DetailItem = ({
  description,
  dotColor,
}: {
  description: string;
  dotColor: string;
}) => {
  return (
    <div className="bg-white rounded-md flex flex-row gap-4 px-4 py-2 items-center">
      <p className="text-3xl" style={{ color: dotColor }}>
        •
      </p>
      <p className="text-[#7a5e73]">{description}</p>
    </div>
  );
};

export default DetailItem;
