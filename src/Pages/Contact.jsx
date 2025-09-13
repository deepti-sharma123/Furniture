import React, { useState } from 'react'
import Banner from '../Component/Banner'
import Form from '../Component/Form'
import Footer from '../Component/Footer'

const Contact = () => {
  const [bannerTitle, setBannerTitle] = useState("Contact")
  return (
    <>
      <Banner bannerTitle={bannerTitle} />
      <Form/>
      <Footer/>
    
    </>
  )
}

export default Contact
