import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skill from "@/components/skills/Skill";
import Achievements from "@/components/achievements/Achievements";
import JarvisLoader from "@/components/JarvisLoader";
import BotContact from "@/components/BotContact";

export default function Home() {
  return (
    <>
      <JarvisLoader />
      <BotContact />
      <div className="w-full h-auto bg-transparent text-lightText">
        <Navbar />
        <div className="max-w-screen-xl mx-auto hidden-scroll">
          <Banner />
          <Experience />
          <Skill />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

