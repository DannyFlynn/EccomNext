"use client";

type category = {
  category?: string;
  changeCategory?: (cat: string) => void;
}


import { useState, useEffect } from "react";
import MobileNavMenu from "../MobileNavMenu";
import Navigation from "../Navigation";

const NavigationContainer = ({category, changeCategory}: category) => {
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

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <>
      <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} category={category} changeCategory={changeCategory} />
      <MobileNavMenu menuOpen={menuOpen} category={category} changeCategory={changeCategory} closeMenu={closeMenu}  />
    </>
  );
};

export default NavigationContainer;
