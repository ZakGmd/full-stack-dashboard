import Image from "next/image"

export default function Progress() {

    return(
        <div className="px-2 py-3 bg-gradient-to-b from-white/5 from-2% contrast-150 to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-9 ">
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

    )
}