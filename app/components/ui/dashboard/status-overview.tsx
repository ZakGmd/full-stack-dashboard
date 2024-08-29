"use client"
import Link from "next/link";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins} from "chart.js/auto";
import DoughnutChart from "./chart";


ChartJS.register(ArcElement, Tooltip, Legend);


 const Data = {
    labels: ['TO DO', 'IN PROGRESS','DONE'],
    datasets: [
      {
        label: "Todo" ,
        data: [10, 10, 1],
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



export default function StatusOverview(){

    return(
        <>
            <div className="bg-gradient-to-b w-full  from-white/5 from-2% to-white/10 ring-1 ring-white/15  rounded-[8px] px-10 py-5 mb-[40px]  ">
                <div className="flex flex-col items-center w-full gap-9 " >
                    <div className="text-[14px] leading-5 tracking-[-0.12px] font-normal text-white text-center ">Get a snapshot of the status of your items. <Link href={"/"} className="text-blue-600 font-light">View all items</Link></div>
                    <div className="flex items-center justify-between w-full">
                      <div className=" w-[310px] h-[280px]  ">
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
        </>
    )
}