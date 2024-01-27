import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheContext } from "../../context";

export default function Navbar(){
    const Navigate = useNavigate();
    const { setToken, setUserData, userData } = useTheContext();
    const Logout = () => {
        setToken(null);
        setUserData(null);
        localStorage.setItem("token",undefined);
    }
    // TextToSpeech.talk("Hello Beautiful World!");
    
    return(
        <>
            <div className="fixed top-0 w-full flex justify-between p-2 bg-white shadow-sm">
                <div className="flex items-center gap-1">
                    <img src="" alt="logo" /><p className="flex font-playfair font-bold">Learning evolved</p>
                </div>
                <div className="font-mont flex gap-3 items-center text-sm cursor-pointer">
                    <p className="">Person_Name</p>
                    <p className="">any_other_info_here</p>
                    <button className="border-2 border-first bg-fourth p-1 px-4" onClick={Logout}>
                        Logout »
                    </button>
                </div>
            </div>
        </>
    )
}