import Image from "next/image"

export default function Tickets(){

    return (
        <div className="flex flex-col items-start  ">
             <div className="flex items-center justify-between px-10 py-5 w-full border-b border-[#e6eff52d]">
                <div className="text-[28px] font-semibold leading-normal text-white tracking-[-0.13px] ">Tickets</div>
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
            <div className=" py-8 px-10 w-full ">
                <div className="flex flex-col items-start  w-full rounded-xl ring-white/35 ring-1 h-[600px] flex-grow-0 bg-gradient-to-b from-white/0 from-5% via-gray-400/5 via-[11.1%] to-gray-400/10 ">
                    <div className="flex items-center justify-center border-b border-white/40 ">
                        <div className="inline-flex items-center justify-center w-[65px]">
                            <input type="checkbox" name="" id="" className="items-center inline-flex" />
                        </div>
                        <div className="text-[13px] leading-4 font-normal tracking-[-0.11px] text-gray-100   text-center w-[109px] border-l border-white/40 py-3 ">Type</div>
                        <div className="py-3 pl-3  w-[110px] border-l border-r  border-white/40 text-start text-[13px] leading-4 font-normal tracking-[-0.11px] text-gray-100 flex items-center gap-2 "><Image src={"../hashtag.svg"} alt="hashtag logo svg light gray" width={18} height={18}/> Key</div>
                        <div className="py-3 pl-3 w-[450px] text-[13px] leading-4 font-normal tracking-[-0.11px] text-gray-100 border-r border-white/40 flex items-center gap-2"><Image src={"../Group.svg"} alt="hashtag logo svg light gray" width={18} height={18}/>Summary</div>
                        <div className="py-3 pl-3 text-[13px] leading-4 font-normal tracking-[-0.11px] text-gray-100 w-[140px]  border-r  border-white/40 text-start flex items-center gap-2 "><Image src={"../status-up.svg"} alt="hashtag logo svg light gray" width={18} height={18}/>Status</div>
                        <div className="py-3 pl-3 text-[13px] leading-4 font-normal tracking-[-0.11px] text-gray-100 w-[229px]  border-r  border-white/40 text-start flex items-center gap-2"><Image src={"../at-circle.svg"} alt="hashtag logo svg light gray" width={18} height={18}/>Assigne</div>
                        <div className="py-3 pl-3 text-[13px] leading-4 font-normal tracking-[-0.11px] text-gray-100 w-[140px] inline-flex items-center gap-2  text-start ">
                           <Image src={"../arrow-up.svg"} alt="hashtag logo svg light gray" width={18} height={18}/>
                            Priority
                        </div>
                    </div>
                    <div className="flex items-center justify-center border-b border-white/40">
                        <div className="inline-flex items-center justify-center w-[65px]">
                            <input type="checkbox" name="" id="" className="items-center inline-flex" />
                        </div>
                        <div className="text-white text-center w-[109px] border-l border-white/40 py-3 ">Type</div>
                        <div className="py-3 pl-3 text-white w-[110px] border-l border-r  border-white/40 text-start ">Zak-1</div>
                        <div className="py-3 pl-3 w-[450px] text-white border-r border-white/40">this is for zak summary</div>
                        <div className="py-3 px-3 text-white w-[140px]  border-r  border-white/40 h-[100%]  flex items-center  ">
                          <span className="px-[2px] py-[5px] bg-[#cee1fd] ring-1 ring-white/5  text-[11px] inline-flex justify-center leading-3 items-center font-[600] rounded text-[#0052CC] tracking-[-0.13px] uppercase w-[100%]">in progress</span>
                        </div>
                        <div className="py-3 pl-3 text-white w-[229px]  border-r  border-white/40 text-start "> @  Assignee</div>
                        <div className="py-3 pl-3 text-white w-[140px]   text-start "><Image src={"../highest.svg"} alt="" width={16} height={16}/></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}