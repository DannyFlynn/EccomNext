"use client";

import { useState } from "react";


const NavLinks = () => {
  const [links, setLinks] = useState([{id:1, link: '/products', displayText: 'Products', underline: false}, {id:2, link: '/category/beauty', displayText: 'Beauty', underline: true}, {id:3, link: '/category/fragrances', displayText: 'Fragrances', underline: false}, {id: 4, link:'/category/furniture', displayText: 'Furniture', underline: false}]);

  const linkChange = (id: number) => {

    const changeCategoryLink = [...links]

    setLinks(changeCategoryLink.map(link => {
        if(link.id === id){
            return {...link, underline: true}
        } else {
            return {...link, underline: false}
        }
    }))

  }

  return (
    <>
      {links.map((element) => (
        <div key={element.id} className={`text-2xl  underline  font-bold  lg:w-full ${element.underline ? 'lg:underline': 'lg:no-underline'} transition-all duration-500 ease-in-out lg:hover:text-4xl`}>
          <p className="lg:mx-4 cursor-pointer"
          onClick={() => linkChange(element.id)}>{element.displayText}</p>
        </div>
      ))}
    </>
  );
}

export default NavLinks;
