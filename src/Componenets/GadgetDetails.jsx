import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { addLocalStorage, getLocalStorage } from '../Utilities';

export default function GadgetDetails() {
    const data = useLoaderData()
    const { id } = useParams()
    const [item, setItem] = useState({})
    useEffect(() => {
        const singleItemFind = data.find(gadget => gadget.id == id)
        setItem(singleItemFind)
    }, [data, id])

    const {
        product_title,
        product_image,
        category,
        price,
        description,
        Specification,
        availability,
        rating
    } = item;


    // add LocalStorage
    const handleLocalStorage = item => {
        addLocalStorage(item)
        
    }

    return (
        <div className=' h-[800px] md:h-[650px]  lg:h-[500px]'>
            <div className=' relative bg-[#9538E2] h-64 rounded-lg flex flex-col text-center pt-4 space-y-2 text-white'>
                <h2 className='text-3xl font-bold'> Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
            </div>

            <div className=' absolute -mt-24 bg-white w-9/12 ml-20 lg:ml-36  md:flex gap-8 border-2 p-5 rounded-xl'>
                <div>
                    <img src={product_image} alt="" className='w-96' />
                </div>

                <div>
                    <div className='space-y-2'>
                        <h1 className="text-3xl font-bold">{product_title}</h1>
                        <p>Price: {price}$</p>
                        <p className="">Description: {description}</p>


                        <p><div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" defaultChecked />
                        </div>{rating}</p>


                        <button onClick={() => handleLocalStorage(item)} className=" flex gap-2 items-center px-4 py-2 border bg-[#9538E2] text-white rounded-full">Get Started  <FaShoppingCart /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
