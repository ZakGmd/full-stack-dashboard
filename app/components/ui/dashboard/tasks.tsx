import Image from "next/image"
import { gql, useQuery } from '@apollo/client';
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

type TaskType = {
    id: string ,
    title: string ,
    description: string ,
    priority: string  , 
    category: string 
}
type T = {
  tasks: TaskType
}

export const GET_Tasks = gql`
  query getTask{
    getTasks{
      id
      title
      description
      priority
      category
    }
  }
`;

export default function Tasks(props : T) {
  const {tasks} = props ;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: tasks.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
    return(
        <div>
                <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="w-full mb-2  bg-gradient-to-b px-2 py-3  from-white/20 from-2% to-white/10 ring-1 ring-white/25 rounded-lg flex flex-col gap-6 hover:bg-white/5 transition-all duration-300 ease">
                <div className="flex items-center justify-between">
                <div className="text-[14px] leading-3 tracking-[-0.12px] font-normal text-[#f7fafc]">{tasks.title}</div>
                <Image src={"../three-dots.svg"} alt={""} width={20} height={20}/>
                </div>
                <div className="flex items-center justify-between">
                 <div className="inline-flex items-center gap-1">
                    <Image src={"../checkIcon.svg"} alt="check icon blue svg" width={14} height={14} />
                    <span className="text-[12px] leading-normal tracking-[-0.12px] font-normal text-gray-400">{tasks.description}</span>
                </div>
                <Image src={tasks.priority === "Urgent" ? "../flag-urgent.svg" : tasks.priority === "High" ? "../flag-high.svg" : tasks.priority === "Medium" ? "../flag-normal.svg" : "../flag-low.svg"} width={16} height={16} alt=" 2 bars icon svg orange"/>
                </div>
              </div>
             
             
            
          

        </div>
        
    )
}