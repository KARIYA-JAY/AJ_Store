import { createContext,useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children}) =>{

    const currency = import.meta.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(false)
    const [isSeller, setIsSeller] = useState(false)

    const [searchQuery, setsearchQuery] = useState({})

    
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products,setProducts] = useState([])

    const [cartItems,setCartItems] = useState({})

    //fetch all products
    const fetchProducts = async ()=>{
        setProducts(dummyProducts)
    }

    //update cart Quetity
    const getCartCout = () =>{
        let totalCount = 0 ;
        for(const item in cartItems){
            totalCount  += cartItems[item]; 
        }
        return totalCount;
    }

    // totoal cart amout 
    const getCartAmount  = () =>{
        let totalAmount = 0; 
        for(const item in cartItems){
            let itemInfo =products.find((pr)=> pr._id == item) ;
            if(cartItems[item] > 0){
                totalAmount += itemInfo.offerprice * cartItems[item] ;
            }
            
        }
        return Math.floor(totalAmount * 100 ) / 100
    }


    //add product to cart
    const addToCart = (itemId)=>{
        let cartData= structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId]+=1;
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Add To Cart")
    }

    //update card item quantity
    const updateCartItem = (itemId,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId]=quantity;
        setCartItems(cartData)
        toast.success("card item Updated") 
    }

    //remove product from cart
     const removeFromCart = (itemId)=>{
        let cartData= structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId]-=1;
            if(cartData[itemId]  === 0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed from cart")
        setCartItems(cartData)
     }

    
    useEffect(()=>{
        fetchProducts() 
    },[])
     
    const value = {navigate,user, setUser,isSeller, setIsSeller,showUserLogin , setShowUserLogin , products,currency, addToCart
        ,updateCartItem ,removeFromCart , cartItems ,searchQuery,setsearchQuery,getCartAmount , getCartCout
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
} 

export const useAppContext = () =>{
    return useContext(AppContext)
}