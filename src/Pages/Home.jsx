import React, { useState } from 'react'
import Banner from '../Component/Banner'
import Crafted from '../Component/Crafted'
import Choose from '../Component/Choose'
import Interior from '../Component/Interior'
import Chairs from '../Component/Chairs'
import Testmonial from '../Component/Testmonial'
import Owner  from '../Component/Owner'
import Footer from '../Component/Footer'


const Home = () => {
  const[bannerTitle, setBannerTitle] = useState("Modern Interior Design Studio")
  return (
    <>

 {/* <Header/> */}
       <Banner bannerTitle={bannerTitle} />
       <Crafted/>
       <Choose/>
       <Interior/>
       <Chairs/>
       <Testmonial/>
       <Owner/>
       <Footer/>
    </>
  )
}

export default Home