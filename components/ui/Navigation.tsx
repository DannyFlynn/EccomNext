import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";


type NavigationProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

const Navigation = ({ menuOpen, toggleMenu }: NavigationProps) => {
  return (
    <nav className="w-full h-20 bg-indigo-200 lg:h-[15vh] flex border-b relative">
      <div className="hidden lg:block w-1/4  p-3">
        <div className="hidden lg:w-2/3 lg:flex justify-around text-2xl">
          <Link href="/" >Woman</Link>
          <Link href="/home" className="ml-3">Men</Link>
          <Link href="/home" className="ml-3">Kids</Link>
        </div>
      </div>
      <div className="w-1/4 lg:w-2/4  p-3 text-white lg:flex items-center justify-center">
        <h1 className={`lg:text-6xl text-2xl font-bold text-shadow`}>EverVault</h1>
      </div>
      <div className="hidden  lg:w-1/4  p-3 text-right lg:flex flex-row-reverse">
        <div className="hidden w-full lg:flex   justify-end">
          <IoPerson className="mx-6 cursor-pointer" size={30} />{" "}
          <FaHeart size={30} className="mx-6 cursor-pointer" />{" "}
          <FaShoppingBasket size={30} className="mx-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex lg:hidden w-3/4 justify-end pt-3 mr-16 mt-1">
      <FaHeart size={30} className="mx-6 cursor-pointer" />{" "}
      </div>
      {/* small devices up intil desktops underneath nav*/}
      <div className="absolute right-0 top-0 flex flex-col lg:hidden text-white">
        <button onClick={toggleMenu}>
          <span
            className={`absolute z-50 top-2 right-3  transition-transform ease-in-out duration-700 ${
              menuOpen ? "rotate-180" : "-rotate-180"
            }`}
          >
            {menuOpen ? <ImCross size={34} className="transition-transform ease-in-out duration-1000" /> : <IoMdMenu size={42}  />}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
