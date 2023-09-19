"use client";

import Link from "next/link";
import { CiDeliveryTruck } from "react-icons/ci";
import MainLayout from "../layouts/MainLayout";
import { Main } from "next/document";

export default function Orders() {
  const orders = [
    {
      id: 1,
      stripe_id: "311231231",
      name: "Test",
      adress: "Test",
      zipcode: "Test",
      city: "Test",
      country: "Test",
      total: 1222,
      orderItem: [
        {
          id: 1,
          title: "Bronw Leather Bag",
          url: "https://picsum.photos/id/7",
        },
      ],
    },
  ];
  return (
    <>
      <MainLayout>
        <div
          id="Orderspage"
          className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
        >
          <div className="bg-white w-full p-6 min-h-[150px]">
            <div className="flex items-center text-xl">
              <CiDeliveryTruck className="text-green-500" size={35} />
              <span className="pl-4">Orders</span>
            </div>
            {orders.length < 1 ? 
              <div className="flex items-center justify-center">
                You have no order history
              </div>
             : null}

            {orders.map(order => (
              <div key={order?.id} className="text-sm pl-[50px]">
                <div className="border-b py-1">
                  <div className="pt-2">
                    <span className="font-bold mr-2">Stripe Id:</span>
                    {order?.stripe_id}
                  </div>
                  <div className="pt-2">
                    <span className="font-bold mr-2">Delivery Adress:</span>
                    {order?.name} {order?.adress} {order?.zipcode} {order?.country }
                  </div>
                  <div className="pt-2">
                    <span className="font-bold mr-2">Delivery Adress:</span>
                    {order?.total / 100}
                  </div>
                  <div className="flex items-center gap-4">
                {order?.orderItem.map( item => (
                    <div key={order?.id} className="flex items-center">
                        <Link href='/' className="py-1 hover:underline text-blue-500 font-bold">
                            <img className="rounded" width='120' src={item.url+'/120'}/>
                            {item.title}
                        </Link>
                    </div>
                ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
