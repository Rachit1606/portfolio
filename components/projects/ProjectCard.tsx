import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  title,
  des,
  src,
  githubLink,
  websiteLink,
  techStack,
}: {
  title: string;
  des: string[];
  src?: string;
  githubLink?: string;
  websiteLink?: string;
  techStack?: string;
}) => {
  return (
    <div className="w-full h-fit p-4 xl:px-12 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-boxBg backdrop-blur-md border border-gray-800 group hover:border-designColor hover:shadow-neon transition-all hover:-translate-y-2 duration-500">
      {src && (
        <div className="w-full h-fit overflow-hidden rounded-lg">
          <Image
            className="w-full object-cover"
            src={src}
            alt="src"
            height={240}
            width={240}
          />
        </div>
      )}
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl capitalize text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-[#05070e] border border-gray-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:border-designColor hover:shadow-[0_0_8px_rgba(0,240,255,0.8)] duration-300 cursor-pointer">
                    <BsGithub />
                  </span>
                </a>
              )}
              {websiteLink && (
                <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-[#05070e] border border-gray-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:border-designColor hover:shadow-[0_0_8px_rgba(0,240,255,0.8)] duration-300 cursor-pointer">
                    <FaGlobe />
                  </span>
                </a>
              )}
            </div>
          </div>
          {techStack &&
          <div className="text-sm mt-3">
            <p className="font-bold inline">Technologies: </p>
            <p className="inline">{techStack}</p>
          </div>}
          <div className="hover:text-gray-100 duration-300 tracking-wide">
            {des.map((d, index) => (
              <p className="text-sm  mt-3" key={index}>{d}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
