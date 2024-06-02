
import { achievementsData } from "@/data";
import Title from "../common/Title";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  return (
    <section id="achievements" className="w-full py-20 border-b-[1px] border-b-gray-600 px-4">
      <div className="flex justify-center items-center text-center">
        <Title des="My Achievements and Certifications" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {achievementsData.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            description={achievement.description}
            imgSrc={achievement.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
