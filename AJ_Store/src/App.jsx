import React from 'react'
import { Navbar } from './components/Navbar'
import {Routes , Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import {Toaster} from 'react-hot-toast'
import { Footer } from "./components/Footer";
import { useAppContext } from './context/Appcontext'
import { Login } from './components/Login'
import { AllProduct } from './Pages/AllProduct'


export const App = () => {
   const isSellerPath = useLocation().pathname.includes("seller");
   const {showUserLogin} = useAppContext()
  return (
     
    <div>
      {isSellerPath ? null :<Navbar/> }
      {showUserLogin ? <Login/> : null  }
       <Toaster/>
    
    <div className={ `${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-30"} `}>
      <Routes>
        <Route path = '/' element ={<Home/>} ></Route>
        <Route path = '/products' element ={<AllProduct/>} ></Route>
      </Routes>
    </div>
     {!isSellerPath && <Footer/>}
    </div>
  )
  
}

export default App  