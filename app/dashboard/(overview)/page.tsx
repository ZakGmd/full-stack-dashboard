import Image from "next/image"
import { Lato } from "next/font/google" ;

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
                    <div className="w-[255px]  max-h-[50px] py-4 px-5 flex items-center gap-4 rounded-[40px] from-white/5 ring-white/15 ring-1 from-10%  to-gray-100/5 bg-gradient-to-br overflow-hidden shrink-0 ">
                        <Image src={"../searchIcon.svg"} alt={"search icon blue thin"} width={20} height={20}/>
                        <input type="text" name="search" id="searchInput" placeholder="Search for Something" className=" bg-transparent  ring-0 outline-none max-w-[176px] placeholder:text-[15px] placeholder:font-normal placeholder:text-white/20 text-white/40 placeholder:bg-transparent" />
                    </div>
                    <div className="flex w-[50px] h-[50px] items-center justify-center from-white/5 ring-white/15 ring-1 from-10%  to-gray-100/5 bg-gradient-to-br shrink-0 rounded-full">
                        <Image src={'../settigs.svg'} alt={'settings icon blue thin'} width={25} height={25}  />
                    </div>
                    <div className="flex w-[50px] h-[50px] items-center justify-center from-white/5 ring-white/15 ring-1 from-10%  to-gray-100/5 bg-gradient-to-br shrink-0 rounded-full">
                        <Image src={'../notification.svg'} alt={'settings icon blue thin'} width={25} height={25}  />
                    </div>
                    <div className="flex w-[55px] h-[55px] items-center justify-center from-white/5 ring-white/15 ring-1 from-10%  to-gray-100/5 bg-gradient-to-br shrink-0 rounded-full overflow-hidden ">
                        <Image src={'../avatrIcon.svg'} alt={''} width={55} height={55} className="object-contain h-auto w-auto"  />
                    </div>
                </div>
            </div>
            <div className="h-[100vh] bg-[#161616] gap-5 w-full flex flex-col px-10 py-6">
                <div className="flex items-start justify-between w-full pr-[183px]">
                    <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px] ">My Cards</div>
                    <div className="max-w-[300px] w-full flex items-center gap-9">
                        <div className="text-[17px] text-white font-semibold leading-normal text-right cursor-pointer ">See All</div>
                        <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px]">Recent Transaction</div>
                    </div>
                </div>
                <div className="px-2 py-3 bg-gradient-to-b from-white/5 from-2% to-white/10 ring-1 ring-white/15 blur-[0.03px] rounded-[8px] min-w-[270px] max-w-[270px] h-[235px] flex flex-col gap-4 ">
                    <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-white/15 ring-1 ring-white/5 text-center text-[11px] flex items-center font-[400] rounded text-slate-100 tracking-[-0.13px] `}>TO DO</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                    </div>
                    <div className="inline-flex items-center gap-1 ">
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>

    )
}