"use client";
import { bestSkills, skills } from "@/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
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
            <span className="bg-gradient-to-r from-designColor to-cyberPurple bg-clip-text text-transparent capitalize drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">Rachit Khanna</span>
          </h1>
          <h2 className="text-4xl font-bold text-white min-h-[90px] md:min-h-0 h-auto">
            A <span>{text}</span>
            <Cursor
              cursorBlinking={true}
              cursorStyle="_"
              cursorColor="#00f0ff"
            />
          </h2>
          <div className="text-sm md:text-base font-bodyFont leading-relaxed tracking-wide text-gray-300 flex flex-col gap-6 text-justify">
            <p>
              Hey! I build <strong className="text-white">scalable software, autonomous AI systems</strong>, and <strong className="text-white">cloud infrastructures</strong>. With 3+ years in the trenches spanning enterprises like <span className="text-designColor font-semibold">Citigroup</span> and <span className="text-designColor font-semibold">Snapdeal</span>, I specialize in turning hardcore technical challenges into seamless, high-performance solutions.
            </p>
            <p>
              Completed my Master&apos;s from <strong className="text-white">Dalhousie University</strong>. From engineering critical microservices to clutching 🏆 <strong className="text-white">Runner-Up titles</strong> in elite Generative AI Hackathons, I thrive in fast-paced, collaborative environments where innovation is the only metric.
            </p>
            <p className="border-l-4 border-designColor pl-4 py-3 italic bg-black/20 rounded-r-md text-gray-400">
              &quot;Whether it&apos;s writing Python pipelines, architecting serverless AWS infrastructure, or exploring the absolute frontiers of Agentic AI—I love transforming wild ideas into production-ready reality.&quot;
            </p>
          </div>
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
  {
    href: "https://leetcode.com/u/rachukhanna2347/",
    icon: <SiLeetcode />,
  },
];

export default LeftSide;
