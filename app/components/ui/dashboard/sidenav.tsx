import Image from "next/image"
import NavLinks from "./nav-links"

export default function SideNav(){

    return(
        <>
        <div className="w-[250px] h-full shrink-0 flex flex-col gap-7 ">
           <div className="max-w-[183px] flex items-center gap-2 pr-7 pl-11 pt-[30px] ">
            <Image src={"../admin-svg.svg"} alt={"admin svg logo"} width={28} height={28} />
            <div className="text-[24px] font-extrabold leading-normal tracking-[-0.12px] text-white">Dashboard</div>
           </div>
           <div className="flex flex-col pt-4 pr-9 gap-10 ">
             <NavLinks/>
           </div>
        </div>
        </>
    )
}