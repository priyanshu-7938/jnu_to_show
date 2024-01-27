import React,{ useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import Navbar from "./navbar";
import Modules from "./modules";
import Shimmer from "./shimmer";
import { useTheContext } from "../../context";
import { intialData, recognition } from "../../utils";

export default function Journey(){
    const Navigator = useNavigate();
    const { textHolder, setTextHolder, Speak, token } = useTheContext();
    const [isDoubleTapped, setIsDoubleTapped] = useState(false);
    const spacePressCount = useRef(0);

    useEffect(() => {
        //setting the tokenn and login....
        if(localStorage.getItem("token") == null){
            // Navigator("/explore");
        }
        else{
            //fetch the data usong the token....
            // and set the data
        }
        //double tap initiative
        const handleKeyPress = (event) => {
          if (event.key === ' ') {
            spacePressCount.current += 1;
    
            // Reset count if more than 1 second has passed since the last space press
            setTimeout(() => {
              spacePressCount.current = 0;
            }, 1000);
    
            if (spacePressCount.current === 2) {
              setIsDoubleTapped(true);
              spacePressCount.current = 0; // Reset count after detecting double tap
              setTextHolder("Yes I'm listening!");
              recognition.start();
            }
          }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    useEffect(()=>{
        if(token){
            setTextHolder(intialData);
        }
    },[token]);
    return (
        <>
            <Navbar/>
            <Routes>
                <Route index element={<Shimmer/>} />
                <Route path="/module" element={<Modules />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/signup" element={<Signup />} /> */}
            </Routes>

            <div hidden>
                <Speak>
                    { textHolder }
                </Speak>
            </div>
        </>
    )
}