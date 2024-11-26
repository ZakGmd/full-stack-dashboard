"use client"
import Image from "next/image"
import Droppable from "./droppble"
import { gql, useMutation, useQuery } from "@apollo/client";
import {closestCenter, DndContext, DragEndEvent, useDroppable} from '@dnd-kit/core';
import { horizontalListSortingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import Tasks from "./tasks";
import { TaskType } from "./taskBoard";
import Draggable from "./draggable";

interface TodoProps {
  tasks: TaskType[];
}

export default function Progress({tasks} : TodoProps) {
  const { setNodeRef } = useDroppable({
    id: "progress",
  });
 
    return(

       
           <div ref={setNodeRef} className="px-2 py-3 bg-gradient-to-b from-white/25 from-[-200%] contrast-150 to-white/10 ring-1 ring-white/15  rounded-[8px] min-w-[270px] max-w-[270px]  flex flex-col gap-4 ">
                    <div className="flex items-center justify-between shrink-0 ">
                        <div className=" inline-flex items-center gap-1 ">
                            <Image src={"../dots-6.svg"} alt={""} height={18} width={18}/>
                            <div className={` px-[4px] py-[3px] bg-[#E9F2FF] ring-1 ring-white/5 text-center text-[11px] flex leading-3 items-center font-[600] rounded  tracking-[-0.13px] uppercase `}>In Progress</div>
                        </div>
                        <Image src={"../three-dots.svg"} alt={""} height={20} width={20} className="cursor-pointer"/>
                    </div>
                      <div>
                        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                        {tasks.map((task: TaskType) => (
                          
                            <Tasks task={task} key={task.id} />
                        
                           
                         ))}
                        </SortableContext>
                      </div>  
                    <div className="inline-flex items-center gap-1 pt-2 px-1 border-t border-t-white/10 w-full cursor-pointer " >
                        <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
                        <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">Create</div>
                    </div>
        </div> 
       

      
        

    )
}