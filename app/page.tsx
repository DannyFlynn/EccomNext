"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa"; //https://react-icons.github.io/react-icons
import NavigationContainer from "@/components/ui/pagenavigation/NavigationContainer";

type Item = {
  title: string;
  id: number;
  thumbnail: string;
  description: string;
  brand: string;
}[];

export default function Home() {
  const [items, setItems] = useState<Item>([]);
  //const [info, setInfo] = useState<{ [key: number]: boolean }>({});
  const cardColors  = [
    "bg-red-200",
    "bg-gray-300",
    "bg-indigo-200",
  ];

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

  // const handleMouseEnter = (id: number) => {
  //   setInfo((prev) => ({
  //     ...prev,
  //     [id]: true,
  //   }));
  // };

  // const handleMouseLeave = (id: number) => {
  //   setInfo((prev) => ({
  //     ...prev,
  //     [id]: false,
  //   }));
  // };

  return (
    <div className="w-full lg:h-screen lg:overflow-hidden overflow-x-hidden relative text-white text-shadow">
      <div className="w-full h-full flex flex-col items-center">
        <NavigationContainer />
        <div className="w-full h-[85%] flex flex-col">
          <div className="w-full   p-3 flex justify-center lg:justify-end">
            <div className="w-4/5 sm:w-2/4 lg:w-2/6 2xl:w-1/5 relative mt-10 text-black">
              <FaSearch className="absolute left-1 top-2 text-black" size={22} />
              <Input type="search" placeholder="Search..." className="pl-10 py-3 border-2 border-indigo-200 focus:border-indigo-500" />
            </div>
          </div>
          {/* <div className="w-full text-center h-[10%] p-3 text-black">
            <h3 className="text-3xl">Choose a category</h3>
          </div> */}
          <div className="w-full p-3 flex flex-col sm:flex-row justify-evenly items-center lg:h-[60%]">
            {items.map((item, index) => (
              <Card
                key={item.id}
                className="w-[90%] sm:w-1/4 lg:w-1/4  lg:h-64 cursor-pointer my-8 lg-my-0"
              >
                <CardContent
                  className={`flex justify-center w-full h-full relative ${cardColors[index]}`}
                >
                  <Image
                    width={200}
                    height={200}
                    src={item.thumbnail}
                    alt={item.title}
                    className="ml-10"
                  />
                  <h2 className="absolute z-30 text-white top-1/2 text-4xl font-bold text-shadow">
                    {item.brand}
                  </h2>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <footer className="w-full h-20  block lg:hidden border-t bg-indigo-200 ">
          I am mob FOOT
        </footer>
      </div>
      <footer className="w-full h-[10%] absolute bottom-0  hidden lg:block border-t bg-indigo-200 ">
        I am web FOOT
      </footer>
    </div>
  );
}

{
  /* className={`absolute z-30 top-1/3 transition-opacity duration-500 ${
  info[item.id] ? "opacity-100" : "opacity-0"
}`}*/
}

{
  /* {items.map((item) => (
            <Card key={item.id} className="w-1/4 cursor-pointer ">
              <CardHeader className="text-center text-2xl font-bold"
              >
                <h3 className="p-3">{item.title}</h3>
              </CardHeader>
              <CardContent className="flex justify-center relative">
                <Image width={200} height={200} src={item.thumbnail} alt={item.title} />
                <div   className={`absolute z-30 top-1/3 transition-opacity duration-500 ${
                    info[item.id] ? "opacity-100" : "opacity-0"
                  }`}>
                <CardContent
                
                >
                  {item.description}
                </CardContent>
                </div>
              </CardContent>
              <CardFooter className="w-full flex justify-center">
                <Button
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                  className="mx-3 p-5 w-16"
                >
                  Info
                </Button>
                <Button className="mx-3 p-5 w-16">Buy</Button>
                </CardFooter>
            </Card>
          ))} */
}
