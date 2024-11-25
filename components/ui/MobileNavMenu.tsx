type MobileNavMenuProps = {
  menuOpen: boolean;
};

const MobileNavMenu = ({ menuOpen }: MobileNavMenuProps) => {
  return (
      <div
        className={` bg-black bg-opacity-30 text-white w-full h-screen flex flex-col lg:hidden absolute z-30 transition-transform ease-in-out duration-700 ${
          menuOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        hello I should not appear
      </div>
  );
};

export default MobileNavMenu;
