

import Image from "next/image";
import Login from "@/app/components/ui/login";
import { AuroraBackground } from "@/app/components/ui/background";
import Link from "next/link";
import { SparklesCore } from "./components/ui/sparkles";
export default function Home() {
  return (
   <div className="flex flex-col items-center  ">
    <div className="flex  w-full h-[67px] text-white p-2">
      <div className="flex items-center justify-between w-full gap-5 px-3 py-2 ">
        <div className="flex items-end w-[130.688px] ">
          <Image 
            src="data:image/png;base64,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"
            alt={""}
            width={54}
            height={54}
          />
          <div className="text-[24px] tracking-[-0.12px] leading-[34px] font-semibold ">EXUS</div>
        </div>
        <div className="flex items-center py-3 px-[50px] gap-10 border border-[#BB86FC] rounded-xl text-[17px] font-normal tracking-[-0.12px] leading-[27.3px] text-[#bec0c9] bg-gradient-to-r from-[#bb86fc41] from-10% to-white/20 to-50%">
          <div>Product</div>
          <div>Solutions</div>
          <div>Blog</div>
        </div>
        <div className="flex items-center py-3 gap-2  border border-[#BB86FC] rounded-xl  font-medium ">
          <div>Registre</div>
          <div>SignIn</div>
          
        </div>
      </div>
      
    

    </div>
    <div className="w-full relative mb-[60px]">
    <div className="mt-[-100px] absolute z-[-10] flex w-full  justify-between">
      <Image src={"./leftBgImg.svg"} height={400} width={400} alt="" className="mt-[-135px]"/>
      <Image src={"./rightBgImg.svg"} height={400} width={400} alt=""/>
    </div>
    </div>
    
    <div className=" w-full pt-[48px] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
      Nexus
      </h1>
      <div className="w-[40rem] h-[200px] relative">
      
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      
  
   </div>
  );
}
