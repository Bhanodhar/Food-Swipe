import React from 'react'
import './App.css'
import LandingPage from './foodSwipe/pages/LandingPage'
import {Routes, Route } from 'react-router-dom'
import ProductMenu from './foodSwipe/components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmId/:firmname' element={<ProductMenu />} />
      </Routes> 
    </div>
  )
}

export default App
