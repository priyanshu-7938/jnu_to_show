import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar(){
    const Navigate = useNavigate();

    return (
        <>
            <div className="fixed top-0 w-full flex justify-between p-2 bg-white shadow-sm">
                <div className="flex items-center gap-1">
                    <img src="" alt="logo" /><p className="flex font-playfair font-bold cursor-pointer">Learning evolved</p>
                </div>
                <div className="font-mont flex gap-3 items-center text-sm cursor-pointer">
                    <p>
                            About Us
                    </p>
                    <p>
                            Modules
                    </p>
                    <p>                    
                            Services
                    </p>
                    <p>                    
                            FAQ's
                    </p>
                    <button className="border-2 border-first bg-first p-1 px-4" onClick={()=>{Navigate("/login")}}>
                        Log in
                    </button>
                </div>
            
            </div>  
        </>
    )
}