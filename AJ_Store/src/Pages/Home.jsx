import React from "react";
import MainBanner from "../components/MainBannar";
import { BottomBanner } from "../components/BottomBanner";
import Categories from "../components/Categories";


const Home = () => {
    return(
        <div className="mt-10">
           <MainBanner /> 
           <Categories/>
           <BottomBanner />
        </div>
    )
}

export default Home 