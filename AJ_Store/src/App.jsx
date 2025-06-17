import React from 'react'
import { Navbar } from './components/Navbar'
import {Routes , Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import {Toaster} from 'react-hot-toast'
import ProductCategory from './Pages/ProductCategory'
import ProductDetails from './Pages/ProductDetails'

export const App = () => {
   const isSellerPath = useLocation().pathname.includes("seller");
  return (
     
    <div>
      {isSellerPath ? null :<Navbar/> }
       <Toaster/>
    
    <div className={ `${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-30"} `}>
      <Routes>
        <Route path = '/' element ={<Home/>} ></Route>
        <Route path = '/products/:category' element={<ProductCategory/>}/>
        <Route path = '/products/:category/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
    </div>
  )
  
}

export default App  