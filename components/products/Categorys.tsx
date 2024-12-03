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

const Categorys = () => {
  const [items, setItems] = useState<Item>([]);
  const [bigText, setBigText] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const cardColors = ["bg-red-200", "bg-gray-300", "bg-indigo-200", "bg-gray-300", "bg-indigo-200", "bg-red-200","bg-indigo-200", "bg-red-200", "bg-gray-300" ];

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/fragrances")
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
    return <Loading />;
  }

  return (
    <div className="w-full p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16 my-10">
      {items.map((item, index) => {
        const colorIndex = index % cardColors.length;
        return (
          <div key={item.id} className="w-full flex justify-center">
            <Card
              className={`w-3/4 h-64 cursor-pointer ${cardColors[colorIndex]}`}
              onMouseEnter={() => enlargeText(item.id)}
              onMouseLeave={() => enlargeText(item.id)}
            >
              <CardContent className="flex justify-center items-center w-full h-full relative">
                <Image
                  width={200}
                  height={200}
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-cover"
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
          </div>
        );
      })}
    </div>
  );
};

export default Categorys;
