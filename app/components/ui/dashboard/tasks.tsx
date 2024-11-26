import Image from "next/image"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { motion } from "framer-motion";

type TaskType = {
  id: string,
  title: string,
  description: string,
  priority: string,
  category: string
}

type T = {
  task: TaskType
}

export default function Tasks({ task }: T) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ 
     id: task.id ,
     data:{
      type:"Task",
      task
  } });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.div 
    className="  w-full  "
    initial={{ opacity: 0 , translateY: -50 }}
    animate={{ opacity: 1, translateY: 0}}
    transition={{ 
        duration: 0.400 ,
        ease: "backOut"
    }}
    
    >
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}  
      datatype="Task"
      className="w-full cursor-grab mb-2 bg-gradient-to-b px-2 py-3 from-white/25 from-2% to-white/10 ring-1 ring-white/25 rounded-lg flex flex-col gap-6 hover:bg-white/5 transition-all duration-300 ease"
    >
      <div className="flex items-center justify-between">
        <div className="text-[14px] leading-3 tracking-[-0.12px] font-normal text-[#f7fafc]">{task.title}</div>
        <Image src="/three-dots.svg" alt="" width={20} height={20}/>
      </div>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1">
          <Image src="/checkIcon.svg" alt="check icon blue svg" width={14} height={14} />
          <span className="text-[12px] leading-normal tracking-[-0.12px] font-normal text-gray-400">{task.description}</span>
        </div>
        <Image 
          src={
            task.priority === "Urgent" ? "/flag-urgent.svg" : 
            task.priority === "High" ? "/flag-high.svg" : 
            task.priority === "Medium" ? "/flag-normal.svg" : 
            "/flag-low.svg"
          } 
          width={16} 
          height={16} 
          alt="priority flag icon"
        />
      </div>
    </div>
    </motion.div>
  );
}

