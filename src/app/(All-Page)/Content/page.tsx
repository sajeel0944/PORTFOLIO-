"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

function Content(){

    const [showMenu, setShowMenu] = useState<boolean>(false);
    

    return(
        <>
            <div className="">

              <div className=" w-3/4 mt-12 ml-20 [@media(max-width:450px)]:ml-4">
                    
                    <div className=" flex">
                        <Image src={"/picture/facebook-removebg-preview.png"} alt={""} width={100} height={100} className="w-16 mt-3 [@media(max-width:450px)]:w-16 [@media(max-width:450px)]:h-16"></Image>
                        <h1 className="text-white mt-9 ml-12 text-2xl [@media(max-width:450px)]:text-sm [@media(max-width:450px)]:mt-4 [@media(max-width:450px)]:ml-6">My Facebook Link :   <Link href={"https://www.facebook.com/profile.php?id=100089083026778"} target="_blank" className="hover:text-blue-600">https://www.facebook.com/profile.php?id=100089083026778</Link></h1>
                    </div>    

                    <div className=" flex">
                        <Image src={"/picture/github-removebg-preview.png"} alt={""} width={100} height={100} className="w-16 [@media(max-width:450px)]:w-16 [@media(max-width:450px)]:h-16  bg-white rounded-full mt-6"></Image>
                        <h1 className="text-white mt-11 ml-12 text-2xl [@media(max-width:450px)]:text-sm [@media(max-width:450px)]:mt-10 [@media(max-width:450px)]:ml-6">My Github Link :   <Link href={"https://github.com/sajeel0944?tab=repositories"} target="_blank" className="hover:text-blue-600">https://github.com/sajeel0944?tab=repositories</Link></h1>
                    </div>

                    <div className=" flex">
                        <Image src={"/picture/instagram-removebg-preview.png"} alt={""} width={100} height={100} className="w-16 mt-6 "></Image>
                        <h1 className="text-white mt-10 ml-12 text-2xl [@media(max-width:450px)]:text-sm [@media(max-width:450px)]:mt-10 [@media(max-width:450px)]:ml-6">My Instagram Link :   <Link href={"https://www.instagram.com/sajeelullahkhan/"} target="_blank" className="hover:text-blue-600">https://www.instagram.com/ <br />sajeelullahkhan/</Link></h1>
                    </div>

                    <div className=" flex">
                        <Image src={"/picture/linkedin-removebg-preview.png"} alt={""} width={100} height={100} className="w-16 mt-6 [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:mt-12"></Image>
                        <h1 className="text-white mt-9 ml-12 text-2xl [@media(max-width:450px)]:text-sm [@media(max-width:450px)]:mt-11 [@media(max-width:450px)]:ml-6">My Linkedin Link :   <Link href={"https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/ "} target="_blank" className="hover:text-blue-600">https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/ </Link></h1>
                    </div>

                    <div className=" flex">
                        <Image src={"/picture/npm-removebg-preview.png"} alt={""} width={100} height={100} className="w-16 mt-6 "></Image>
                        <h1 className="text-white mt-9 ml-12 text-2xl [@media(max-width:450px)]:text-sm [@media(max-width:450px)]:mt-9 [@media(max-width:450px)]:ml-6">My npm Link :   <Link href={"https://www.npmjs.com/~sajeel0944"} target="_blank" className="hover:text-blue-600">https://www.npmjs.com/~sajeel0944</Link></h1>
                    </div>

               </div>

               <div className=" w-3/4 mt-20 ml-20 h-[39rem] [@media(max-width:450px)]:ml-2 [@media(max-width:450px)]:w-80 [@media(max-width:450px)]:h-[33rem] [@media(max-width:450px)]:-mb-[2rem]">
        
                    <h1 className={`text-white text-3xl font-bold ml-40 mt-4 mb-5 [@media(max-width:450px)]:ml-2 [@media(max-width:450px)]:w-80 [@media(max-width:450px)]:text-2xl  ${showMenu  ? "hidden" : "block"}  `}>INTER YOUR FEEDBACK</h1>

                    <div className={`w-2/3  h-[35rem] border-2 ml-40 rounded-xl text-center [@media(max-width:450px)]:ml-2 [@media(max-width:450px)]:w-80 [@media(max-width:450px)]:h-[28rem] ${showMenu  ? "hidden" : "block"}`}>

                        <h1 className="text-white text-2xl mr-80 mt-14 [@media(max-width:450px)]:mt-9 [@media(max-width:450px)]:ml-3">Name</h1>
                        <input type="text" className="bg-black text-white border-2 w-96 h-9 [@media(max-width:450px)]:w-72" />

                        <h1 className="text-white text-2xl mr-80 mt-14 [@media(max-width:450px)]:mt-9 [@media(max-width:450px)]:ml-3">Email</h1>
                        <input type="email" className="bg-black text-white border-2 w-96 h-9 [@media(max-width:450px)]:w-72" />

                        <h1 className="text-white text-2xl mr-72 mt-14 [@media(max-width:450px)]:mt-9 [@media(max-width:450px)]:ml-3">Message</h1>
                        <input type="text" className="bg-black text-white border-2 w-96 h-9 [@media(max-width:450px)]:w-72" /><br />

                        <button className="bg-red-600 mt-20 w-40 h-12 rounded-xl [@media(max-width:450px)]:mt-12 hover:bg-red-400"  onClick={() =>     setTimeout(() => {    setShowMenu(!showMenu)   }, 1500) }><h1 className="text-white font-semibold hover:text-xl">SUBMIT</h1></button>
                    </div>


                    <div className={`w-2/3  h-[35rem] border-2 ml-40 rounded-xl text-center [@media(max-width:450px)]:ml-2 [@media(max-width:450px)]:w-80 [@media(max-width:450px)]:h-[28rem] ${showMenu  ?  "block" : "hidden"}`}>

                            <h1 className="text-4xl font-extrabold  text-white mt-64 [@media(max-width:450px)]:mt-36">THANK FOR YOUR FEEDBACK</h1>

                    </div>

                    





                </div>

            </div>
        </>
    )
}

export default Content