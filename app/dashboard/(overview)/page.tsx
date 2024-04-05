"use client"
import Image from "next/image"
import Link from "next/link";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins    } from "chart.js/auto";
import  DoughnutChart  from "../../components/ui/dashboard/chart" ;
ChartJS.register(ArcElement, Tooltip, Legend);


 const Data = {
    labels: ['TO DO', 'IN PROGRESS','DONE'],
    datasets: [
      {
        label: "Todo" ,
        data: [20, 20, 60],
        backgroundColor: [
          'rgba(255, 255, 255, 0.5)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,   
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
     plugins:{
            legend:{
                display : false ,
            }
          } ,
  };




export default function Page(){

    return( 
        <div className="flex flex-col items-start ">
            <div className="flex items-center justify-between px-10 py-5 w-full border-b border-[#e6eff52d]">
                <div className="text-[28px] font-semibold leading-normal text-white tracking-[-0.13px] ">Overview</div>
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
            <div className="h-[100vh] bg-[#161616] gap-5 w-full flex flex-col pl-10 pr-2 py-6 overflow-scroll scrollbar">
                <div className=" grid grid-cols-3 items-start gap-4">
                    <div className="col-span-2 inline-flex flex-col items-start gap-3  ">
                      <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px] ">Tickets</div>
                      <div className="inline-flex items-start gap-3">
                        <div className="px-2 py-3 bg-gradient-to-b  from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-4">
                         <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-white/15 ring-1 ring-white/5 text-center text-[11px] flex items-center font-[400] rounded text-slate-100 tracking-[-0.13px] leading-3 `}>TO DO</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                         </div>
                         <div className="w-full  bg-gradient-to-b px-2 py-3  from-white/20 from-2% to-white/10 ring-1 ring-white/25 rounded-lg flex flex-col gap-6 cursor-grab">
                            <div className="flex items-center justify-between">
                                <div className="text-[14px] leading-3 tracking-[-0.12px] font-normal text-white">hey</div>
                                <Image src={"../three-dots.svg"} alt={""} width={20} height={20}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-1">
                                    <Image src={"../checkIcon.svg"} alt="check icon blue svg" width={14} height={14} />
                                    <span className="text-[12px] leading-normal tracking-[-0.12px] font-normal text-gray-400">Zak-1</span>
                                </div>
                                <Image src={"../mediumIcon.svg"} width={18} height={18} alt=" 2 bars icon svg orange"/>
                            </div>
                         </div>
                         <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full  ">
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">Create</div>
                    </div>
                        </div>
                        <div className="px-2 py-3 bg-gradient-to-b from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-9 ">
                    <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-[#E9F2FF] ring-1 ring-white/5 text-center text-[11px] flex leading-3 items-center font-[600] rounded text-[#0052CC] tracking-[-0.13px] uppercase `}>In Progress</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                    </div>
                    <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full  ">
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">Create</div>
                    </div>
                        </div>
                        <div className="px-2 py-3 bg-gradient-to-b from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-9 ">
                    <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-[#e1fff3fd] ring-1 ring-white/5 text-center text-[11px] flex items-center font-[800] rounded text-[#174b36] tracking-[-0.13px] uppercase leading-3 `}>DONE</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                    </div>
                    <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full  ">
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">Create</div>
                    </div>
                            </div>
                      </div>
                       <div className="flex flex-col items-start gap-3 mt-2 w-full">
                            <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px]">Status overview</div>
                            <div className="bg-gradient-to-b w-full  from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] px-10 py-5 ">
                                <div className="flex flex-col items-center w-full gap-9" >
                                  <div className="text-[14px] leading-5 tracking-[-0.12px] font-normal text-white text-center ">Get a snapshot of the status of your items. <Link href={"/"} className="text-blue-600 font-light">View all items</Link></div>
                                  <div className="flex items-center justify-between w-full">
                                    <div className=" w-[380px] h-[320px]  ">
    
                                        <DoughnutChart type={"doughnut"} data={Data} options={chartOptions}/>
                                    </div>
                                    <div className=" w-[320px]  items-center flex justify-center">
                                       <div className="flex flex-col items-start justify-center gap-5 w-full">
                                       {
                                            Data.labels.map((label , index)=>{
                                                return (
                                                    <div key={index} className="flex items-center justify-between w-full ">
                                                        <div className="text-white text-[16px] flex items-center gap-2 font-medium leading-normal  tracking-[-0.12px]"><span style={{ backgroundColor: Data.datasets[0].borderColor[index] , width: ' 16px' , height: '16px' , display: "inline-flex" }} className="  rounded-[4px] "></span> {label} :</div>
                                                        <div className="text-blue-200 text-[14px]  font-normal leading-normal  tracking-[-0.12px]">{Data.datasets[0].data[index]}</div>

                                                    </div>
                                                    
                                                )
                                            })
                                        }
                                       </div>
                                    </div>
                                </div>
                                </div>
                                
                                
                            </div>
                        </div>         
                    </div>
                    <div className="col-span-1  inline-flex flex-col gap-3 items-start px-3">
                      <div className="text-[22px] font-semibold leading-normal text-white tracking-[-0.12px]">Recent activity</div>
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
                    </div>

                </div>
               
                
                
            </div>
        </div>

    )
}