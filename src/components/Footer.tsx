import Image from "next/image"
import Link from "next/link"


function Footer(){
    return(
        <>
            <div className="bg-black h-44 flex justify-center  mt-20 border-">
                <div className=" w-[74rem] h-32 mt-6 flex [@media(max-width:450px)]:w-[22rem] border- ">

                    <div className="border- w-80 ">
                        <h1 className="font-bold text-xl text-white mt-10 ml-8 [@media(max-width:450px)]:mt-10 [@media(max-width:450px)]:text-[0.7rem] [@media(max-width:450px)]:ml-0.5 [@media(max-width:450px)]:leading-tight "> &nbsp; &nbsp; &nbsp; SAJEEL ULLAH KHAN</h1>
                        <h1 className="font-extrabold text-sm text-white ml-14 mt-1 [@media(max-width:450px)]:font-semibold [@media(max-width:450px)]:ml-0.5 [@media(max-width:450px)]:mt-2">STUDENT OF GIAIC</h1>
                    </div>

                    <div className="border- w-80 ">
                        <h1 className="text-xl text-white font-bold text-center mt-10 [@media(max-width:450px)]:text-xs">FOLLOE ME</h1>
                        <div className="border-2 border-black w-56  flex  ml-9 mt-2 [@media(max-width:450px)]:w-28 [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:mt-4">
                           <Link href={"https://www.facebook.com/profile.php?id=100089083026778"} target="_blank"> <Image src={"/picture/facebook-removebg-preview.png"} alt={""} width={100} height={100} className="w-8 h-8 ml-3 mt-1 [@media(max-width:450px)]:w-5 [@media(max-width:450px)]:h-5 [@media(max-width:450px)]:ml-0"></Image></Link>
                           <Link href={"https://github.com/sajeel0944?tab=repositories"} target="_blank"> <Image src={"/picture/github-removebg-preview.png"} alt={""} width={100} height={100} className="w-7 h-7 ml-3 mt-1 bg-white rounded-full [@media(max-width:450px)]:w-5 [@media(max-width:450px)]:h-5 [@media(max-width:450px)]:ml-1"></Image></Link>
                           <Link href={" https://www.instagram.com/sajeelullahkhan/"} target="_blank"> <Image src={"/picture/instagram-removebg-preview.png"} alt={""} width={100} height={100} className="w-9 h-9 ml-2  [@media(max-width:450px)]:w-6 [@media(max-width:450px)]:h-6 [@media(max-width:450px)]:ml-1"></Image></Link>
                           <Link href={"https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/"} target="_blank"> <Image src={"/picture/linkedin-removebg-preview.png"} alt={""} width={100} height={100} className="w-9 h-9 ml-1 [@media(max-width:450px)]:w-6 [@media(max-width:450px)]:h-6 [@media(max-width:450px)]:ml-1"></Image></Link>
                           <Link href={" https://www.npmjs.com/~sajeel0944"} target="_blank"><Image src={"/picture/npm-removebg-preview.png"} alt={""} width={100} height={100} className="w-9 ml-1 [@media(max-width:450px)]:w-6 [@media(max-width:450px)]:ml-1" ></Image></Link>
                        </div>
                    </div>

                    <div className="border-2 border-black w-80">
                        <h1 className="text-xl text-white font-bold text-center mt-10 [@media(max-width:450px)]:text-xs">CONTENT ME</h1>
                        <h1 className="text-xl text-white font-bold text-center mt-2 [@media(max-width:450px)]:text-xs">+3425024233</h1>
                    </div>

                    <div className="border- w-80 [@media(max-width:450px)]:w-60">
                         <div className="border-2  w-20 h-20 rounded-full ml-28 mt-9 [@media(max-width:450px)]:w-12 [@media(max-width:450px)]:h-12 [@media(max-width:450px)]:ml-1.5">
                             <Image src={"/picture/sajeel1-removebg-preview.png"} alt={""} width={400} height={400} className=" w-[5rem] rounded-full [@media(max-width:450px)]:w-[3.5rem]"></Image>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer





