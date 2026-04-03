"use client";

import { skills, bestSkills } from "@/data";
import Title from "../common/Title";
import { motion } from "framer-motion";

// Helper to assign a proficiency score to top skills
const getProficiency = (skill: string) => {
  const map: Record<string, number> = {
    "Java": 85,
    "Spring Boot": 80,
    "AWS": 85,
    "Generative AI": 90,
    "AI Agents": 90,
    "Python": 90,
    "Fast API": 90,
    "SQL": 85,
    "Agile": 95,
    "Microservices": 85,
    "JUnit": 80
  };
  return map[skill] || 85;
};

const Skill = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        id="skills"
        className="w-full py-12 md:py-20 border-b-[1px] border-b-gray-600 px-4 md:px-8"
      >
        <div className="flex flex-col">
          <div className="text-center mb-10">
            <Title title="EXPERTISE" des="Technologies & Skills" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Top Skills Progress Bars */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-titleFont text-white font-bold opacity-80 uppercase tracking-widest text-shadow-neon mb-2 md:mb-4">Core Competencies</h3>
              {bestSkills.map((skill, index) => {
                const percentage = getProficiency(skill);
                return (
                  <div key={index} className="overflow-x-hidden">
                    <p className="text-xs sm:text-sm uppercase font-medium">{skill}</p>
                    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2 relative">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        className={`absolute h-full rounded-md bg-gradient-to-r from-designColor to-cyberPurple flex justify-end items-center pr-2 shadow-neon`}
                        style={{ width: `${percentage}%` }}
                      >
                        <span className="absolute -top-6 md:-top-7 right-0 text-gray-300 text-[10px] md:text-xs">
                          {percentage}%
                        </span>
                      </motion.span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right: Technical Stack Categories */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <h3 className="text-xl md:text-2xl font-titleFont text-white font-bold opacity-80 uppercase tracking-widest text-shadow-neon mb-2 md:mb-4">Tech Arsenal</h3>
              
              <div className="flex flex-col gap-6">
                {[
                  { title: "Backend", data: skills.backend },
                  { title: "Frontend", data: skills.frontend },
                  { title: "Cloud & Databases", data: [...skills.cloud, ...skills.database] },
                  { title: "DevOps & Tools", data: [...skills.devops, ...skills.misc] }
                ].map((category, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <h4 className="text-xs md:text-sm text-designColor tracking-wide uppercase font-semibold">{category.title}</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {category.data.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium text-gray-300 bg-black/40 border border-cyberPurple/30 rounded-full hover:border-designColor hover:text-white transition-all shadow-sm hover:shadow-neon cursor-pointer"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Skill;
