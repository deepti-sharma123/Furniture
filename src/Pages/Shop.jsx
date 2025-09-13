import React, { useState } from 'react'
import Banner from '../Component/Banner'
import Footer from '../Component/Footer'
import AeroChair from '../Component/AeroChair'

const Shop = () => {
   const[bannerTitle, setBannerTitle] = useState("Shop")
  return (
    <>
    <Banner bannerTitle={bannerTitle}/>
    <AeroChair/>
    <Footer/>
    </>
  )
}

export default Shop