"use client";

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
