import { createContext,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({children}) =>{

    const navigate = useNavigate();
    const [user, setUser] = useState(false)
    const [Isseller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)


    const [searchQuery, setsearchQuery] = useState({})

    
    const value = {navigate,user, setUser,Isseller, setIsSeller,showUserLogin , setShowUserLogin,searchQuery,setsearchQuery}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
} 

export const useAppContext = () =>{
    return useContext(AppContext)
}