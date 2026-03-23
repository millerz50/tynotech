import Navbar from "@/components/Navbar";
import PerfumeAd from "@/components/PerfumeAd";
import ProductCard from "@/components/ProductCard";
import { Ad, LaptopProduct } from "@/types";

export default function Home() {
  const products: LaptopProduct[] = [
    {
      id: "1",
      name: "MacBook Pro M3",
      price: 1800,
      image: "/laptop.jpg",
      category: "laptop",
      specs: {
        brand: "Apple",
        model: "M3",
        processor: "Apple M3 Chip",
        ram: "18GB",
        storage: "512GB SSD",
        display: "14-inch Retina",
        battery: "18 hours",
        os: "macOS",
      },
    },
    {
      id: "2",
      name: "Gaming Laptop",
      price: 1200,
      image: "/laptop.jpg",
      category: "laptop",
      specs: {
        brand: "Dell",
        model: "G15",
        processor: "Intel i7",
        ram: "16GB",
        storage: "1TB SSD",
        display: "15.6-inch",
        battery: "8 hours",
        os: "Windows 11",
      },
    },
  ];

  const ad: Ad = {
    id: "ad1",
    title: "Luxury Perfume Sale",
    image: "/perfume.jpg",
    link: "#",
    type: "perfume",
  };

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-4 gap-4 p-4">
        {/* Products */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Ads */}
        <div>
          <PerfumeAd ad={ad} />
        </div>
      </div>
    </div>
  );
}
