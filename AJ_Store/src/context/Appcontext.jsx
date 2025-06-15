import { createContext,useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({children }) =>{

    const navigate = useNavigate();
    const [user, setUser] = useState(true)
    const [Isseller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUSerLogin] = useState(false)
    
    const value = {navigate,user, setUser,Isseller, setIsSeller,showUserLogin , setShowUSerLogin}
    return <AppContext.Provider value={value}>
        {children }
    </AppContext.Provider>
} 

export const useAppContext = () =>{
    return useContext(AppContext)
}