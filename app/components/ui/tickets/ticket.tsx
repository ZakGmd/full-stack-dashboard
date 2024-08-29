import Image from "next/image" ;

export default function Ticket(){

    return(
        <>
          <div className="flex items-center justify-center border-b border-white/40 w-full">
            <div className="inline-flex items-start justify-center w-[65px]">
                            <input type="checkbox" name="" id="" className="items-start inline-flex" />
            </div>
            <div className="text-white text-center w-[109px] border-l border-white/40 py-4 text-[14px] font-medium tracking-[-0.12px] leading-5 h-full ">Type</div>
            <div className="py-4 pl-3 text-white w-[110px] border-l border-r h-full  border-white/40 text-start text-[14px] font-medium tracking-[-0.12px] leading-5 ">Zak-1</div>
             <div className="py-4 pl-3 w-[450px] text-white border-r border-white/40 text-[14px] font-medium tracking-[-0.12px] leading-5 h-full">this is for zak summary</div>
             <div className="py-3 px-3 text-white w-[140px]  border-r  border-white/40   flex items-center h-full  ">
             <span className="px-[2px] py-[5px] bg-[#cee1fd] ring-1 ring-white/5  text-[11px] inline-flex justify-center leading-3 items-center font-[600] rounded text-[#0052CC] tracking-[-0.13px] uppercase w-[100%]">in progress</span>
            </div>
            <div className="py-3 pl-3 h-full text-white w-[229px] flex items-center gap-2  border-r  border-white/40 text-start text-[14px] font-medium tracking-[-0.12px] leading-5 ">
              <div className=" w-6 h-6 rounded-full bg-gradient-to-b from-white/5 to-white/10 ring-1 ring-white/10 flex shrink-0 "></div>
               <div className="text-[14px] leading-5 font-medium tracking-[-0.12px]">Zakaria Ghoumidate</div>
            </div>
            <div className="py-3 pl-3 text-white w-[140px] text-start "><Image src={"../highest.svg"} alt="" width={16} height={16}/></div>
          </div>
        </>
    )
}