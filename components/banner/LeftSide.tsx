"use client";
import { bestSkills, skills } from "@/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const LeftSide = () => {
  const [text] = useTypewriter({
    words: ["Java FullStack Developer", "Cloud Engineer", "Generative AI Enthusiast"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <>
      <div className="w-full lgl:w-2/3 flex flex-col gap-10 px-5 pt-5 xl:px-0">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold text-white">
            Hi, I&apos;m{" "}
            <span className="text-designColor capitalize">Rachit Khanna</span>
          </h1>
          <h2 className="text-4xl font-bold text-white h-[80px] md:h-auto">
            a <span>{text}</span>
            <Cursor
              cursorBlinking={true}
              cursorStyle="_"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
            Dynamic and accomplished computer science professional with 2 years of hands-on experience in software development, cloud computing, and Generative AI. Currently pursuing a Master&apos;s in Applied Computer Science at Dalhousie University, complemented by a Bachelor&apos;s in Computer Engineering. Proficient in a wide array of programming languages, frameworks, and cloud technologies including Python, Java, React, AWS, and GCP.
            <br />
            <br />
            Demonstrated expertise in developing innovative mobile and web applications, such as a virtual tour assistant and a collaborative task management website. Proven track record in delivering robust solutions and excelling in collaborative, fast-paced environments. Key strengths include innovation, teamwork, adaptability, problem-solving, and professional communication skills.
            <br />
            <br/>
            <br/>
            Successfully implemented a WhatsApp Shop system at Snapdeal and contributed to course content development at Coding Ninjas. Achieved notable success in hackathons, winning prizes for solutions in financial fraud and marine life conservation. Seeking coop and full-time opportunities to leverage technical skills and drive impactful projects in the field of computer science.
            <br/>
            <br />I love working with business and collaborators to bring their
            ideas to life, and I&apos;m always looking for new opportunities to
            learn and grow as a developer.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between pt-0">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me at
            </h2>
            <div className="flex flex-wrap gap-4">
              {profiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bannerIcon">{profile.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Best skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {bestSkills.map((skill, index) => (
                <span className="skillIcon" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const profiles = [
  {
    href: "https://www.linkedin.com/in/rachit-khanna-961b5816b/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/Rachit1606",
    icon: <FaGithub />,
  },
];

export default LeftSide;
