import Image from "next/image"
import NavLinks from "./nav-links"
import { signOut } from "@/auth"

export default function SideNav(){

    return(
        <>
        <form className=" h-full shrink-0 flex justify-between pr-4 flex-col py-8 gap-5  " action={
          async() =>{
            "use server"
            await signOut()
          }
        }>
          <div className="flex w-full flex-col  gap-6">
              <div className=" flex items-center gap-3 px-2   ">
                <Image src={"/admin-panel.png"} alt={"admin svg logo"} width={24} height={24} className="px-1 py-1 border border-white/20 rounded-md" />
                <div className="text-[16px] font-semibold leading-normal tracking-[-0.12px] text-white">Dashboard</div>
              </div>
              <div className="flex flex-col gap-2 ">
                <NavLinks/>
              </div>
          </div>
           <div className="flex gap-2 bg-[#b13a4224] items-center px-1 py-2 rounded-md hover:bg-[#b13a4252] duration-300 cursor-pointer">
            <Image src={"/logout.svg"} alt={""} width={24} height={24}/>
            <button className='text-white text-[13px]' type="submit">Log out</button>
           </div>
           
        </form>
        </>
    )
}