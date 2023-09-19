"use client";

import { usePathname } from "next/navigation";

export default function CheckOutItm({ product }) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex justify-start rounded-lg mb-2 border p-4">
        <img
          className="rounded-md w-[150px] h-[150px]"
          src={product.url + "/150"}
        />
        <div className="overflow-hidden pl-2">
          <div className="font-semibold">{product.title}</div>
          <div className="font-bold">{(product.prices / 100).toFixed(2)}</div>
          <div className="relative flex items-center text-[14 px] text-gray-500">
            <div className="line-trough">GBP{((product.prices *1.2)/100).toFixed(2)}</div>
            <div className="px-2">--</div>
            <div className="line-trough">20% </div>
          </div>
          <div className="tex-sm mt-2">
            {product.description.substring(0,130)}...
          </div>
          {pathname == '/cart' ? <div className="text-sm mt-2 w-full flex justify-end underline text-blue-500 cursor-pointer">
             Remove 
          </div> : null }
        </div>
      </div>
    </>
  );
}
