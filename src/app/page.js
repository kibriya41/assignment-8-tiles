import BestProduct from "@/components/BestProduct";
import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import TileInspirationGallery from "@/components/TileInspirationGallery";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home () {
  

  return (
    <div>
      <Hero />
      <NewArrivals />
      <BestProduct />
      <TileInspirationGallery />
      <WhyChooseUs />
      <CustomerReviews />
    </div>
  );
}
