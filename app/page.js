"use client";

import { Main } from "next/document";
import MainLayout from "./layouts/MainLayout";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Bronw Leather Bag",
      description: "Lorem Ipsum Ala Bala Ala Bala Ala Bala Ala Bala",
      url: "https://picsum.photos/id/7",
      prices: 2500, // EG:25.00
    },
    {
      id: 2,
      title: "School Book",
      description: "Lorem Ipsum Ala Bala Ala Bala Ala Bala Ala Bala",
      url: "https://picsum.photos/id/20",
      prices: 1999, // EG:25.00
    },
  ];

  return (
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        {/* Product Component */}
        <div className="grid grid-cols-5 gap-4">
          {products.map(product => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
