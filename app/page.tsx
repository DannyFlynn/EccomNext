import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa"; //https://react-icons.github.io/react-icons
import NavigationContainer from "@/components/ui/pagenavigation/NavigationContainer";
import ProductsContainer from "@/components/products/ProductsContainer";
import FirstPageProuducts from "@/components/products/FirstPageProuducts";
import Footer from "@/components/ui/Footer";


export default function Home() {

  

  //https://dummyjson.com/products/category/beauty
  //https://dummyjson.com/products?limit=3
 
  

  return (
    <div className="w-full  overflow-x-hidden relative text-white text-shadow border-indigo-200">
      <div className="w-full h-full flex flex-col items-center">
        <NavigationContainer category={"beauty"}  />
        <div className="w-full lg:h-[80vh] flex flex-col justify-center relative">
          <div className="hidden lg:flex absolute top-0 z-10 w-full   p-3  justify-center lg:justify-end">
            <div className="w-4/5 sm:w-2/4 lg:w-2/6 2xl:w-1/5 relative mt-8 text-black">
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
          <div className="lg:hidden flex  w-full   p-3  justify-center lg:justify-end">
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
            <FirstPageProuducts category={"beauty"} />
          </ProductsContainer>
        </div>
      </div>
     <Footer />
    </div>
  );
}
