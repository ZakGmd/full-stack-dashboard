import Image from "next/image"
import { Lato } from "next/font/google" ;

const lato = Lato({
    weight: ["300" ,"400" ,"700"] ,
    subsets: ['latin'],

})

export default function Page(){

    return( 
        <div className="flex flex-col items-start ">
            <div className="flex items-center justify-between px-10 py-5 w-full border-b border-[#E6EFF5]">
                <div className="text-[28px] font-semibold leading-normal text-[#343C6A] tracking-[-0.13px] ">Overview</div>
                <div className="flex items-center gap-7 shrink-0">
                    <div className="w-[255px]  max-h-[50px] py-4 px-5 flex items-center gap-4 rounded-[40px] bg-[#F5F7FA] overflow-hidden shrink-0 ">
                        <Image src={"../searchIcon.svg"} alt={"search icon blue thin"} width={20} height={20}/>
                        <input type="text" name="search" id="searchInput" placeholder="Search for Something" className="bg-[#F5F7FA] ring-0 outline-none max-w-[176px] placeholder:text-[15px] placeholder:font-normal placeholder:text-[#8BA3CB] text-gray-600" />
                    </div>
                    <div className="flex w-[50px] h-[50px] items-center justify-center bg-[#F5F7FA] shrink-0 rounded-full">
                        <Image src={'../settings.svg'} alt={'settings icon blue thin'} width={25} height={25}  />
                    </div>
                    <div className="flex w-[50px] h-[50px] items-center justify-center bg-[#F5F7FA] shrink-0 rounded-full">
                        <Image src={'../notification.svg'} alt={'settings icon blue thin'} width={25} height={25}  />
                    </div>
                    <div className="flex w-[55px] h-[55px] items-center justify-center bg-[#F5F7FA] shrink-0 rounded-full overflow-hidden ">
                        <Image src={'../avatarIcon.svg'} alt={'settings icon blue thin'} width={55} height={55} className="object-contain h-screen w-screen"  />
                    </div>
                </div>
            </div>
            <div className="h-[100vh] bg-[#F5F7FA] gap-5 w-full flex flex-col px-10 py-6">
                <div className="flex items-start justify-between w-full pr-[183px]">
                    <div className="text-[22px] font-semibold leading-normal text-[#343C6A] tracking-[-0.12px] ">My Cards</div>
                    <div className="max-w-[300px] w-full flex items-center gap-9">
                        <div className="text-[17px] text-[#343C6A] font-semibold leading-normal text-right cursor-pointer ">See All</div>
                        <div className="text-[22px] font-semibold leading-normal text-[#343C6A] tracking-[-0.12px]">Recent Transaction</div>
                    </div>
                </div>
                <div className=" pt-6 pl-[26px] bg-gradient-to-b from-[#4C49ED] from-2.61% to-[#0A06F4] rounded-3xl w-[350px] h-[235px] ">
                    <div className="flex items-center justify-between pr-6 w-full">
                        <div className="flex flex-col gap-1 items-start">
                            <div className={`${lato.className} `}>Balance</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}