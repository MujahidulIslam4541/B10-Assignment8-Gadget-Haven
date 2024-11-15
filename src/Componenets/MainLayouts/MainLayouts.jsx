import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../Navbar/Home'
import { Toaster } from 'react-hot-toast';

export default function MainLayouts() {
  return (
    <div>
          <Toaster />
      <Navbar></Navbar>
     

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}
