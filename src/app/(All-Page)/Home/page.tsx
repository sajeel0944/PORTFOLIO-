import Image from "next/image"


export default function Home() {
  return (
    <>
      <div className="border-">
          <div className="border- ml-20  [@media(max-width:450px)]:ml-2">

              <div className="mt-8 ml-2 w-[32rem] border- [@media(max-width:450px)]:w-[20rem]">
              <h1 className="text-white text-6xl ml-24 [@media(max-width:450px)]:mt-16 [@media(max-width:450px)]:ml-12 [@media(max-width:450px)]:text-4xl" id="change-home-page-sajell">  Hello I AM </h1>
              <h1 className="text-white text-6xl [@media(max-width:450px)]:text-4xl [@media(max-width:450px)]:ml-2" id="change-home-page-sajell">Sajeel Ullah Khan</h1>
              </div>

             <div className="border- w-[29rem] mt-14 ml-2 [@media(max-width:450px)]:w-[20rem] [@media(max-width:450px)]:mt-80">
                <h3 className="text-2xl text-white text-justify [@media(max-width:450px)]:text-xl">I am a dedicated student of web development technologies, focusing
                   on TypeScript, CSS, HTML, Tailwind CSS, Figma and Next.js. My studies cover creating dynamic and 
                   responsive web applications using TypeScript for structured coding, Tailwind CSS for efficient styling,
                    and Next.js for enhanced performance and routing in modern web projects.
                </h3>
             </div>

             <div className="border- w-[29rem]  ml-2 h-24 m-3 [@media(max-width:450px)]:w-[12.7rem]">
                <button className="bg-red-600 h-16 w-48 rounded-xl mt-3 "><h3 className="text-white " id="buttom-home">Lets Get Started</h3> </button>
             </div>

             <div className="text-white absolute right-64 top-72 [@media(max-width:450px)]:left-14 [@media(max-width:450px)]:top-60">
                <div className="border-2 rounded-full w-72 h-72 [@media(max-width:450px)]:w-60 [@media(max-width:450px)]:h-60">
                <Image src={"/picture/sajeel1-removebg-preview.png"} alt={""} width={900} height={900} className="-mt- -ml- w-72 rounded-full [@media(max-width:450px)]:w-60"></Image>
                </div>
             </div>

             <div className="border- w-2/3 h-44 mt-12 flex ml-2 [@media(max-width:450px)]:w-[18rem] [@media(max-width:450px)]:h-24">

                <div className="border-2 w-48 h-20 rounded-xl bg-white [@media(max-width:450px)]:h-16 ">
                     <h1 className="text-black text-center text-3xl mt-1.5 [@media(max-width:450px)]:-mt-0.5">0 y</h1>
                     <h3 className="text-black text-center text-xl">Experience</h3>
                </div>

                <div className="border-2 w-48 h-20 rounded-xl bg-white ml-24 [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-1">
                     <h1 className="text-black text-center text-3xl mt-1.5 [@media(max-width:450px)]:-mt-0.5">0 y</h1>
                     <h3 className="text-black text-center text-xl">Experience</h3>
                </div>
                <div className="border-2 w-48 h-20 rounded-xl bg-white ml-24 [@media(max-width:450px)]:h-16 [@media(max-width:450px)]:ml-1">
                     <h1 className="text-black text-center text-3xl mt-1.5 [@media(max-width:450px)]:-mt-0.5">0 y</h1>
                     <h3 className="text-black text-center text-xl">Experience</h3>
                </div>
                
             </div>


             <div className="border- flex mt-20 [@media(max-width:450px)]:mt-7 ">

             <div className="text-white border- w-80 ml-2  ">
                <div className="border-2 rounded-full w-72 h-72 mt-12 [@media(max-width:450px)]:h-60 [@media(max-width:450px)]:w-60 [@media(max-width:450px)]:ml-8">
                <Image src={"/picture/sajeel1-removebg-preview.png"} alt={""} width={900} height={900} className="-mt- -ml- w-72 rounded-full [@media(max-width:450px)]:w-60"></Image>
                </div>
             </div>

            <div className="border- ml-52 w-[29rem] [@media(max-width:450px)]:-ml-80 [@media(max-width:450px)]:mt-80 [@media(max-width:450px)]:w-[21rem]">
               <h3 className="text-white text-2xl text-justify [@media(max-width:450px)]:text-xl">I specialize in frontend development 
               using HTML, CSS, TypeScript, 
               Tailwind CSS, Next.js, React.js, and 
               Figma. My goal is to create fast, 
               responsive, and visually engaging 
               websites and web applications. 
               Currently, I am expanding my skill set 
               by diving into backend development 
               with Python and building intelligent 
               AI agents. As I progress, I plan to 
               integrate AI-driven solutions and 
               backend logic to deliver end-to-end
               web applications that are both 
               powerful</h3>
            </div>

             </div>

          </div>
      </div>
    </>
  );
}
