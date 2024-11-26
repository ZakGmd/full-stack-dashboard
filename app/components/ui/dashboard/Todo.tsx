import Image from "next/image";
import Tasks from "./tasks";
import { horizontalListSortingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import type { TaskType } from "./taskBoard";
import Draggable from "./draggable";

interface TodoProps {
  tasks: TaskType[];
  setOpen: (isOpen: boolean) => void;
}

export default function Todo({ tasks, setOpen }: TodoProps) {
  const { setNodeRef } = useDroppable({
    id: "todo",
  });

  return (
    <div
      ref={setNodeRef}
      className="px-2 py-3 bg-gradient-to-b from-white/25 from-[-200%] contrast-150 to-white/10 ring-1 ring-white/15 rounded-[8px] max-w-[270px] min-w-[270px] flex flex-col gap-4"
    >
      <div className="flex items-center justify-between shrink-0">
        <div className="inline-flex items-center gap-1">
          <Image src={"../dots-6.svg"} alt={""} height={18} width={18} />
          <div className="px-[4px] py-[3px] bg-white/15 ring-1 ring-white/5 text-center text-[11px] flex items-center font-[400] rounded text-[#f7fafc] tracking-[-0.13px] leading-3">
            TO DO
          </div>
        </div>
        <Image
          src={"../three-dots.svg"}
          alt={""}
          height={20}
          width={20}
          className="cursor-pointer"
        />
      </div>

      <div>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
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
          <Image src={"../plus-circle.svg"} alt={""} height={18} width={18} />
          <div className="text-[12px] text-slate-50 leading-tight tracking-[-0.12px]">
            Create
          </div>
        </div>
      </div>
    </div>
  );
}