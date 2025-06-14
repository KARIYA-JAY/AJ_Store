import React from 'react'
import { Navbar } from './components/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
export const App = () => {
  return (
    <div>
    <Navbar/>
    <div>
      <Routes>
        <Route path = '/' element ={<Home/>} ></Route>
      </Routes>
    </div>
    </div>
  )
  
}

export default App  