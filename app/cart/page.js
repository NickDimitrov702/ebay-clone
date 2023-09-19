"use client";
import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import CartItm from '../components/CartItm.js'
export default function Cart() {
  const product = {
    id: 1,
    title: "Bronw Leather Bag",
    description: "Lorem Ipsum Ala Bala Ala Bala Ala Bala Ala Bala",
    url: "https://picsum.photos/id/7",
    prices: 2500, // EG:25.00
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-2xl font-bold my-4">Shopping cart</div>
          <div className="relative flex items-baseline justify-between gap-2">
            <div className="w-[65%]">
              <CartItm
                key={product.id}
                product={product}
              />
            </div>
            <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                <div className="bg-white p-4 border">
                    <button className="flex items-center justify-center bg-blue-600 w-full text-white p-3 rounded-full mt-4">
                        Go To Check Out
                    </button>
                    <div className="flex items-center justify-between mt-4 text-sm mb-1">
                        <div>Items (3)</div>
                        <dvi>GBP12.99</dvi>
                    </div>
                    <div className="flex items-center justify-between mb -4 text-sm ">
                        <div>Shipping</div>
                        <dvi>Free</dvi>
                    </div>
                    <div className="border-b border-gray-300"></div>
                    <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                        <div>Subtotal</div>
                        <div>GBP12.99</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </MainLayout>
    </>
  );
}
