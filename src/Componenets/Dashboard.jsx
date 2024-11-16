import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../Utilities'
import Gadget from './Gadget'
import Card from './Card'

export default function Dashboard() {

  const [gadget, setGadget] = useState([])
  useEffect(() => {
    const favorite = getLocalStorage()
    setGadget(favorite)
  }, [])
  return (
    <div>
      <div className=' bg-[#9538E2] h-64 rounded-lg flex flex-col justify-center items-center pt-4 space-y-2 text-white'>
        <h2 className='text-3xl font-bold'> Dashboard</h2>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
        <div className='flex gap-2 justify-center'>
          <button className='px-10 py-2 border rounded-full'>Cart</button>
          <button className='px-10 py-2 border rounded-full'>Wishlist</button>
        </div>
      </div>

      <div className='mt-10'>

        <div className='flex justify-between w-11/12 mx-auto'>

          <h2 className='text-2xl font-semibold'>Card</h2>
          <div className='flex gap-4'>
            <button className='btn bg-[#9538E2] text-white'>Short By Price</button>
            <button className='btn bg-[#9538E2] text-white'>Purchase</button>
          </div>


        </div>

        {
          gadget.map(gadget => <Card key={gadget.product_id} gadget={gadget}></Card>)
        }
      </div>
    </div>
  )
}
