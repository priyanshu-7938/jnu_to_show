import React, { useState, useEffect} from "react";
import { useTheContext } from "../../context";
import { message } from 'react-message-popup';
import Navbar from "./Navbar";


export default function Login (){
    
    const [ loginTo, setLoginTo ] = useState(false);// false = admin
    // const navigate = useNavigate();
    const [ password, setPassword ] = useState(null);
    const [ username, setUsername ] = useState(null);
    const [ isBlind , setBlind ] = useState(false); 
    const [ faceId, setFaceId ] = useState();
    const [ faceio , setFaceio] = useState();

    useEffect(()=>{
   
        if(localStorage.getItem("isBlind") == null || localStorage.getItem("isBlind") == true){
            setBlind(true);
        }
        const face = new faceIO("fioa6a16");
        if(face){
            setFaceio(face);
        }
        else{meddage.error("the faceio not workinng!")}
    },[]);
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const ToggelBlind = () => {
        isBlind((val)=> !val );
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handelCreation = (status) => {
        switch(status){
            case 201:
                message.succcess("Account Created SucessFully....","success");
                //todo
                break;
            case 401:
                message.error("Wrong Password....","error");
                break;
            case 404:
                message.error("Invalid username....","error");
                break;
            default:
                message.error("Something Went wrong !!","error");
                break;
        }
    }
    useEffect(()=>{
        if(loginTo){
            handleLogInViaFace();
        }
    },[loginTo]);
    useEffect(()=>{
        if(faceId){
            //fetch the token....
        }
    },[faceId]);
    const handleLogInViaFace = async () => {
        try {
          let response = await faceio.authenticate({
            locale: "auto",
          });
          setFaceId(response.facialId);
          console.log(` Unique Facial ID: ${response.facialId}
              PayLoad: ${response.payload}
              `);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <>
            {/* <div className="mx-[30%] mt-[200px] h-[100vh]">
                <div className="w-[40%] flex justify-center border-1 border-black">
                    <p className="text-4xl">Login</p>

                </div>
            </div> */}
            <Navbar/>
            { !loginTo &&

            
                <div className="font-bold mt-[100px] mx-auto w-[400px] border-2 p-5 text-[#6DA4AA]">
                    <p className="text-6xl py-2 flex items-center">Login 
                        <button
                        className="bg-gray-300 text-gray-700 px-4 h-[50%] rounded-full text-sm text-bold focus:outline-none focus:shadow-outline"
                        onClick={()=>{setLoginTo((val)=> !val)}}>{loginTo? <>Login via Password</>:<>Face Id</>}!</button>
                    </p>
                    <p className="py-1 font-2xl text-[#647D87]">Username</p>
                    <input required type="text" className="focus:outline-none p-2 px-3 h-[50px] border-3 bg-fourth rounded-[20px] w-full text-xl" onChange={handleUsername}/>
                    <p className="py-1 font-2xl text-[#647D87]">Password</p>
                    <input required type="password" className="focus:outline-none p-2 px-3 h-[50px] border-3 bg-fourth rounded-[20px] w-full text-3xl" onChange={handlePassword}/>
                    <button className="m-1 my-3 bg-yellow-300 rounded-[10px] p-2" >Submit</button>
                </div>
            
            
            }
            {
                loginTo && 

                <div className="font-bold mt-[100px] mx-auto w-[400px] border-2 p-5 text-[#6DA4AA]">
                    <p className="text-6xl py-2 flex items-center">Face Id 
                        <button
                        class="bg-gray-300 text-gray-700 px-4 h-[50%] rounded-full text-sm text-bold focus:outline-none focus:shadow-outline"
                        onClick={()=>{setLoginTo((val)=> !val)}}>{loginTo? <>Via Password</>:<>Face Id</>}!</button>
                    </p>
                    <p className="py-1 font-2xl text-first">🔉 Click on page after sitting in front of the page</p>
                    <button className="m-1 my-3 bg-third rounded-[10px] p-2" onClick={()=>{setLoginTo(false)}} >Log In via Password</button>
                    <button className="m-1 my-3 bg-third rounded-[10px] p-2" onClick={()=>{setLoginTo((val)=>{val})}} >Retry</button>
                </div>
            }
        </>
    )
}




    