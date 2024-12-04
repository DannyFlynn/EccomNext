import NavLinks from "./pagenavigation/NavLinks";

type MobileNavMenuProps = {
  menuOpen: boolean;
  category?: string;
  changeCategory?: (cat: string) => void;
  closeMenu?: () => void; 
};

const MobileNavMenu = ({ menuOpen, category, changeCategory, closeMenu }: MobileNavMenuProps) => {
  return (
      <div
        className={` text-white w-full h-screen flex  lg:hidden absolute z-40 transition-transform ease-in-out duration-700 ${
          menuOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="bg-white w-1/3 h-screen" onClick={closeMenu}></div>
        <div className="bg-indigo-200 w-2/3 h-screen">
        <div className="my-4 h-full flex flex-col items-center justify-evenly">
          <NavLinks category={category} changeCategory={changeCategory} closeMenu={closeMenu} />
        </div>
        </div>
      </div>
  );
};

export default MobileNavMenu;
