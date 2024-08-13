"use client"
import Image from "next/image"
import { useState } from "react"
import CreateTask from "./createdTask";
import { SessionProvider } from "next-auth/react";
export default function TaskBoard() {
    const [isOpen , setIsOpen] = useState(false) ;

    console.log(isOpen)
    return(
        <>
        <SessionProvider>
            <div className="inline-flex items-start gap-3">
                        <div className="px-2 py-3 bg-gradient-to-b  from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-4">
                         <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-white/15 ring-1 ring-white/5 text-center text-[11px] flex items-center font-[400] rounded text-[#f7fafc] tracking-[-0.13px] leading-3 `}>TO DO</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                         </div>
                         <div className="w-full  bg-gradient-to-b px-2 py-3  from-white/20 from-2% to-white/10 ring-1 ring-white/25 rounded-lg flex flex-col gap-6 hover:bg-white/5 transition-all duration-300 ease">
                            <div className="flex items-center justify-between">
                                <div className="text-[14px] leading-3 tracking-[-0.12px] font-normal text-[#f7fafc]">hey</div>
                                <Image src={"../three-dots.svg"} alt={""} width={20} height={20}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-1">
                                    <Image src={"../checkIcon.svg"} alt="check icon blue svg" width={14} height={14} />
                                    <span className="text-[12px] leading-normal tracking-[-0.12px] font-normal text-gray-400">Zak-1</span>
                                </div>
                                <Image src={"../mediumIcon.svg"} width={18} height={18} alt=" 2 bars icon svg orange"/>
                            </div>
                         </div>
                         <div className=" gap-1 pt-2 px-1 border-t border-t-white/10 " >
                         <div className="flex items-center cursor-pointer gap-1" onClick={()=>setIsOpen(true)}>
                           <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                           <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]" >Create</div>
                         </div>
                    
                    </div>
                        </div>
                        <div className="px-2 py-3 bg-gradient-to-b from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-9 ">
                    <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-[#E9F2FF] ring-1 ring-white/5 text-center text-[11px] flex leading-3 items-center font-[600] rounded text-[#0052CC] tracking-[-0.13px] uppercase `}>In Progress</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                    </div>
                    <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full cursor-pointer " >
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">Create</div>
                    </div>
                        </div>
                        <div className="px-2 py-3 bg-gradient-to-b from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-9 ">
                    <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-[#e1fff3fd] ring-1 ring-white/5 text-center text-[11px] flex items-center font-[800] rounded text-[#174b36] tracking-[-0.13px] uppercase leading-3 `}>DONE</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                    </div>
                    <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full cursor-pointer ">
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">Create</div>
                    </div>
                        </div>
            </div>
            { isOpen && 
            <div className=" h-full absolute left-0 top-0 flex   items-center justify-center w-full bg-black/50 backdrop-blur-lg" >
                <CreateTask setOpen={setIsOpen} className="z-10" /> 
            </div>
            }
        </SessionProvider>
        
       
        
        </>
        
    )
}