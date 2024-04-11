import Image from "next/image"
import Link from "next/link";

export default function RecentActivity(){

    return(
        <>
            <div className="h-[270px] py-4 px-3 inline-flex gap-4 flex-col items-start w-full  bg-gradient-to-b from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] ">
                <div className="text-[13px] text-white/90 leading-none tracking-[-0.12px]">Track project progress</div>
                <div className="w-full h-[0.5px] bg-white/10"></div>
                <div className="flex flex-col gap-3">
                            <div className="text-[12px] leading-3 font-light tracking-[-0.12px] text-white/70">Today</div>
                            <div className="flex items-start gap-3">
                                <div className=" w-8 h-8 rounded-full bg-gradient-to-b from-white/0 to-white/5 ring-1 ring-white/10 flex shrink-0 "></div>
                                <div className="flex flex-col items-start gap-1">
                                    <div className="text-[14px] leading-5 tracking-[-0.12px] font-normal text-white max-w-[280px]  ">
                                        <Link className="text-blue-600 font-medium" href={""}>Zakaria Ghoumidate </Link>
                                         changed the status to In Progress on 
                                        <Link className="  text-blue-600 font-medium pt-[2px]" href={""}>
                                            <Image src={"../checkIcon.svg"} alt={"check blue icon svg"} width={16} height={16} className=" align-middle inline-flex mx-1 mb-[2px] "/>Zak-2asdsadadad
                                        </Link>
                                    </div>
                                    <div  className="text-[12px]  leading-3 tracking-[-0.12px] font-normal text-gray-400">4 minutes ago</div>
                                </div>
                            </div>
                </div>
            </div>
        </>
    )
}