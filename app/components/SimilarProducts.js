"use client";
import Product from '../components/Product.js'
import { BiLoader } from 'react-icons/bi'; 
export default function SimilarProducts({ product }) {
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
    <>
      <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto " />
        <div className="max-w-[1200px] mx-auto">
          <div className="font-bold text-2xl py-2 mt-4">Similar Products </div>

          {products.length > 0 ? <div className='grid grid-cols-5 gap-4'>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}

          </div> : <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center gap-4 font-semibold'>
              <BiLoader size={30} className='text-blue-400 animate-spin'/>
              Loading Products....
            </div>
            </div>}
        </div>
      </div>
    </>
  );
}
