import React from "react";
import Navbar from "./navbar"
import { Link, Element, scroller } from 'react-scroll';
import { useNavigate } from "react-router-dom";


export default function HomeWelcome () {
    const Navigate =  useNavigate();
    return (
        <>
            <Navbar/>
            
            <Element name="about">
                <section className="bg-first h-[100vh] px-[200px] font-playfair">
                    <div className="w-[50%] pt-[200px]">
                        <p className="text-5xl">Empowering Blind Individuals Through Education and Technology</p>
                        <p className="text-md  mt-1">
                        We are a company that provides a platform for blind individuals to access verified courses and educational resources. Our mission is to enable them to learn and grow through the power of technology and voice-over narration.
                        </p>
                        <div className="flex gap-4">
                            <button className="border-2 border-first bg-fourth p-1 px-4" onClick={()=>{Navigate("/login")}}>
                                Login                        
                            </button>
                            <button className="border-2 border-white broder-2 bg-first p-1 px-4" onClick={()=>{Navigate("/signup")}}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </section>
            </Element>
            <Element name="temp">
                <section className="flex h-[100vh] font-playfair pt-[100px]">
                    <div className="w-[50%] p-[80px]">
                        <p className="text-4xl">Transforming Education for the Visually Impaired</p>
                        <p className="text-md mt-1">At our company, we have developed unique teaching methods specifically designed to cater to the needs of blind or visually impaired learners. Through our voice-over technology, we provide an immersive and inclusive educational experience that empowers individuals to learn and grow.</p>
                        <div className="flex gap-2 mt-3">
                            <button className="border-2 border-white broder-2 bg-first p-1 px-4" onClick={()=>{Navigate("/signup")}}>
                                Learn More
                            </button>
                            <button className="border-2 border-first bg-fourth p-1 px-4" onClick={()=>{Navigate("/login")}}>
                                Sign Up                        
                            </button>
                        </div>
                    </div>
                    <div className="w-[50%] flax items-center justify-middle p-[40px]">
                        <img src="" className="w-full h-full" alt="any image..." />
                    </div>
                </section>
            </Element>
            <Element name="module">
                <section className="flex flex-col justify-middle items-center font-playfair">
                    <div className="w-full ">
                        <div className="flex flex-col items-center">
                            <p className="text-sm">Courses</p>
                            <p className="text-3xl">Explore Our Course Catalog  </p>
                        </div>
                    </div>
                    <div className="flex gap-2 p-[40px]">
                        <div className="flex flex-col w-[50%]">
                            <img src="" alt="img here" className="bg-first w-full h-[200px]" />
                            <div className="p-6">
                                <p className="tet-3xl">Introduction to Braille</p>
                                <p className="text-xs">Learn the basics of Braille and its importance in communication.</p>
                                <div className="flex gap-1 items-center">
                                    <img src="" alt="profile" className="w-[30px] h-[30px] bg-first rounded-[100%]"/>
                                    <div>
                                        <p className="text-md">Name singh</p>
                                        <p className="text-xs">10 minute audio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[50%]">
                            <img src="" alt="img here" className="bg-first w-full h-[200px]" />
                            <div className="p-6">
                                <p className="tet-3xl">Introduction to Braille</p>
                                <p className="text-xs">Learn the basics of Braille and its importance in communication.</p>
                                <div className="flex gap-1 items-center">
                                    <img src="" alt="profile" className="w-[30px] h-[30px] bg-first rounded-[100%]"/>
                                    <div>
                                        <p className="text-md">Name singh</p>
                                        <p className="text-xs">10 minute audio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="border-2 border-white broder-2 bg-first p-1 px-4" onClick={()=>{Navigate("/modules")}}>
                        View More
                    </button>
                    
                </section>
            </Element>
            <Element name="services">
                <section>
                    <div className="flex gap-6 p-[50px]">
                        <div className="w-[50%]">
                            <p className="text-xs">Empowering</p>
                            <p className="font-mont font-bold text-6xl">
                                Transformed Lives and many more to enfluence
                            </p>
                        </div>
                        <div className="w-[50%] p-[40px] font-mont">
                            <p>Our courses have empowered thousands of blind individuals to gain knowledge and skills, enabling them to lead independent and fulfilling lives. Join us on this transformative journey and experience the impact of accessible education.</p>
                            <div className="flex gap-2 mt-3">
                                <button className="border-2 border-white broder-2 bg-first p-1 px-4" onClick={()=>{Navigate("/signup")}}>
                                    Learn More
                                </button>
                                <button className="border-2 border-first bg-fourth p-1 px-4" onClick={()=>{Navigate("/login")}}>
                                    Sign Up »                        
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-[150px]">
                        <div className="flex gap-3">
                            <div className="w-[3px] rounded bg-black"></div>
                            <div className="flex gap-1 flex-col">
                                <p className="text-7xl">10,211</p>
                                <p calssName="text-sm">Students Involved</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-[3px] rounded bg-black"></div>
                            <div className="flex gap-1 flex-col">
                                <p className="text-7xl">27</p>
                                <p calssName="text-sm">NGO's Affiliated</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-[3px] rounded bg-black"></div>
                            <div className="flex gap-1 flex-col">
                                <p className="text-7xl">1,091</p>
                                <p calssName="text-sm">Mentors Connected</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
            <Element name="faq">
                <section className="h-[100vh] font-playfair p-[70px] mt-[100px]">
                    <div className="">
                        <p className="text-5xl">FAQs</p>
                        <p className="text-md">Find answers to commonly asked questions about our courses, accessibility options, and support.</p>
                    </div>
                    
                    <div className="flex gap-4 mt-[70px] px-[70px] justify-between">
                        <p className="text-xl w-[40%]">wuestion here</p>
                        <p className="text-md w-[60%]">answere here</p>
                    </div>
                    <div className="flex gap-4 mt-[70px] px-[70px] justify-between">
                        <p className="text-xl w-[40%]">wuestion here</p>
                        <p className="text-md w-[60%]">answere here</p>
                    </div>
                    <div className="flex gap-4 mt-[70px] px-[70px] justify-between">
                        <p className="text-xl w-[40%]">wuestion here</p>
                        <p className="text-md w-[60%]">answere here</p>
                    </div>
                    <div className="flex gap-4 mt-[70px] px-[70px] justify-between">
                        <p className="text-xl w-[40%]">wuestion here</p>
                        <p className="text-md w-[60%]">answere here</p>
                    </div>
                    <button className="border-2 border-white broder-2 bg-first p-1 px-4 mt-[60px] mx-[40px]" onClick={()=>{Navigate("/signup")}}>
                        Explore More Question »                 
                    </button>
                </section>
            </Element>
            <Element name="faq">
                <section className="font-mont p-[70px] flex gap-8">
                    <div className="p-4 px-7 flex flex-col w-[60%] gap-[20px]">
                        <p className="text-xs">Empowering</p>
                        <p className="text-4xl font-playfair">Get Support</p>
                        <p className="text-xs">We're here to help. Reach out to us for support or further information.</p>
                    </div>
                    <div className="p-[40px] flex flex-col gap-[30px]">
                        <div className="flex ">
                            <img src="" alt="img" className="w-[20px] h-[20px] rounded-[100%]" />
                            <div className="">
                                <p className="text-xl">Email</p>
                                <p className="text-xs">test-email@domain.com</p>
                            </div>
                        </div>  
                        <div className="flex ">
                            <img src="" alt="img" className="w-[20px] h-[20px] rounded-[100%]" />
                            <div className="">
                                <p className="text-xl">Phone</p>
                                <p className="text-xs">+91 092-122-9898</p>
                            </div>
                        </div>                        
                    </div>
                </section>
                <div className="mx-[100px] my-[50px] h-[400px] bg-second">
                    <img src="" className="w-full h-full" alt="image is here" />
                </div>
            </Element>
        </>
    )
}