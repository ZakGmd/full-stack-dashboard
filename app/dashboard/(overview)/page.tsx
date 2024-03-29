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
                <div className=" pt-6  bg-gradient-to-b from-white/5 from-2.61% to-gray-100/0 rounded-3xl w-[350px] h-[235px] flex flex-col gap-8 ">
                    <div className="flex items-center justify-between pl-[26px] pr-6 w-full">
                        <div className="flex flex-col gap-1 items-start">
                            <div className={`${lato.className} text-[12px] font-[300] leading-normal text-white `}>Balance</div>
                            <div className={`${lato.className} text-[20px] font-[400] leading-normal text-white `}>$5,756</div>
                        </div>
                        <Image src={"../ChipCard.svg"} alt={"chip card svg icon"} width={35} height={35} />
                    </div>
                    <div className="max-w-[227px] pl-[26px] flex items-center justify-between">
                        <div className="flex flex-col items-start">
                            <div className={`${lato.className} text-white/70 text-[12px] font-[300] leading-normal`}>CARD HOLDER</div>
                            <div className={`${lato.className} text-white text-[15px] font-[400] leading-normal`}>Eddy Cusuma</div>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className={`${lato.className} text-white/70 text-[12px] font-[300] leading-normal`}>VALID THRU</div>
                            <div className={`${lato.className} text-white text-[15px] font-[400] leading-normal`}>12/22</div>
                        </div>

                    </div>
                    <div className=" bg-gradient-to-b from-white/15 from-0% to-white/0 to-100% w-full h-[70px]"></div>
                </div>
            </div>
        </div>

    )
}