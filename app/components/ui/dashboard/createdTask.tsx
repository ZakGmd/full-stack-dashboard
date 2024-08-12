import Image from "next/image"

export default function CreateTask() {

    return(
        <div className="mx-auto my-0 flex flex-col min-w-[640px]  h-[500px] mb-[100px] ">
            <div className="flex flex-col w-full h-full rounded-lg bg-gradient-to-b from-white/20 from-2% to-white/10 gap-4 px-6 py-4 ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-[14px] leading-5 text-white tracking-[-0.12px]">Task</div>
                    <div className="text-[14px] leading-5 text-white tracking-[-0.12px]">Reminder</div>
                </div>
              </div>
              <div className="pt-1 flex flex-col items-start justify-start gap-3">
                <div className=" flex items-center justify-center gap-2">
                    <div className="px-4  leading-[22px] border border-gray-500 flex items-center gap-1 rounded text-[12px] font-light text-white/80 tracking-[-0.12px] cursor-pointer ">Select something</div>
                    <div className="p-1 border border-gray-500 rounded cursor-pointer"> <Image src={"/arrowDown.svg"} alt={""} height={14} width={14}/> </div>
                </div>
                <div className="w-full">
                    <input type="text" placeholder="Task Name" className="w-full ring-0 bg-white/10 px-2 py-1 rounded-md outline-none placeholder:text-[13px] text-[14px] text-white/70 " />
                </div>
                <div></div>
                <div></div>

              </div>

            </div>

        </div>
    )
}