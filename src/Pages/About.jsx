import React, { useState } from 'react'
import Banner from '../Component/Banner'
import Choose from '../Component/Choose'
import OurTeam from '../Component/OurTeam'
import Testmonial from '../Component/Testmonial'
import Footer from '../Component/Footer'


const About = () => {
  const [bannerTitle, setBannerTitle] = useState("About")
  return (
    <>
      <Banner bannerTitle={bannerTitle} />
      <Choose/>
      <OurTeam/>
      <Testmonial/>
      <Footer/>
    </>
  )
}

export default About