import Image from "next/image"
import Tasks from "./tasks"
import {closestCenter, DndContext, DragEndEvent, useDroppable} from '@dnd-kit/core';
import {SortableContext, verticalListSortingStrategy ,arrayMove} from '@dnd-kit/sortable';
import { gql, useQuery } from "@apollo/client";
import { Suspense, useEffect, useState } from "react";
import Droppable from "./droppble";
import Draggable from "./draggable";
import prisma from "@/app/libs/db";
type TaskType = {
    id: string ,
    title: string ,
    description: string ,
    priority: string  , 
    category: string 
}
type T = {
    task: TaskType
}
  const GET_Tasks = gql`
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



export default function Todo({setOpen} : {setOpen: (isOpen: boolean) => void} ) {
    const { data, loading, error } = useQuery(GET_Tasks ,{
        notifyOnNetworkStatusChange: true 
    }); 
   const [task , setTask] = useState<TaskType[]>([])  
    const filtredTasks = data?.getTasks.filter((t:TaskType)=>{ 
            const trimmedCategory = t.category.trim().toLowerCase();
            return trimmedCategory === 'todo';
    })
        
    useEffect(()=>{
        if(filtredTasks) {
            setTask(filtredTasks)
        }
    },[data])
    if (error) return `Error! ${error.message}`;

    
    console.log({task})
        
        function handleDragEnd(event : DragEndEvent) {
            const {active, over} = event;
            if(over && active.id !== over.id ){
                setTask((items)=>{
                    const oldIndex = items?.findIndex(item => item?.id === active.id) ;
                    const newIndex = items?.findIndex(item => item?.id === over.id ) ;
                    var array = arrayMove(items.slice() , oldIndex , newIndex) ;
                    console.log({array})
                   
                    return array

            })
            
            }
            console.log({active , over})
        }
    

    return(
         
        <DndContext
         onDragEnd={handleDragEnd}
         collisionDetection={closestCenter}
         >  
            <Droppable > 
            <div className="px-2 py-3 bg-gradient-to-b   from-white/5 from-2% contrast-150 to-white/10 ring-1 ring-white/15  rounded-[8px] max-w-[270px] min-w-[270px]  flex flex-col gap-4 " >
            <div className="flex items-center justify-between shrink-0  ">
                <div className=" inline-flex items-center gap-1 ">
                    <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                    <div className={` px-[4px] py-[3px] bg-white/15  ring-1 ring-white/5 text-center text-[11px] flex items-center font-[400] rounded text-[#f7fafc] tracking-[-0.13px] leading-3 `}>TO DO</div>
                </div>
                    <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
            </div>
            <div>
                { loading ?(
                        <div>loading</div>
                    ):(     
                        <SortableContext items={task} strategy={verticalListSortingStrategy}>
                            {task?.map((task : TaskType)=>(
                              <Tasks task={task} key={task.id} />
                            ))}
                        </SortableContext>
                               
                    )
                    }  
            </div>
                      
                    <div className=" gap-1 pt-2 px-1 border-t border-t-white/10 " >
                        <div className="flex items-center cursor-pointer gap-1" onClick={()=>setOpen(true)}>
                            <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                            <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]" >Create</div>
                        </div>
                    </div>
            </div>
            </Droppable>
            </DndContext>
             
      
       
    )
}