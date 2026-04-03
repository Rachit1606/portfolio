const RightSide = () => {
  return (
    <div className="w-full lgl:w-1/3 flex justify-center items-center relative lgl:bottom-[40px] px-4 lgl:pl-20 mt-10 lgl:mt-0">
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-designColor to-cyberPurple rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <img
          className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] z-10 rounded-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          src={"/assets/profile.png"}
          alt="profile2"
        />
      </div>
    </div>
  );
};


export default RightSide;
