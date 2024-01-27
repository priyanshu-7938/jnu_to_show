import React,{ useEffect } from "react";
import { useTheContext } from "../../context";
import audio from "../../assets/audio.gif";

export default function Shimmer(){
    const { textHolder, setTextHolder, chat, recentAns } = useTheContext();

    useEffect(()=>{
        setTextHolder("ttext that goes here which will be introduing the system....");
    },[]);
    return (
        <>
            <div className="pt-[80px] px-[30px] bg-first h-[100vh]">
                <div className="flex flex-col border-4 border-black p-3">
                    <img src={audio} className="h-[40px] w-[40px] mb-2" alt="voice goes here.." />
                    <div>
                        {chat}
                    </div>
                </div>
            </div>
        </>
    )
}