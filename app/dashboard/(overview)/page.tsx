import Image from "next/image"

export default function Page(){

    return( 
        <div className="flex flex-col items-start ">
            <div className="flex items-center justify-between px-10 py-5 w-full">
                <div className="text-[28px] font-semibold leading-normal text-[#343C6A] ">Overview</div>
                <div className="flex items-center gap-7 shrink-0">
                    <div className="w-[255px]  max-h-[50px] py-4 px-5 flex items-center gap-4 rounded-[40px] bg-[#F5F7FA] overflow-hidden shrink-0 ">
                        <Image src={"../searchIcon.svg"} alt={"search icon blue thin"} width={20} height={20}/>
                        <input type="text" name="search" id="searchInput" placeholder="Search for Something" className="bg-[#F5F7FA] ring-0 outline-none max-w-[176px] placeholder:text-[15px] placeholder:font-normal placeholder:text-[#8BA3CB] text-gray-600" />
                    </div>
                </div>
            </div>
            
        </div>

    )
}