import Image from "next/image"
import { gql, useQuery } from '@apollo/client';
type TaskType = {
    id: string ,
    title: string ,
    description: string ,
    priority: string 
}
export const GET_Tasks = gql`
  query getTask{
    getTasks{
      id
      title
      description
      priority
    }
  }
`;
export default function Tasks() {
    const { data ,loading, error } = useQuery(GET_Tasks);
    if (error) return `Error! ${error.message}`;
    if (loading) return 'Loading...';
    const tasks = data?.getTasks

    console.log(tasks)
    return(
        <div>
            {
             tasks.map((task : TaskType)=>(
             <div key={task.id} className="w-full mb-2  bg-gradient-to-b px-2 py-3  from-white/20 from-2% to-white/10 ring-1 ring-white/25 rounded-lg flex flex-col gap-6 hover:bg-white/5 transition-all duration-300 ease">
                <div className="flex items-center justify-between">
                <div className="text-[14px] leading-3 tracking-[-0.12px] font-normal text-[#f7fafc]">{task.title}</div>
                <Image src={"../three-dots.svg"} alt={""} width={20} height={20}/>
                </div>
                <div className="flex items-center justify-between">
                 <div className="inline-flex items-center gap-1">
                    <Image src={"../checkIcon.svg"} alt="check icon blue svg" width={14} height={14} />
                    <span className="text-[12px] leading-normal tracking-[-0.12px] font-normal text-gray-400">{task.description}</span>
                </div>
                <Image src={task.priority === "Urgent" ? "../flag-urgent.svg" : task.priority === "High" ? "../flag-high.svg" : task.priority === "Medium" ? "../flag-normal.svg" : "../flag-low.svg"} width={16} height={16} alt=" 2 bars icon svg orange"/>
                </div>
              </div>
             )
            )   
             
            }
          

        </div>
        
    )
}