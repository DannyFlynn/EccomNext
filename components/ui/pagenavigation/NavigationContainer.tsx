"use client";

import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import MobileNavMenu from "../MobileNavMenu";
import Navigation from "../Navigation";

const NavigationContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    if(menuOpen){

      document.body.style.overflowY = "hidden";

    } else {

      document.body.style.overflowY = "auto";


    }

  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileNavMenu menuOpen={menuOpen} />
    </>
  );
};

export default NavigationContainer;
