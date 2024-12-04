"use client"
import { useState } from "react";
import Categorys from "@/components/products/Categorys";
import ProductsContainer from "@/components/products/ProductsContainer";
import Footer from "@/components/ui/Footer";
import NavigationContainer from "@/components/ui/pagenavigation/NavigationContainer";



const Page = () => {

  const [category, setCategory] = useState('');

  const changeCategory = (cat: string) => {
    //console.log(cat)
    setCategory(cat)
   
  }

  return (
    <div className="w-full overflow-x-hidden relative text-white text-shadow">
      <NavigationContainer category={category} changeCategory={changeCategory}  />
      <div className="w-full lg:min-h-[80vh] flex flex-col justify-center relative">
        <ProductsContainer>
          <Categorys category={category}  />
        </ProductsContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
