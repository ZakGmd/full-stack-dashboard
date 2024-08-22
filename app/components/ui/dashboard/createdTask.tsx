import { useSession } from "next-auth/react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useMutation ,gql } from "@apollo/client";
import { useState } from "react";
import PriorityMenu from "./PriorityMenu";
import { GET_Tasks } from "./tasks";

interface formDataInput{
  title: string ;
  description: string ;
  priority: string ;
  ownerId: string

  
}
const ADD_TASK = gql`
mutation CreateTask($description: String!, $title: String!, $priority: String , $ownerId: String) {
  createTask( description: $description, title: $title, priority: $priority ,ownerId: $ownerId ) {
      description 
      title 
      priority
      ownerId
    }
  }
`;

export default  function CreateTask({setOpen} : any) {
    const session =  useSession()
    const [formData , setFormData] = useState<formDataInput>({
      title: "" ,
      description: "" ,
      priority: "" ,
      ownerId: session?.data?.user.id
   
    }) ;
    const handlePrioritySelect = (selectedPriority: string) => {
      setFormData((prevData) => ({
        ...prevData,
        priority: selectedPriority,
      }));
    };
    const handleFormData = (e : React.ChangeEvent<HTMLInputElement>) =>{
      const {name , value} = e.target ;
      setFormData((prevFormData)=>({
        ...prevFormData ,
        [name]: value ,
      }));
      console.log({formData})
    }
    const [createTask, { data, loading, error }] = useMutation(ADD_TASK ,{
      refetchQueries: [
        GET_Tasks,
        'getTask'
      ] ,
    });
    
    if (error) return `Submission error! ${error.message}`;






    return(
        <motion.div 
        className="  w-full "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
            duration: 0.400 ,
            ease: "backOut"
        }}
        
        >
            <div className="mx-auto  flex flex-col w-[640px]  mb-[140px] ">
            <div className="flex flex-col w-full h-full rounded-lg bg-gradient-to-b from-white/20 from-2% to-white/10 gap-4  pt-4 ">
              <div className="flex items-center justify-between border-b pb-2 border-white/10 px-6">
                <div className="flex items-center gap-3">
                    <div className="text-[14px] leading-5 text-white tracking-[-0.12px] cursor-pointer">Task</div>
                    <div className="text-[14px] leading-5 text-white/50 tracking-[-0.12px] font-light cursor-pointer hover:text-white/80">Reminder</div>
                </div>
                <Image alt={""} height={20} width={20} src={"./delete.svg"} className="cursor-pointer " onClick={(prev)=>setOpen(!prev)}/>
              </div>
              <div className="pt-1 flex flex-col items-start justify-start gap-3 px-6">
                <div className=" flex items-ceenter justify-center gap-2">
                    <div className="px-4  leading-[22px] border border-gray-500 flex items-center gap-1 rounded text-[12px] font-light text-white/80 tracking-[-0.12px] cursor-pointer ">Select something</div>
                    <div className="p-1 border border-gray-500 rounded cursor-pointer hover:bg-white/5 transition"> <Image src={"/arrowDown.svg"} alt={""} height={14} width={14} /> </div>
                </div>
                <div className="w-full mt-1">
                    <input 
                    type="text" 
                    placeholder="Task Name" 
                    className="w-full ring-0 bg-white/10 px-2 py-1 rounded-md outline-none placeholder:text-[13px] text-[14px] text-white/70 "
                    value={formData.title}
                    name="title"
                    onChange={handleFormData}
                    />
                </div>
                <div className=" w-full bg-white/10 px-2 py-2 rounded-md flex items-center gap-1 justify-start">
                   <Image src={"/file.svg"} alt={""} height={16} width={16}/> 
                   <input 
                    type="text" 
                    placeholder="Add description" 
                    className="w-full ring-0 bg-transparent  rounded-md outline-none placeholder:text-[13px] placeholder:font-light text-[14px] text-white/60 " 
                    value={formData.description}
                    name="description"
                    onChange={handleFormData}
                    />
                </div>
                <div className="flex items-center justify-start gap-2 pt-1 ">
                    <div className="px-[6px] bg-white/20 rounded-[4px] text-[12px] leading-[22px] cursor-pointer hover:bg-white/40 transition">To Do</div>
                    <div className="p-[2px] items-center flex border border-white/20 rounded-[4px] cursor-pointer"><Image src={session?.data?.user.image} alt={""} height={16} width={16} className="rounded-full"/></div>
                    <div className="pl-[3px] pr-[7px] items-center flex gap-[3px]  rounded-[4px] bg-white/20 cursor-pointer hover:bg-white/40 transition">
                        <Image alt={""} height={16} width={16} src={"./calendar.svg"}/>
                        <div className="text-[12px] leading-[22px]  ">Today</div>
                    </div>
                    <PriorityMenu  
                    onPrioritySelect={handlePrioritySelect}/>
                </div>
              </div>
              <div className=" border-t border-white/5 flex items-center justify-end gap-2 px-6 py-3">
              <div className="px-2 py-1 border border-white/20 font-normal text-[14px] rounded-lg cursor-pointer text-white hover:bg-white/5 transition" onClick={()=>setOpen(false)}>Cancel</div>
                <div className="px-2 py-1 bg-blue-600 hover:bg-blue-700 transition text-[14px] cursor-pointer  rounded-lg text-white" 
                  onClick={(prev)=>{
                    createTask({
                      variables : {
                        description : formData.description ,
                        title: formData.title , 
                        priority: formData.priority,  
                        ownerId: formData.ownerId
                      }}) ;
                    setOpen(!prev)
                }} >Create Task{loading ? "Creating" :""}</div>
                
              </div>
            </div>

        </div>

        </motion.div>
        
    )
}