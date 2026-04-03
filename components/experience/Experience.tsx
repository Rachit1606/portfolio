"use client";

import { workExperiences } from "@/data";
import Title from "../common/Title";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        id="experience"
        className="w-full py-20 border-b-[1px] border-b-gray-600"
      >
        <div className="flex justify-center items-center text-center">
          <Title title="2 YEARS OF EXPERIENCE" des="Work Experience" />
        </div>
        <div className="pb-12 font-titleFont flex gap-20 px-5">
          <div className="mt-2 w-full h-fit border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {workExperiences.map(
              ({ _id, title, subTitle, location, description }) => (
                <ExperienceCard
                  key={_id}
                  title={title}
                  subTitle={subTitle}
                  location={location}
                  description={description}
                />
              )
            )}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
