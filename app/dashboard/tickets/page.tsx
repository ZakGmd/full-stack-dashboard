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
                <div className="flex flex-col items-start  w-full rounded-xl ring-white/15 ring-1 h-[600px] flex-grow-0 bg-gradient-to-b from-white/0 from-5% via-white/5 via-50% to-white/10 "></div>
                
            </div>
        </div>
    )
}