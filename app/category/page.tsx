import Categorys from "@/components/products/Categorys";
import ProductsContainer from "@/components/products/ProductsContainer";
import Footer from "@/components/ui/Footer";
import NavigationContainer from "@/components/ui/pagenavigation/NavigationContainer";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden relative text-white text-shadow">
      <NavigationContainer />
      <div className="w-full lg:min-h-[80vh] flex flex-col justify-center relative">
        <ProductsContainer>
          <Categorys />
        </ProductsContainer>
      </div>
      <Footer />
    </div>
  );
};

export default page;
