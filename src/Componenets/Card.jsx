import React from 'react'
import { TbXboxX } from "react-icons/tb";

export default function Card({ gadget }) {
    const { id, product_title, product_image, description, price } = gadget;
    return (
        <div className='w-11/12 mx-auto '>
            <div className='flex items-center gap-8 shadow-lg mt-4 p-4 rounded-xl'>
                <div>
                    <img src={product_image} alt="" className='w-40 rounded-md' />
                </div>

                <div className='space-y-2'>
                    <h2 className='text-2xl font-semibold'>{product_title}</h2>
                    <p className='text-slate-500'>{description}</p>
                    <p className='text-xl'>Price:{price}$</p>
                </div>

                {/* <button className='flex justify-center items-center text-red-600 text-xl'>
                    <TbXboxX />
                </button> */}


            </div>


        </div>
    )
}
