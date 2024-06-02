// components/achievements/AchievementCard.tsx
import Image from "next/image";

const AchievementCard = ({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <div className="w-full p-4 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors hover:scale-105 duration-500 hover:transition hover:ease-in-out">
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          className="w-full object-cover"
          src={imgSrc}
          alt={title}
          width={240}
          height={240}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <h3 className="text-xl capitalize text-designColor font-normal">{title}</h3>
        <p className="text-sm mt-3">{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
