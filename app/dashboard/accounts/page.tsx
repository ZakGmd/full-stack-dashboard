import Image from "next/image"
export default function Accounts(){

    return (
        <div className="flex flex-col items-start">
             <div className="flex items-center justify-between px-10 py-5 w-full border-b border-[#e6eff52d]">
                <div className="text-[28px] font-semibold leading-normal text-white tracking-[-0.13px] ">Accounts</div>
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
            <div className="flex flex-col items-start w-full py-5 px-10 overflow-y-scroll h-[180vh]">
                <div className="inline-flex items-center justify-between w-full">
                    <div className="text-white text-[24px] leading-7 tracking-[-0.12px] font-medium">People and teams</div>
                    <div className="flex items-center gap-4 shrink-0">
                        <div className="px-3 py-1 bg-white/20 rounded-lg font-medium text-white cursor-pointer">Manage users</div>
                        <div className="px-3 py-1 bg-white/20 rounded-lg font-medium text-white cursor-pointer">Create team</div>
                        <div className="px-3 py-1 bg-blue-600 rounded-lg font-medium text-white cursor-pointer">Add people</div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start mt-6 gap-7 ">
                  <div className="w-full  max-h-[50px] py-4 px-5 flex items-center gap-4  border-white/45 border-b  overflow-hidden shrink-0 ">
                        <Image src={"../searchIcon.svg"} alt={"search icon blue thin"} width={20} height={20}/>
                        <input type="text" name="search" id="searchInput" placeholder="Search for people and teams" className=" bg-transparent  ring-0 outline-none  placeholder:text-[15px] placeholder:font-normal placeholder:text-white/50 text-white/90 placeholder:bg-transparent" />
                  </div>
                  <div className="inline-flex flex-col items-start gap-5 w-full">
                     <div className="text-white text-[18px] leading-7 tracking-[-0.12px] font-medium">People</div>
                     <div className="inline-flex items-center gap-3">
                        <div className="h-[180px] min-w-[140px] rounded-md  bg-gradient-to-b from-white/15 from-15% to-white/30 ring-1 ring-white/70 flex flex-col items-center gap-4 px-2 py-4 ">
                            <div className="flex w-[72px] h-[72px] items-center justify-center  ring-1 bg-gradient-to-br from-white/0 from-2% to-black/30 ring-white/65 shrink-0 rounded-full overflow-hidden"></div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="text-[14px] leading-3 font-normal tracking-[-0.13px] text-center text-white">Your teammate</div>
                              <div className="inline-flex items-center text-center px-3 py-1 bg-slate-100/50 text-[14px] font-medium tracking-[-0.13px] text-neutral-900 rounded-md ">Add people</div>
                            </div>
                        </div>
                        <div className="h-[180px] min-w-[140px] rounded-md  bg-gradient-to-b from-white/15 from-15% to-white/30 ring-1 ring-white/70 flex flex-col items-center gap-4 px-2 py-4 ">
                            <div className="flex w-[72px] h-[72px] items-center justify-center  ring-1 bg-gradient-to-br from-white/0 from-2% to-black/30 ring-white/65 shrink-0 rounded-full overflow-hidden">
                                <Image src={"/zakk.jpg"} alt="User Avatar Photo" height={72} width={72}/>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <div className="text-[14px] leading-3 font-normal tracking-[-0.13px] text-center text-white">Zakaria Ghoumidate</div>
                            </div>
                        </div>
                     </div>
                     <div className="flex flex-col items-start gap-7 mt-4 w-full ">
                        <div className="text-white text-[18px] leading-7 tracking-[-0.12px] font-medium">Your teams</div>
                        <div className="flex flex-col items-center justify-center gap-5 w-full mb-[800px]">
                            <Image src={"/network.svg"} alt="" width={188} height={137} />
                            <div className="text-[22px] font-medium text-center leading-7 tracking-[-0.13px] text-ellipsis text-white">Share pages or mention teams rather than <br /> individual members</div>
                            <div className="text-white font-normal">Create a team now or learn <span className="text-blue-600">how you can collaborate with teams</span></div>
                            <div className="px-3 py-1 text-center text-white text-[16px] leading-5 tracking-[-0.12px] bg-blue-500 rounded ">Create team</div>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
        </div>
    )
}