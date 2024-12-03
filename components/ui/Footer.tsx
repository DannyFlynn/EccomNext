import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full   border-t bg-indigo-200 flex-col p-3">
      <div className="w-full flex border-b border-white pb-6">
        <div className="w-1/3 lg:text-xl">
          <h5>EverVault</h5>
          <p>Caption of some sort</p>
        </div>
        <div className="w-2/3 flex justify-end">
          <div className="flex flex-col mr-6 lg:text-xl">
            <p>FOLLOW US</p>
            <div className="flex mt-1">
              <FaFacebook size={26} className="cursor" />
              <FaInstagram className="ml-3 cursor" size={26} />
              <FaGithub className="ml-3 cursor" size={26} />
            </div>
          </div>
          <div className="flex flex-col lg:text-xl">
            <p>CALL US</p>
            <h6>01633 760607</h6>
          </div>
        </div>
      </div>
      <div className="w-full flex p-2">
        <div className="w-1/2">
          <p>&copy;2024 EverVault </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <p>Privacy Policy</p>
          <p className="ml-6">Terms And Conditions</p>
          <p className="ml-6">Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
