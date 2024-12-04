"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Loading from "../Loading";


type Item = {
  title: string;
  id: number;
  thumbnail: string;
  description: string;
  brand: string;
}[];

type Category = {
  category: string;
}

const FirstPageProducts = ({category} : Category) => {
  const [items, setItems] = useState<Item>([]);
  const [bigText, setBigText] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const cardColors = ["bg-red-200", "bg-gray-300", "bg-indigo-200"];

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty?limit=3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.products);
        setLoading(false); 
      });
  }, []);

  const enlargeText = (id: number) => {
    if (id === bigText) {
      setBigText(null);
    } else {
      setBigText(id);
    }
  };

  if (loading) {
    return <Loading />
    
  }

  return (
    <div className="w-full p-3 flex flex-col sm:flex-row justify-evenly items-center lg:h-[60%]">
      {items.map((item, index) => (
        <Card
          key={item.id}
          className="sm:w-1/4  lg:h-64 cursor-pointer my-8 lg:my-0"
          onMouseEnter={() => enlargeText(item.id)}
          onMouseLeave={() => enlargeText(item.id)}
        >
          <CardContent
            className={`flex justify-center w-full h-full relative ${cardColors[index]} lg:hover:bg-opacity-75`}
          >
            <Image
              width={200}
              height={200}
              src={item.thumbnail}
              alt={item.title}
              className="ml-10"
            />
            <h2
              className={`absolute text-white top-1/2 text-3xl font-bold text-shadow transition-all duration-500 ${
                bigText === item.id ? "lg:text-5xl" : "lg:text-3xl"
              }`}
            >
              {item.brand}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FirstPageProducts;
