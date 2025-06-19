import React, { useState } from 'react'
import { useAppContext } from '../../context/Appcontext'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 


export default function SellerLogin() {
    const {isSeller,setIsSeller} = useAppContext()
    const [email,setEmail] =useState("");
    const [password ,setPassword] = useState('');

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
         console.log("✅ onSubmitHandler triggered");
        setIsSeller(true)
    }
    
     const navigate = useNavigate()
    useEffect(()=>{
        if(isSeller){
            navigate("/seller")
        }
    },[isSeller])

  return !isSeller && (
    <form  onSubmit={onSubmitHandler} className="min-h-screen flex items-center text-sm text-gray-600">
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 ">
            <p className="text-2xl font-medium m-auto "><span className="text-green-500">Seller</span>Login</p>
            <div className="w-full">
                <p>Email</p>
                <input onChange={(e)=>setEmail(e.target.value)}  value={email}
                type="email" placeholder="Enter Email"  className="border border-gray-200 rounded w-full p-2 mt-1 outline-green-500" required/>
            </div>
             <div className="w-full">
                <p>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)}  value={password}
                type="password" placeholder="Enter your password"  className="border border-gray-200 rounded w-full p-2 mt-1 outline-green-500" required/>
            </div>
            <button className="bg-green-500 text-white w-full py-2 rounded-md  cursor-pointer">Login</button>
        </div>
    </form>
  )
}
