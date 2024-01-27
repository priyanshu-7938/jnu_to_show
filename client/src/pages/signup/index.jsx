import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { message } from 'react-message-popup';



export default function Signup() {
    
    const navigate = useNavigate();
    const [ password, setPassword ] = useState(null);
    const [ username, setUsername ] = useState(null);
    const [ fullname, setFullname ] = useState(null);
    //ui states...
    const [ visited, setVisited ] = useState(false);
    const [ notSame, setNotSame ] = useState(false);
    const [ faceAdded, setFaceAdded ] = useState(false);
    const [ faceId, setFaceId ] = useState();
    const [ faceio ,setFaceio ] = useState();
    
    useEffect(() => {
        const face = new faceIO("fioa6a16");
        if(face){
            setFaceio(face);
        }
        else{
            message.error("the face settig cant be loded!!");
        }
    }, []);
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleFullName = (event) => {
        setFullname(event.target.value);
    };
    const handleRePassword = (event) => {
        const value = event.target.value;
        setNotSame(value!=password);
        setVisited(true);
    }

    const handelFaceId = async () => {
        try {
          let response = await faceio.enroll({
            locale: "auto",
            payload: {
              email: "example@gmail.com",
              pin: "12345",
            },
          });
          setFaceId(response.facialId);
          setFaceAdded(true);
          console.log(` Unique Facial ID: ${response.facialId}
          Enrollment Date: ${response.timestamp}
          Gender: ${response.details.gender}
          Age Approximation: ${response.details.age}`);
        } catch (error) {
          console.log(error);
        }
    };

      
    return(
        <>
            <Navbar/>
            <div className="font-bold mt-[100px] mx-auto w-[400px] border-2 p-5 text-[#6DA4AA]">
                <p className="text-6xl py-2">Sign up</p>
                <p className="py-1 font-2xl text-[#647D87]">Username</p>
                <input required type="text" className="focus:outline-none p-2 px-3 h-[50px] border-3 bg-[#FAEF9B] rounded-[20px] w-full text-xl" onChange={handleUsername}/>
                <p className="py-1 font-2xl text-[#647D87]">Email</p>
                <input required type="text" className="focus:outline-none p-2 px-3 h-[50px] border-3 bg-[#FAEF9B] rounded-[20px] w-full text-xl" onChange={handleFullName}/>
                <p className="py-1 font-2xl text-[#647D87]">Password</p>
                <input required type="password" className="focus:outline-none p-2 px-3 h-[50px] border-3 bg-[#FAEF9B] rounded-[20px] w-full text-3xl" onChange={handlePassword}/>
                <p className="py-1 font-2xl text-[#647D87]">Re-Password</p>
                <input required type="password" className="focus:outline-none p-2 px-3 h-[50px] border-3 bg-[#FAEF9B] rounded-[20px] w-full text-3xl" onChange={handleRePassword}/>
                <p className={`${(visited&&notSame)?" flex text-red-700 ":"hidden"}`}>
                    ! the password must be same
                </p>
                {faceAdded ? 
                    <>
                        <p className="text-2xl">😁 Face Id Added!!</p>
                        <p className="text-xs font-playfair  text-[#647D87]">{faceId}</p>
                    </>:
                    <>
                        <button className="border-2 border-first bg-fourth p-1 px-4 mt-2" onClick={handelFaceId}>Add Face Id</button><br/>
                    </> 
                }
                <button className={`m-1 my-3 bg-yellow-300 rounded-[10px] p-2 ${(notSame)?" hidden ":""}`} onClick={()=>{alert("log")}}>Submit</button>
            </div>
        
        </>
    )
}
