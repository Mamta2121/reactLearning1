import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'  //to dynamically render something Keep something as it is and something being rendered dynamically


function Layout() { //Header and Footer remain common in all , just in (Home About US Contact Us)between changes
  return (
    <>
       <Header />
       <Outlet />
       <Footer />
    </>
  )
}

export default Layout;
