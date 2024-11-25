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
    <nav className="w-full h-[15%] flex border-b relative">
      <div className="hidden lg:block w-1/4  p-3">
        <div className="hidden lg:w-2/3 lg:flex justify-around">
          <Link href="/">Woman</Link>
          <Link href="/home">Men</Link>
          <Link href="/home">Kids</Link>
        </div>
      </div>
      <div className="w-2/4  p-3 text-center">
        <h1 className="text-4xl font-bold">Eccom store</h1>
      </div>
      <div className="hidden  w-1/4  p-3 text-right lg:flex flex-row-reverse">
        <div className="hidden lg:w-2/3 lg:flex   justify-end">
          <IoPerson className="mx-6 cursor-pointer" size={22} />{" "}
          <FaHeart size={22} className="mx-6 cursor-pointer" />{" "}
          <FaShoppingBasket size={22} className="mx-6 cursor-pointer" />
        </div>
      </div>
      {/* small devices up intil desktops underneath nav*/}
      <div className="absolute right-0 top-0 flex flex-col">
        <button onClick={toggleMenu}>
          <span
            className={`absolute z-40 top-2 right-3  transition-transform ease-in-out duration-700 ${
              menuOpen ? "rotate-180" : "-rotate-180"
            }`}
          >
            {menuOpen ? <ImCross size={38} /> : <IoMdMenu size={42} />}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
