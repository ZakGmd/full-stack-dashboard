import Image from "next/image"
import RecentActivity from "@/app/components/ui/dashboard/recent-activity";
import StatusOverview from "@/app/components/ui/dashboard/status-overview";
import { auth } from "@/auth";
import CreateTask from "@/app/components/ui/dashboard/createdTask";
import TaskBoard from "@/app/components/ui/dashboard/taskBoard";


export default async function Page(){
    const session = await auth() ;
    const GoogleImage = session?.user.image
    return( 
        <div className="flex flex-col items-start  ">
            <div className="flex items-center justify-between px-10 py-5 w-full border-b border-[#e6eff52d]">
                <div className="text-[28px] font-semibold leading-normal text-white tracking-[-0.13px] "> {session?.user.name} </div>
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
                        <Image src={GoogleImage} alt={''} width={55} height={55} className="object-contain h-auto w-auto"  />
                    </div>
                </div>
            </div>
            <div className="h-[100vh]  gap-5 w-full flex flex-col pl-10 pr-2 py-6 overflow-scroll relative scrollbar">
                <div className=" grid grid-cols-3 items-start gap-4">
                    <div className="col-span-2 inline-flex flex-col items-start gap-3  ">
                      <div className="text-[22px] font-semibold leading-normal text-[#f7fafc] tracking-[-0.12px] ">Tickets</div>
                      <TaskBoard/>
                      <div className="flex flex-col items-start gap-3 mt-2 w-full">
                            <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px]">Status overview</div>
                            <StatusOverview />
                      </div>         
                    </div>
                    <div className="col-span-1  inline-flex flex-col gap-3 items-start px-3">
                      <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px]">Recent activity</div>
                      <RecentActivity/>
                      
                    </div>

                </div>
               
                
                
            </div>
        </div>

    )
}