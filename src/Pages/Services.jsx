import React, { useState } from 'react'
import Banner from '../Component/Banner'
import Hassle from '../Component/Hassle'
import Crafted from '../Component/Crafted'
import Testmonial from '../Component/Testmonial'
import Footer from '../Component/Footer'


const Services = () => {
   const[bannerTitle, setBannerTitle] = useState("Service")
  return (
    <>
    <Banner bannerTitle={bannerTitle}/>
    <Hassle/>
    <Crafted/>
    <Testmonial/>
    <Footer/>
    </>
  )
}

export default Services