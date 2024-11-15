import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../Navbar/Home'

export default function MainLayouts() {
  return (
    <div>
      <Navbar></Navbar>
     

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}