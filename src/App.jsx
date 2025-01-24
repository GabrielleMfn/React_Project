import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Collection from './pages/Collection' 
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Onsale from './pages/Onsale'





const App = () => {
  
  return (
    <div className='px-4 px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      

       <Navbar />


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onsale" element={<Onsale/>} />
    </Routes>

    </div>
  )
}

export default App
