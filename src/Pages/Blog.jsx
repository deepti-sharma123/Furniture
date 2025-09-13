import React, { useState } from 'react'
import Banner from '../Component/Banner'
import Owner  from '../Component/Owner'
import TableChair from '../Component/TableChair'
import Testmonial from '../Component/Testmonial'
import Footer from '../Component/Footer'

const Blog = () => {
  const [bannerTitle, setBannerTitle] = useState("Blog")
  return (
    <>
      <Banner bannerTitle={bannerTitle} />
      <Owner/>
      <TableChair/>
      <Testmonial/>
      <Footer/>
    </>
  )
}

export default Blog