import Image from "next/image"
import NavLinks from "./nav-links"
import { signOut } from "@/auth"

export default function SideNav(){

    return(
        <>
        <form className="w-[220px] h-full shrink-0 flex flex-col gap-7 " action={
          async() =>{
            "use server"
            await signOut()
          }
        }>
           <div className="max-w-[183px] flex items-center gap-3 pr-7 pl-11 pt-[30px] ">
            <Image src={"/admin-panel.png"} alt={"admin svg logo"} width={33} height={33} />
            <div className="text-[24px] font-extrabold leading-normal tracking-[-0.12px] text-white">Dashboard</div>
           </div>
           <div className="flex flex-col pt-4 pr-9 gap-10 ">
             <NavLinks/>
           </div>
           <button className='text-white' type="submit">LogOut</button>
        </form>
        </>
    )
}