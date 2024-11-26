import Image from "next/image";
import Tasks from "./tasks";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import type { TaskType } from "./taskBoard";

interface ColumProps {
  tasks: TaskType[];
  allTasks: TaskType[]; 
  setOpen: (isOpen: boolean) => void;
  classname: string;
  title: string;
  category: string;
}

export default function Colum({ tasks, setOpen, classname, title, category , allTasks}: ColumProps) {
  const { setNodeRef } = useDroppable({ 
    id: category , 
    data:{
      type: "Colum",
      tasks
  } });
  const taskIds = allTasks.map(task => task.id);
  return (
    
    <div
      ref={setNodeRef}
      className="px-2 py-3 bg-gradient-to-b from-white/25 from-[-200%] contrast-150 to-white/10 ring-1 ring-white/15 rounded-[8px] w-[270px]  flex flex-col gap-4"
    >
      <div className="flex items-center justify-between shrink-0">
        <div className="inline-flex items-center gap-1">
          <Image src="/dots-6.svg" alt="" height={18} width={18} />
          <div className={`${classname} px-[4px] py-[3px] ring-1 ring-white/5 text-center text-[11px] flex items-center rounded tracking-[-0.13px] leading-3`}>
            {title}
          </div>
        </div>
        <Image
          src="/three-dots.svg"
          alt=""
          height={20}
          width={20}
          className="cursor-pointer"
        />
      </div>

      <div>
        <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
          {tasks.map((task: TaskType) => (
            <Tasks task={task} key={task.id} />
          ))}
        </SortableContext>
      </div>

      <div className="gap-1 pt-2 px-1 border-t border-t-white/10">
        <div
          className="flex items-center cursor-pointer gap-1"
          onClick={() => setOpen(true)}
        >
          <Image src="/plus-circle.svg" alt="" height={18} width={18} />
          <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">
            Create
          </div>
        </div>
      </div>
    </div>
  );
}

