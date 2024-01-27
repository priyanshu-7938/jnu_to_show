import React from "react";
import { Link, Element, scroller } from 'react-scroll';
import { useNavigate } from "react-router-dom";
export default function Navbar(){
    // const Navigate = useNavigate();
    const Navigate = (msg)=>{alert(msg);};

    return (
        <>
            <div className="fixed top-0 w-full flex justify-between p-2 bg-white shadow-sm">
                <div className="flex items-center gap-1">
                    <img src="" alt="logo" /><p className="flex font-playfair font-bold">Learning evolved</p>
                </div>
                <div className="font-mont flex gap-3 items-center text-sm cursor-pointer">
                    <p>
                        <Link to="about" smooth={true} duration={800}>
                            About Us
                        </Link>
                    </p>
                    <p>
                        <Link to="modules" smooth={true} duration={800}>
                            Modules
                        </Link>
                    </p>
                    <p>                    
                        <Link to="services" smooth={true} duration={800}>
                            Services
                        </Link>
                    </p>
                    <p>                    
                        <Link to="faq" smooth={true} duration={800}>
                            FAQ's
                        </Link>
                    </p>
                    <button className="border-2 border-first bg-fourth p-1 px-4" onClick={()=>{Navigate("/login")}}>
                        Login                        
                    </button>
                    <button className="border-2 border-first bg-first p-1 px-4" onClick={()=>{Navigate("/signup")}}>
                        Sign Up
                    </button>
                </div>
            
            </div>  
        </>
    )
}