import Image from "next/image"
import { Lato } from "next/font/google" ;
import Link from "next/link";

const lato = Lato({
    weight: ["300" ,"400" ,"700"] ,
    subsets: ['latin'],

})

export default function Page(){

    return( 
        <div className="flex flex-col items-start ">
            <div className="flex items-center justify-between px-10 py-5 w-full border-b border-[#e6eff52d]">
                <div className="text-[28px] font-semibold leading-normal text-white tracking-[-0.13px] ">Overview</div>
                <div className="flex items-center gap-7 shrink-0">
                    <div className="w-[255px]  max-h-[50px] py-4 px-5 flex items-center gap-4 rounded-[40px] ring-white/15 ring-1 bg-gradient-to-b from-white/5 from-2% to-white/10 overflow-hidden shrink-0 ">
                        <Image src={"../searchIcon.svg"} alt={"search icon blue thin"} width={20} height={20}/>
                        <input type="text" name="search" id="searchInput" placeholder="Search for Something" className=" bg-transparent  ring-0 outline-none max-w-[176px] placeholder:text-[15px] placeholder:font-normal placeholder:text-white/20 text-white/40 placeholder:bg-transparent" />
                    </div>
                    <div className="flex w-[40px] h-[40px] items-center justify-center  ring-1 bg-gradient-to-br from-white/5 from-2% to-white/10 ring-white/15 shrink-0 rounded-full">
                        <Image src={'../settings.svg'} alt={'settings icon blue thin'} width={20} height={20} className=" opacity-50 "  />
                    </div>
                    <div className="flex w-[40px] h-[40px] items-center justify-center  ring-1 bg-gradient-to-br from-white/5 from-2% to-white/10 ring-white/15 shrink-0 rounded-full">
                        <Image src={'../notification.svg'} alt={'settings icon blue thin'} width={20} height={20} className=" opacity-50 " />
                    </div>
                    <div className="flex w-[55px] h-[55px] items-center justify-center  ring-1 bg-gradient-to-br from-white/5 from-2% to-white/10 ring-white/15 shrink-0 rounded-full overflow-hidden ">
                        <Image src={'../avatrIcon.svg'} alt={''} width={55} height={55} className="object-contain h-auto w-auto"  />
                    </div>
                </div>
            </div>
            <div className="h-[100vh] bg-[#161616] gap-5 w-full flex flex-col px-10 py-6">
                <div className=" grid grid-cols-3 items-start gap-4">
                    <div className="col-span-2 inline-flex flex-col items-start gap-3 pr-[183px] ">
                      <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px] ">Tickets</div>
                      <div className="inline-flex items-center gap-3">
                  <div className="px-2 py-3 bg-gradient-to-b from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-9 ">
                    <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-white/15 ring-1 ring-white/5 text-center text-[11px] flex items-center font-[400] rounded text-slate-100 tracking-[-0.13px] leading-3 `}>TO DO</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                    </div>
                    <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full  ">
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">Create</div>
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
                    <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full  ">
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
                    <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full  ">
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">Create</div>
                    </div>
                  </div>
                      </div>
                    </div>
                    <div className="col-span-1  inline-flex flex-col gap-3 items-start px-3">
                      <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px]">Recent activity</div>
                      <div className="h-[270px] py-4 px-3 inline-flex gap-4 flex-col items-start w-full  bg-gradient-to-b from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] ">
                        <div className="text-[13px] text-white/90 leading-none tracking-[-0.12px]">Track project progress</div>
                        <div className="w-full h-[0.5px] bg-white/10"></div>
                        <div className="flex flex-col gap-3">
                            <div className="text-[12px] leading-3 font-light tracking-[-0.12px] text-white/70">Today</div>
                            <div className="flex items-start gap-3">
                                <div className=" w-8 h-8 rounded-full bg-gradient-to-b from-white/0 to-white/5 ring-1 ring-white/10 flex shrink-0 "></div>
                                <div className="flex flex-col items-start gap-1">
                                    <div className="text-[14px] leading-5 tracking-[-0.12px] font-normal text-white max-w-[280px]  ">
                                        <Link className="text-[#0052CC] font-medium" href={""}>Zakaria Ghoumidate </Link>
                                         changed the status to In Progress on 
                                        <Link className="  text-[#0052CC]" href={""}>
                                            <Image src={"../checkIcon.svg"} alt={"check blue icon svg"} width={12} height={12} className=" align-middle inline-flex mx-1 "/>Zak-2asdsadadad
                                        </Link>
                                    </div>
                                    <div  className="text-[12px]  leading-3 tracking-[-0.12px] font-normal text-gray-400">4 minutes ago</div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>

                </div>
               
                
                
            </div>
        </div>

    )
}