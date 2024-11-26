"use client"
import { DndContext, DragEndEvent, closestCorners, PointerSensor, TouchSensor, useSensor, useSensors, DragOverEvent, DragStartEvent, closestCenter } from "@dnd-kit/core";
import { useState, useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import Colum from "./colum";
import CreateTask from "./createdTask";
import { arrayMove } from "@dnd-kit/sortable";

export const GET_TASKS = gql`
  query getTask {
    getTasks {
      id
      title
      position
      description
      priority
      category
    }
  }
`;

export type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: string;
  category: string;
  position: number;
};

export default function TaskBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(GET_TASKS, {
    notifyOnNetworkStatusChange: true,
  });
  

  const [tasks, setTasks] = useState<TaskType[]>([]);

  useMemo(() => {
    if (data?.getTasks) {
      setTasks(data.getTasks);
    }
  }, [data]);

  const todoTasks = useMemo(() => 
    tasks.filter((t: TaskType) => t.category.toLowerCase().trim() === 'todo'),
    [tasks]
  );

  const progressTasks = useMemo(() => 
    tasks.filter((t: TaskType) => t.category.toLowerCase().trim() === 'progress'),
    [tasks]
  );

  const doneTasks = useMemo(() => 
    tasks.filter((t: TaskType) => t.category.toLowerCase().trim() === 'done'),
    [tasks]
  );
  

  function handleDragEnd(event : DragEndEvent) {
    const {active, over} = event;
    
    if(over && active.id !== over.id ){
        setTasks((items)=>{
            const oldIndex = items?.findIndex(item => item?.id === active.id) ;
            const newIndex = items?.findIndex(item => item?.id === over.id ) ;
            const draggedTask : TaskType = items?.[oldIndex] ;
            console.log(draggedTask.category)
            var array = arrayMove(items.slice() , oldIndex , newIndex) ;
            return array
    })
}
}
function handleDragOver(event: DragOverEvent) {
  const {active, over} = event;
  const activeId = active.id;
  const overId = over?.id; 
  if (!over || activeId === overId) return;
  const isTaskActive = active.data.current?.type === "Task";
  const overColumn = over?.data.current?.type === "Colum";
  setTasks((currentTasks) => {
    const updatedTasks = [...currentTasks];
    if (isTaskActive && overColumn) {
      const activeIndex = updatedTasks.findIndex(item => item.id === activeId);
      if (activeIndex !== -1) {
        updatedTasks[activeIndex] = {
          ...updatedTasks[activeIndex],
          category: overId as string
        };
      }
    }
    console.log("UpTasks:",{updatedTasks})
    return updatedTasks;
  });
}



  return (
    <SessionProvider>
  
        <DndContext
          
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          
        >
         <div className="inline-flex items-start gap-3 contrast-175">
      <Colum
        tasks={todoTasks}
        allTasks={tasks}
        setOpen={setIsOpen}
        classname="bg-white/15 font-[500] text-[#f7fafc] uppercase"
        title="To Do"
        category="todo"
      />
      <Colum
        tasks={progressTasks}
        allTasks={tasks}
        setOpen={setIsOpen}
        classname="text-[#0052CC] bg-[#E9F2FF] font-[500] uppercase"
        title="In Progress"
        category="progress"
      />
      <Colum
        tasks={doneTasks}
        allTasks={tasks}
        setOpen={setIsOpen}
        classname="text-[#00875A] bg-[#E3FCEF] font-[500] uppercase"
        title="Done"
        category="done"
      />
    </div>
        </DndContext>
      

      {isOpen && (
        <div className="h-full absolute left-0 top-0 flex items-center justify-center w-full bg-black/50 backdrop-blur-lg z-10">
          <CreateTask setOpen={setIsOpen} className="z-10" />
        </div>
      )}
    </SessionProvider>
  );
}
