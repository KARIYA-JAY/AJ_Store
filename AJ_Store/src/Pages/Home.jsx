import React from "react";
import MainBanner from "../components/MainBannar";
import { BottomBanner } from "../components/BottomBanner";

const Home = () => {
    return(
        <div className="mt-10">
           <MainBanner /> 
           <BottomBanner />
        </div>
    )
}

export default Home 