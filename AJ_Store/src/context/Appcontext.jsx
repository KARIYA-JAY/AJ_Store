import { createContext,useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
// import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children }) =>{

    const currency = import.meta.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [Isseller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUSerLogin] = useState(false)
    const [products,setProducts] = useState([])

    //const [cartItems,setCartItems] = useState({})

    //fetch all products
    const fetchProducts = async ()=>{
        setProducts(dummyProducts)
    }

    //add product to cart
    // const addToCart = ()=>{
    //     let cartData= structuredClone(cartItems);
    //     if(cartData[itemID]){
    //         cartData[itemID]+=1;
    //     }else{
    //         cartData[itemID] = 1;
    //     }
    //     setCartItems(cartData);
    //     toast.success("Add To Cart")
    // }

    // //update card item quantity
    // const updateCartItem = ()=>{
    //     let cartData = structuredClone(cartItems);
    //     cartData[itemID]=quantity;
    //     setCartItems(cartData)
    //     toast.success("card item Updated") 
    // }

    // //remove product from cart
    //  const removeFromCart = (itemID)=>{
    //     let cartData= structuredClone(cartItems);
    //     if([itemID]){
    //         cartData[itemID]-=1;
    //         if(cartData[itemID]  === 0){
    //             delete cartData[itemID];
    //         }
    //     }
    //     toast.success("Removed from cart")
    //     setCartItems(cartData)
    //  }

    
    useEffect(()=>{
        fetchProducts() 
    },[])
     
    // const value = {navigate,user, setUser,Isseller, setIsSeller,showUserLogin , setShowUSerLogin , products,currency, addToCart
    //     ,updateCartItem ,removeFromCart
    // } 
    const value = {navigate,user, setUser,Isseller, setIsSeller,showUserLogin , setShowUSerLogin , products,currency,

    }
    return <AppContext.Provider value={value}>
        {children }
    </AppContext.Provider>
} 

export const useAppContext = () =>{
    return useContext(AppContext)
}