"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa"; //https://react-icons.github.io/react-icons
import NavigationContainer from "@/components/ui/pagenavigation/NavigationContainer";
import ProductsContainer from "@/components/products/ProductsContainer";
import FirstPageProuducts from "@/components/products/FirstPageProuducts";

type Item = {
  title: string;
  id: number;
  thumbnail: string;
  description: string;
  brand: string;
}[];

export default function Home() {
  const [items, setItems] = useState<Item>([]);
  const cardColors = ["bg-red-200", "bg-gray-300", "bg-indigo-200"];

  //https://dummyjson.com/products/category/beauty
  //https://dummyjson.com/products?limit=3
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty?limit=3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.products);
      });
  }, []);

  return (
    <div className="w-full  overflow-x-hidden relative text-white text-shadow">
      <div className="w-full h-full flex flex-col items-center">
        <NavigationContainer />
        <div className="w-full lg:h-[80vh] flex flex-col">
          <div className="w-full   p-3 flex justify-center lg:justify-end">
            <div className="w-4/5 sm:w-2/4 lg:w-2/6 2xl:w-1/5 relative mt-10 text-black">
              <FaSearch
                className="absolute left-1 top-2 text-black"
                size={22}
              />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 py-3 border-2 border-indigo-200 focus:border-indigo-500"
              />
            </div>
          </div>
          <ProductsContainer>
            <FirstPageProuducts />
          </ProductsContainer>
        </div>
        {/* <footer className="w-full h-20  block lg:hidden border-t bg-indigo-200 ">
          I am mob FOOT
        </footer> */}
      </div>
      <footer className="w-full   border-t bg-indigo-200 flex-col p-3">
        <div className="w-full flex border-b border-white pb-6">
          <div className="w-1/3 lg:text-xl">
            <h5>EverVault</h5>
            <p>Caption of some sort</p>
          </div>
          <div className="w-2/3 flex justify-end">
              <div className="flex flex-col mr-6 lg:text-xl">
                <p>FOLLOW US</p>
                <div className="flex">
                  icons
                  icons
                  icons
                </div>
              </div>
              <div className="flex flex-col lg:text-xl">
                <p>
                  CALL US
                </p>
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
    </div>
  );
}
