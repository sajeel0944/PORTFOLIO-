import Link from "next/link"

function Navbar(){
    return(
        <>
            <div className="main-div bg-black h-[5rem] flex border-2 border-black [@media(max-width:450px)]:h-[3.5rem]">
                <div className="border-2 border-black w-36 h-[5rem] ml-16 [@media(max-width:450px)]:ml-0 [@media(max-width:450px)]:w-20 [@media(max-width:450px)]:h-[3.5rem]">
                    <div className="border-2 border-red-600 w-16 h-16 rounded-full ml-6 mt-1.5 bg-red-600 [@media(max-width:450px)]:w-10 [@media(max-width:450px)]:h-10  [@media(max-width:450px)]:ml-2"><h1 className="text-white font-serif text-center  text-6xl [@media(max-width:450px)]:text-4xl ">S</h1></div>
                </div>

                <div className="border-2 border-black w-[40.5rem] ml-48 flex items-center [@media(max-width:450px)]:ml-4 [@media(max-width:450px)]:w-[15.5rem] [@media(max-width:450px)]:h-[3.4rem]">
                    <ul className="flex ">
                        <Link href={"Home"}> <li className="text-2xl font-bold text-white cursor-pointer hover:underline hover:font-black hover:shadow-2xl hover:shadow-white [@media(max-width:450px)]:text-xs ">Home</li></Link>
                        <Link href={"Content"}> <li className="ml-16 text-2xl font-bold text-white cursor-pointer hover:underline hover:font-black hover:shadow-2xl hover:shadow-white [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:ml-3">Contant</li></Link>
                        <Link href={"Projects"}><li className="ml-16 text-2xl font-bold text-white cursor-pointer hover:underline hover:font-black hover:shadow-2xl hover:shadow-white  [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:ml-3">Projects</li></Link>
                        <Link href={"Skills"}><li className="ml-16 text-2xl font-bold text-white cursor-pointer hover:underline hover:font-black hover:shadow-2xl hover:shadow-white  [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:ml-3">Skills</li></Link>
                        <Link href={"About"}><li className="ml-16 text-2xl font-bold text-white cursor-pointer hover:underline hover:font-black hover:shadow-2xl  hover:shadow-white  [@media(max-width:450px)]:text-xs [@media(max-width:450px)]:ml-3">About</li></Link>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar 