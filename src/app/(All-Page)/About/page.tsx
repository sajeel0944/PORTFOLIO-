import Image from "next/image"


function About(){
    return (
        <>
            <div className="border-">

                <div className="border- ml-20 w-5/6  [@media(max-width:450px)]:ml-2 [@media(max-width:450px)]:w-80">

                        <h1 className="text-white text-4xl text-justify mt-24 [@media(max-width:450px)]:mt-12 [@media(max-width:450px)]:text-xl">Hello! I Am a passionate web development student with 
                        expertise in TypeScript, CSS, HTML, Tailwind CSS, Figma and Next.js. I enjoy building interactive and responsive websites and am constantly learning new techniques to improve my skills. I Am 
                        currently working on projects to showcase my abilities, 
                        including this portfolio, to share my journey and achievements 
                        in web development.</h1>

                        <div className="border-  mt-24 [@media(max-width:450px)]:mt-16">
                            <Image src={"/picture/result.PNG"} alt="" width={"827"} height={"827"} className="ml-32 [@media(max-width:450px)]:ml-0"></Image>
                            <h1 className="text-white text-2xl text-center font-semibold mt-3 [@media(max-width:450px)]:text-xl">My GIAIC result shows that I achieved a 90th percentile </h1>
                        </div>

                        <div className="border- mt-16">

                            <h1 className=" text-white text-3xl font-bold [@media(max-width:450px)]:text-2xl">PERSONAL INFORMATION</h1>

                            <div className="flex mt-10">
                                <h1 className="text-white font-semibold">FRIST NAME :</h1>
                                <h1 className="text-white font-medium ml-1">SAJEEL</h1>
                            </div>


                            <div className="flex mt-4">
                                <h1 className="text-white font-semibold">LAST NAME :</h1>
                                <h1 className="text-white font-medium ml-1">ULLAH  KHAN </h1>
                            </div>

                            
                            <div className="flex mt-4">
                                <h1 className="text-white font-semibold">AGE :</h1>
                                <h1 className="text-white font-medium ml-1">19 </h1>
                            </div>

                            
                            <div className="flex mt-4">
                                <h1 className="text-white font-semibold">NATIONALITY :</h1>
                                <h1 className="text-white font-medium ml-1">PAKISTAN </h1>
                            </div>

                            
                            <div className="flex mt-4">
                                <h1 className="text-white font-semibold"> FREELANCE :</h1>
                                <h1 className="text-white font-medium ml-1">AVAILABLE </h1>
                            </div>

                            <div className="flex mt-4">
                                <h1 className="text-white font-semibold"> CITY :</h1>
                                <h1 className="text-white font-medium ml-1">KARACHI </h1>
                            </div>

                            <div className="flex mt-4">
                                <h1 className="text-white font-semibold"> PHONE :</h1>
                                <h1 className="text-white font-medium ml-1">+342524233 </h1>
                            </div>


                        </div>






                </div>

            </div>
        </>
    )
}

export default About