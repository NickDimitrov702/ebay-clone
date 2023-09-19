"use client";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function TopMenu() {
  return (
    <>
      <div id="TopMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[11px] text-[#3333333] px-2 h-8"
          >
            <li className="relative px-3">
              <Link
                href="/auth"
                className="flex items-center gap-2 hover:underline cursor-pointer"
              >
                <div>Login</div>
                <BsChevronDown></BsChevronDown>
              </Link>
              <div
                id="AuthDropDown"
                className="hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg"
              >
                <div className="flex items-center justify-start gap-1 p-3">
                  <img width={50} src="https://picsum.photos/200" />
                  <div className="font-bold text-[13px]">Nicks Sons</div>
                </div>

                <div className="border-b"></div>

                <ul className="bg-white">
                  <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    <Link href="/orders">My orders</Link>
                  </li>
                  <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    Sign out
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-3 hover:underline curos-pointer">Daily Deals</li>
            <li className="px-3 hover:underline curos-pointer">
              Help and Contacts
            </li>
          </ul>

          <ul
            id="TopMenuRight"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            <li className="flex items-center gap-2 px-3 hover:underline cursor:pointer">
              <img width={32} src="/images/uk.png"></img>
              Ship to
            </li>
            <li className="px-3 hover:underline cursor-pointer">
              <div className="relative">
                <AiOutlineShoppingCart size={22} />
                <div className="absolute tex-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                  <div className="flex items-center justify-center -mt-[1px]">3</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
