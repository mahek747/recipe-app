import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Navbar from './navbar'

export default function MainNavigation() {
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </>
  )
}