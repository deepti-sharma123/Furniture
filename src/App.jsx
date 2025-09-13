import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header from './Component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Services from './Pages/Services'
import Blog from './Pages/Blog'

function App() {
 

  return (
    <>
      <BrowserRouter>
      < Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
