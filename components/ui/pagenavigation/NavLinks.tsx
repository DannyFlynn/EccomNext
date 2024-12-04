"use client";

import { useState, useEffect } from "react";

type Category = {
  category: string;
  changeCategory?: (cat: string) => void;
}





const NavLinks = ({category, changeCategory}: Category) => {
  const [links, setLinks] = useState([{id:1, link: 'products', displayText: 'Products', underline: false}, {id:2, link: 'beauty', displayText: 'Beauty', underline: false}, {id:3, link: 'fragrances', displayText: 'Fragrances', underline: false}, {id: 4, link:'furniture', displayText: 'Furniture', underline: false}]);

  // const linkChange = (id: number, link: string) => {

  //   const changeCategoryLink = [...links]

  //   setLinks(changeCategoryLink.map(link => {
  //       if(link.id === id){
  //           return {...link, underline: true}
  //       } else {
  //           return {...link, underline: false}
  //       }
  //   }))
 
  // }


  useEffect(() => {
    const value = localStorage.getItem("link");
    if(window.location.href === "/"){
      localStorage.removeItem("link");
    }
    if (value) {
      console.log("yes nav line")
      const changeCategoryLink = [...links]
      setLinks(changeCategoryLink.map(link => {
        if(link.link === value){
            return {...link, underline: true}
        } else {
            return {...link, underline: false}
        }
    }))
    } else {
      console.log("no nav line")
    }

  }, [category])

  const categoryChange = (link: string) => {
    if(changeCategory){
      localStorage.setItem("link", link)
      changeCategory(link)
    } else {
      localStorage.setItem("link", link)
      window.location.href = "/category"
    }
  }

 

  return (
    <>
      {links.map((element) => (
        <div key={element.id} className={`text-2xl  underline  font-bold  lg:w-full ${element.underline ? 'lg:underline': 'lg:no-underline'} transition-all duration-500 ease-in-out lg:hover:text-4xl`}>
          <p className="lg:mx-4 cursor-pointer"
          onClick={() => { categoryChange(element.link)}}>{element.displayText}</p>
        </div>
      ))}
    </>
  );
}

export default NavLinks;
