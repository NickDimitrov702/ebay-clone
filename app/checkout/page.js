"use client";
import MainLayout from "../layouts/MainLayout";
import CheckOutItem from "../components/CheckOutItem.js";

export default function CheckOut() {
  const product = {
    id: 1,
    title: "Bronw Leather Bag",
    description: "Lorem Ipsum Ala Bala Ala Bala Ala Bala Ala Bala",
    url: "https://picsum.photos/id/20",
    prices: 2500, // EG:25.00
  };
  return (
    <>
      <MainLayout>
        <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
          <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
            <div className="w-[65%]">
              <div className="bg-white rounded-lg p-4 border">
                <div className="tex-xl font-semibold mb-2">Shipping</div>
                <ul className="text-sm mt-2">
                  <li>Name: test</li>
                  <li>Address: test</li>
                  <li>Zipcode: test</li>
                  <li>Country: test</li>
                </ul>
              </div>
              <div id="Items" className="bg-white rounded-lg mt-4">
                <CheckOutItem key={product.id} product={product} />
              </div>
            </div>
            <div
              id="PlaceOrder"
              className="relative -top-[6px] w-[35%] border rounded-lg">
              <div className="p-4">
                <div className="flex items-baseline justify-between text-sm mb-1">
                  <div>Items (3)</div>
                  <div>GBP 12.99</div>
                </div>
                <div className="flex justify-between mb-4 text-sm">
                  <div>Shipping</div>
                  <div>Free</div>
                </div>

                <div className="border-t"></div>

                <div className="flex justify-between items-center my-4">
                  <div className="font-semibold">Order total</div>
                  <div className="text-2xl font-semibold">GBP12.99</div>
                </div>
                <form>
                  <div
                    className="border border-gray-500 p-2 rounded-sm"
                    id="card-element"
                  ></div>
                  <p
                    id="card-erro"
                    role="alert"
                    className="text-red-700 text-center font-semibold relative top-2"
                  ></p>
                  <button
                    type="submit"
                    className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full"
                  >
                    <div>Confirm and pay</div>
                  </button>
                </form>
              </div>
              <div className="flex items-center p-4 justify-center gap-2 border-t">
                <img width={50} src="/images/logo.svg" />
                <div className="font-light mb-2 mt-2">MONEY BACK GUARANTEE</div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
