import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Buttons({ categories }) {
  return (
    <div className='grid grid-cols-1 gap-4 border-2 px-8 py-4 rounded-lg h-96'>
      {/* <button className='p-2 bg-[#9237DE] text-white rounded-full font-semibold'>All Product</button> */}
      {
        categories.map(category => (
          <NavLink key={category.category}
            className={({isActive}) => `  text-center p-3 rounded-full font-semibold border ${isActive ? ' bg-[#9237DE] text-white ' : 'text-black'}`}
            to={`/gadget/${category.category}`}>
            {category.category}
          </NavLink>
        ))

      }





    </div>
  )
}
