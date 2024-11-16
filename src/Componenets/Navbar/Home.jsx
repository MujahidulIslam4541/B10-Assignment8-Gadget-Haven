import React from 'react'
// import image from '../../../dist/assets/.trashed-1733676724-banner-eTjIDEmb.jpg'

export default function Home() {
  return (
    <div className='h-[850px]'>
      <div className=' relative  w-11/12 mx-auto text-white pt-20 pb-44 bg-[#9538E2] rounded-xl'>
        <div className='max-w-xl mx-auto text-center'>
          <h2 className='text-3xl font-bold pb-2'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
          <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          <button className='px-4 py-2 bg-white rounded-full text-black font-semibold mt-4'>Shop Now</button>
        </div>
      </div>

      <div className='absolute -mt-40'>
        <img className='w-9/12  mx-auto p-2 border-2 rounded-xl' src='https://i.ibb.co.com/WB2kGGY/trashed-1733676724-banner.jpg'alt="" />
      </div>
    </div>
  )
}
