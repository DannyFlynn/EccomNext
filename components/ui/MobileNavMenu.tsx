type MobileNavMenuProps = {
  menuOpen: boolean;
};

const MobileNavMenu = ({ menuOpen }: MobileNavMenuProps) => {
  return (
      <div
        className={` text-white w-full h-screen flex  lg:hidden absolute z-40 transition-transform ease-in-out duration-700 ${
          menuOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="bg-white w-1/3 h-screen"></div>
        <div className="bg-indigo-200 w-2/3 h-screen">
        <div className="my-6 h-full flex flex-col items-center justify-evenly">
          <div className="">
            <p className="text-xl font-bold underline">Woman</p></div>
          <div className="">
          <p className="text-xl font-bold underline">Men</p>
          </div>
          <div className="">
          <p className="text-xl font-bold underline">Kids</p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default MobileNavMenu;
