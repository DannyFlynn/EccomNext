"use client";

type category = {
  changeCategory?: (cat: string) => void;
}


import { useState, useEffect } from "react";
import MobileNavMenu from "../MobileNavMenu";
import Navigation from "../Navigation";

const NavigationContainer = ({changeCategory}: category) => {
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
      <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu}  changeCategory={changeCategory} />
      <MobileNavMenu menuOpen={menuOpen} changeCategory={changeCategory} />
    </>
  );
};

export default NavigationContainer;
