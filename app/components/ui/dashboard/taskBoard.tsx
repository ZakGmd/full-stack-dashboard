"use client"
import Image from "next/image"
import { useState } from "react"
import CreateTask from "./createdTask";
import { SessionProvider } from "next-auth/react";
import Todo from "./Todo";
import Progress from "./inProgress";
import Done from "./done";
import { DndContext } from "@dnd-kit/core";



export default function TaskBoard() {
    const [isOpen , setIsOpen] = useState(false) ;
    
    
   
    return(
        <>
        <SessionProvider>
            <div className="inline-flex items-start gap-3">
                <DndContext>
                    <Todo setOpen={setIsOpen} />
                <Progress/>
                </DndContext>
                
                <Done/>
            </div>
            { isOpen && 
            <div className=" h-full absolute left-0 top-0 flex   items-center justify-center w-full bg-black/50 backdrop-blur-lg" >
                <CreateTask setOpen={setIsOpen} className="z-10" /> 
            </div>
            }
        </SessionProvider>
        
       
        
        </>
        
    )
}