import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header from './Component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'

function App() {
 

  return (
    <>
      <BrowserRouter>
      < Header />
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
