"use client"
 
import { getUserByEmail } from "@/app/data/user";
import { signIn } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils";

import Image from "next/image";

 
export default  function GoogleLoginButton(){
    
    
    return(
       
       
            <button  onClick={() => signIn("google", {redirectTo : "/"}) } className="w-full h-12 flex items-center justify-center self-stretch gap-3 p-[14px] bg-gradient-to-br rounded-3xl from-white/5  to-gray-100/0 text-gray-100 text-[18px] font-normal leading-5 tracking-[-0.13px] ring-white/15 ring-1" 
            >Continue With Google  <Image src={"Gicon.svg"} alt={"arrow right icon svg "} width={20} height={20}  /> </button> 
    
       
        
      
        
        
    )
}