const RightSide = () => {
  return (
    <div className="w-full lgl:w-1/3 flex justify-center items-center relative lgl:bottom-[40px] lgl:pl-20">
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-designColor to-cyberPurple rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <img
          className="relative w-[350px] h-[350px] z-10 rounded-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          src={"/assets/profile.png"}
          alt="profile2"
        />
      </div>
    </div>
  );
};


export default RightSide;
