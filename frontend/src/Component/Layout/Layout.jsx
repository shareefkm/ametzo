import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DashBord from '../DashBord'
import SubUser from '../SubUser'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
