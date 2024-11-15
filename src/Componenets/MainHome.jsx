import React from 'react'
import Home from './Navbar/Home'
import Buttons from './Buttons'
import { Outlet, useLoaderData } from 'react-router-dom'
import GadgetHeading from './GadgetHeading'


export default function MainHome() {
    const categories = useLoaderData()

    return (
        <div className='w-11/12 mx-auto'>
            {/* home section */}
            <Home></Home>

            {/* Heading section */}
            <GadgetHeading></GadgetHeading>

            <div className=' grid grid-cols-4 gap-4 '>
                {/* buttons section */}
                <div className='grid col-span-1'>
                    <Buttons categories={categories}></Buttons>
                </div>

                {/* Dynamics  Gadget section*/}
                <div className=' grid col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
